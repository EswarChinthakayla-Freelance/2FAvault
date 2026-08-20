import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'src/content/changelog/index.ts'), 'utf8');
const entries = [...source.matchAll(/slug:\s*'([^']+)'[\s\S]*?version:\s*'([^']+)'[\s\S]*?releasedAt:\s*'([^']+)'/g)]
  .map(([, slug, version, releasedAt]) => ({ slug, version, releasedAt }));
const errors = [];
const semver = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

if (!entries.length) errors.push('No structured changelog entries found.');
for (const entry of entries) {
  if (!semver.test(entry.version)) errors.push(`${entry.version}: invalid semantic version.`);
  if (Number.isNaN(Date.parse(`${entry.releasedAt}T00:00:00Z`))) errors.push(`${entry.version}: invalid release date.`);
}
if (new Set(entries.map((entry) => entry.version)).size !== entries.length) errors.push('Changelog versions must be unique.');
if (new Set(entries.map((entry) => entry.slug)).size !== entries.length) errors.push('Changelog slugs must be unique.');
for (let index = 1; index < entries.length; index += 1) {
  if (Date.parse(entries[index - 1].releasedAt) < Date.parse(entries[index].releasedAt)) errors.push('Changelog entries must be sorted newest first.');
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}
console.log(`Changelog validation passed for ${entries.length} unique, ordered release(s).`);
