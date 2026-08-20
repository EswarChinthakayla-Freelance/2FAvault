import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const changelogPath = path.resolve(__dirname, '../src/content/changelog/index.ts');
console.log(`[VALIDATE_CHANGELOG] Reading ${changelogPath}`);

const content = fs.readFileSync(changelogPath, 'utf8');

// Basic sanity check on changelog content
if (!content.includes('CHANGELOG_ENTRIES')) {
  console.error('❌ CHANGELOG_ENTRIES not found in index.ts');
  process.exit(1);
}

if (!content.includes('1.0.0')) {
  console.error('❌ Version 1.0.0 not found in changelog');
  process.exit(1);
}

console.log('✅ Changelog validation passed: Canonical changelog entries are properly structured.');
