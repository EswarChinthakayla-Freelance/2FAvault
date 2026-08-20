import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const VAULT_MARK_64 = `M31.995 5.25 C34.258 5.25 36.326 6.529 37.339 8.553 L40.683 15.241 C41.237 16.349 42.147 17.239 43.267 17.767 L50.023 20.951 C52.072 21.916 53.4 23.954 53.45 26.217 C53.5 28.48 52.264 30.574 50.26 31.629 L43.653 35.106 C42.558 35.682 41.677 36.592 41.137 37.706 L37.872 44.443 C36.884 46.481 34.832 47.786 32.568 47.807 C30.304 47.828 28.228 46.561 27.202 44.542 L23.823 37.891 C23.263 36.789 22.348 35.904 21.225 35.383 L14.452 32.234 C12.398 31.279 11.06 29.247 11 26.984 C10.94 24.721 12.167 22.622 14.166 21.558 L20.756 18.051 C21.847 17.47 22.723 16.556 23.258 15.44 L26.49 8.687 C27.47 6.64 29.733 5.25 31.995 5.25 Z M32.027 13.292 C30.918 13.292 29.9 13.925 29.413 14.921 L27.434 18.969 C26.374 21.138 24.659 22.912 22.527 24.045 L18.525 26.172 C17.548 26.692 16.948 27.724 16.976 28.831 C17.005 29.938 17.658 30.938 18.66 31.404 L22.767 33.315 C24.958 34.333 26.741 36.057 27.835 38.208 L29.887 42.244 C30.388 43.23 31.406 43.847 32.513 43.837 C33.62 43.827 34.627 43.191 35.11 42.195 L37.091 38.106 C38.146 35.931 39.857 34.151 41.986 33.031 L45.992 30.923 C46.972 30.407 47.577 29.378 47.553 28.271 C47.528 27.164 46.879 26.161 45.879 25.691 L41.783 23.76 C39.598 22.73 37.824 20.998 36.742 18.841 L34.72 14.808 C34.226 13.822 33.132 13.292 32.027 13.292 Z M32.246 21.021 C38.298 21.021 43.204 25.927 43.204 31.979 C43.204 38.031 38.298 42.937 32.246 42.937 C26.194 42.937 21.288 38.031 21.288 31.979 C21.288 25.927 26.194 21.021 32.246 21.021 Z M32.246 27.276 C29.649 27.276 27.543 29.382 27.543 31.979 C27.543 34.576 29.649 36.682 32.246 36.682 C34.843 36.682 36.949 34.576 36.949 31.979 C36.949 29.382 34.843 27.276 32.246 27.276 Z`;

function renderSvg(svgString, width) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: 'width',
      value: width,
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

/**
 * Creates SVG with centered Vault Loop mark
 */
