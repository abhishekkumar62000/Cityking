import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/DELL/Downloads/City King Website/public';
const pngData = fs.readFileSync(path.join(publicDir, 'favicon-256x256.png')).toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="30%" stop-color="#F59E0B" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- High-Fidelity Official City King Masala Emblem -->
  <image
    href="data:image/png;base64,${pngData}"
    x="16"
    y="16"
    width="480"
    height="480"
    preserveAspectRatio="xMidYMid meet"
    filter="url(#royalGlow)"
  />
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
console.log('Successfully generated public/favicon.svg');
