import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/DELL/Downloads/City King Website/public';

const sizes = [16, 32, 48, 64, 128, 256];
const images = [];

for (const size of sizes) {
  const filePath = path.join(publicDir, `favicon-${size}x${size}.png`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const data = fs.readFileSync(filePath);
  images.push({
    width: size,
    height: size,
    data,
  });
}

function packIco(pngImages) {
  const count = pngImages.length;
  // 6-byte header
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 (ICO)
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + count * 16;
  const entries = [];

  for (const img of pngImages) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // Width
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // Height
    entry.writeUInt8(0, 2); // Colors (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset from start of file
    entries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...pngImages.map(img => img.data),
  ]);
}

const icoBuffer = packIco(images);
const icoPath = path.join(publicDir, 'favicon.ico');
fs.writeFileSync(icoPath, icoBuffer);

console.log(`Successfully generated multi-resolution favicon.ico (${icoBuffer.length} bytes) containing:`, sizes.map(s => `${s}x${s}`).join(', '));