function createVaultSvg({ size, markSize, markColor = '#FAFAFA', bgColor = null }) {
  const scale = markSize / 43;
  const origCenterX = 32.22;
  const origCenterY = 26.53;
  
  const tx = (size / 2) - (origCenterX * scale);
  const ty = (size / 2) - (origCenterY * scale);

  let bgElements = '';
  if (bgColor) {
    bgElements = `<rect width="${size}" height="${size}" fill="${bgColor}" />`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${bgElements}
    <g transform="translate(${tx.toFixed(2)}, ${ty.toFixed(2)}) scale(${scale.toFixed(4)})">
      <path fill="${markColor}" fill-rule="evenodd" clip-rule="evenodd" d="${VAULT_MARK_64}" />
    </g>
  </svg>`;
}

/**
 * Creates rich 1200x630 OpenGraph Preview SVG Card
 */
function createOgPreviewSvg() {
  const width = 1200;
  const height = 630;
  
  // Icon position
  const iconSize = 140;
  const scale = iconSize / 43;
  const origCenterX = 32.22;
  const origCenterY = 26.53;
  
  const iconBoxX = 600 - 90;
  const iconBoxY = 110;
  const iconBoxW = 180;
  const iconBoxH = 180;
  
  const tx = (iconBoxX + iconBoxW / 2) - (origCenterX * scale);
  const ty = (iconBoxY + iconBoxH / 2) - (origCenterY * scale);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#121216" />
        <stop offset="100%" stop-color="#09090B" />
      </linearGradient>
      <radialGradient id="centerGlow" cx="50%" cy="35%" r="45%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.08)" />
        <stop offset="100%" stop-color="rgba(9, 9, 11, 0)" />
      </radialGradient>
      <linearGradient id="badgeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#222226" />
        <stop offset="100%" stop-color="#141417" />
      </linearGradient>
      <linearGradient id="badgeBorder" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3F3F46" />
        <stop offset="100%" stop-color="#27272A" />
      </linearGradient>
      <linearGradient id="pillBorder" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#27272A" />
        <stop offset="100%" stop-color="#3F3F46" />
      </linearGradient>
    </defs>

    <!-- Canvas Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGradient)" />
    <rect width="${width}" height="${height}" fill="url(#centerGlow)" />

    <!-- Subtle Grid Pattern -->
    <g opacity="0.12" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="4 8">
      <line x1="100" y1="0" x2="100" y2="${height}" />
      <line x1="300" y1="0" x2="300" y2="${height}" />
      <line x1="500" y1="0" x2="500" y2="${height}" />
      <line x1="700" y1="0" x2="700" y2="${height}" />
      <line x1="900" y1="0" x2="900" y2="${height}" />
      <line x1="1100" y1="0" x2="1100" y2="${height}" />
      <line x1="0" y1="120" x2="${width}" y2="120" />
      <line x1="0" y1="280" x2="${width}" y2="280" />
      <line x1="0" y1="440" x2="${width}" y2="440" />
      <line x1="0" y1="560" x2="${width}" y2="560" />
    </g>

    <!-- Outer Decorative Ambient Border -->
    <rect x="32" y="32" width="${width - 64}" height="${height - 64}" rx="28" fill="none" stroke="#27272A" stroke-width="1.5" opacity="0.6" />

    <!-- Brand Icon Container -->
    <rect x="${iconBoxX}" y="${iconBoxY}" width="${iconBoxW}" height="${iconBoxH}" rx="44" fill="url(#badgeGradient)" stroke="url(#badgeBorder)" stroke-width="2.5" />
    
    <!-- Vault Loop Brand Mark -->
    <g transform="translate(${tx.toFixed(2)}, ${ty.toFixed(2)}) scale(${scale.toFixed(4)})">
      <path fill="#FAFAFA" fill-rule="evenodd" clip-rule="evenodd" d="${VAULT_MARK_64}" />
    </g>

    <!-- Title & Wordmark -->
    <text x="600" y="350" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="52" font-weight="800" fill="#FAFAFA" letter-spacing="-1.5">
      2FA VAULT
    </text>

    <!-- Tagline -->
    <text x="600" y="400" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="22" font-weight="500" fill="#A1A1AA" letter-spacing="-0.2">
      Offline TOTP Authenticator &amp; Zero-Knowledge Secure Recovery
    </text>

    <!-- Feature Badges Row -->
    <g transform="translate(600, 480)">
      <!-- Badge 1: 100% Offline -->
      <g transform="translate(-360, 0)">
        <rect x="0" y="0" width="165" height="42" rx="21" fill="#18181B" stroke="#27272A" stroke-width="1.2" />
        <text x="82.5" y="26" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="14" font-weight="600" fill="#FAFAFA">⚡ 100% Offline</text>
      </g>
      <!-- Badge 2: Zero-Knowledge -->
      <g transform="translate(-180, 0)">
        <rect x="0" y="0" width="180" height="42" rx="21" fill="#18181B" stroke="#27272A" stroke-width="1.2" />
        <text x="90" y="26" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="14" font-weight="600" fill="#FAFAFA">🔒 Zero-Knowledge</text>
      </g>
      <!-- Badge 3: Recovery Codes -->
      <g transform="translate(15, 0)">
        <rect x="0" y="0" width="180" height="42" rx="21" fill="#18181B" stroke="#27272A" stroke-width="1.2" />
        <text x="90" y="26" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="14" font-weight="600" fill="#FAFAFA">🛡️ Recovery Vault</text>
      </g>
      <!-- Badge 4: Android -->
      <g transform="translate(210, 0)">
        <rect x="0" y="0" width="150" height="42" rx="21" fill="#18181B" stroke="#27272A" stroke-width="1.2" />
        <text x="75" y="26" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif" font-size="14" font-weight="600" fill="#FAFAFA">📱 Android</text>
      </g>
    </g>

    <!-- Bottom URL Branding -->
    <text x="600" y="575" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="15" font-weight="500" fill="#71717A" letter-spacing="1">
      2favault.vercel.app
    </text>
  </svg>`;
}

const webPublicDir = path.resolve('web/public');

console.log('Generating web public brand assets in:', webPublicDir);

// 1. Apple Touch Icon (180x180 / 512x512)
const appleTouchSvg = createVaultSvg({
  size: 512,
  markSize: 300,
  markColor: '#FAFAFA',
  bgColor: '#09090B',
});
fs.writeFileSync(path.join(webPublicDir, 'apple-touch-icon.png'), renderSvg(appleTouchSvg, 512));
console.log('✅ web/public/apple-touch-icon.png (512x512) generated');

// 2. Favicon PNG (128x128)
const faviconPngSvg = createVaultSvg({
  size: 128,
  markSize: 76,
  markColor: '#FAFAFA',
  bgColor: '#09090B',
});
fs.writeFileSync(path.join(webPublicDir, 'favicon.png'), renderSvg(faviconPngSvg, 128));
console.log('✅ web/public/favicon.png (128x128) generated');

// 3. OpenGraph / Social Share Preview Image (1200x630)
const ogSvg = createOgPreviewSvg();
fs.writeFileSync(path.join(webPublicDir, 'og-preview.png'), renderSvg(ogSvg, 1200));
console.log('✅ web/public/og-preview.png (1200x630) generated');

console.log('\n🎉 Web public brand assets generated successfully!');
