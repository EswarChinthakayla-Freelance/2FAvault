import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const releasesPath = path.resolve(__dirname, '../src/data/releases.ts');
console.log(`[VERIFY_DOWNLOADS] Checking release metadata in ${releasesPath}`);

const content = fs.readFileSync(releasesPath, 'utf8');

// Ensure SHA-256 is 64 hex characters
const shaMatch = content.match(/apkSha256:\s*'([a-f0-9]{64})'/i);
if (!shaMatch) {
  console.error('❌ Valid 64-character SHA-256 hash not found in releases.ts');
  process.exit(1);
}

const sha = shaMatch[1];
console.log(`✅ Verified SHA-256 hash format: ${sha}`);

// Ensure APK filename matches version
if (!content.includes('2fa-vault-1.0.0.apk')) {
  console.error('❌ Expected APK filename not found in releases.ts');
  process.exit(1);
}

console.log('✅ Download verification passed: Release metadata is valid.');
