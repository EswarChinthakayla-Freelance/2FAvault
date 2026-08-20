import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const releaseSource = fs.readFileSync(path.join(root, 'src/data/releases.ts'), 'utf8');
const changelogSource = fs.readFileSync(path.join(root, 'src/content/changelog/index.ts'), 'utf8');
const blocks = [...releaseSource.matchAll(/\{\s*version:\s*'([^']+)'([\s\S]*?)\n\s*\},/g)];
const errors = [];

if (!blocks.length) errors.push('No releases found in the canonical release manifest.');
for (const [, version, body] of blocks) {
  const readString = (field) => body.match(new RegExp(`${field}:\\s*'([^']+)'`))?.[1];
  const readNumber = (field) => Number(body.match(new RegExp(`${field}:\\s*(\\d+)`))?.[1]);
  const apkUrl = readString('apkUrl');
  const sha = readString('apkSha256');
  const size = readNumber('apkSizeBytes');
  const configuredCount = [apkUrl, sha, Number.isFinite(size) ? size : undefined].filter(Boolean).length;

  if (configuredCount !== 0 && configuredCount !== 3) errors.push(`v${version}: apkUrl, apkSha256, and apkSizeBytes must be published together.`);
  if (sha && !/^[a-f0-9]{64}$/i.test(sha)) errors.push(`v${version}: SHA-256 must contain 64 hex characters.`);
  if (apkUrl?.startsWith('/')) {
    const artifact = path.join(root, 'public', apkUrl.replace(/^\//, ''));
    if (fs.existsSync(artifact)) {
      const fileSize = fs.statSync(artifact).size;
      let isLfsPointer = false;
      try {
        if (fileSize < 1024) {
          const content = fs.readFileSync(artifact, 'utf8');
          if (content.includes('git-lfs.github.com')) {
            isLfsPointer = true;
          }
        }
      } catch {}

      if (!isLfsPointer && fileSize !== size) {
        errors.push(`v${version}: declared APK size does not match the file (${fileSize} vs ${size}).`);
      }
    }
  }
  if (apkUrl && !apkUrl.includes(version)) errors.push(`v${version}: APK URL does not contain its release version.`);
  if (!changelogSource.includes(`version: '${version}'`)) errors.push(`v${version}: matching changelog entry is missing.`);
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}
console.log(`Release verification passed for ${blocks.length} release(s); unavailable artifacts are represented safely.`);
