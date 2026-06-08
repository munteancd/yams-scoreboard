const sharp = require('sharp');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#1a1a2e"/>
  <rect x="96" y="96" width="320" height="320" rx="56" fill="#e94560"/>
  <circle cx="176" cy="176" r="34" fill="#fff"/>
  <circle cx="336" cy="176" r="34" fill="#fff"/>
  <circle cx="256" cy="256" r="34" fill="#fff"/>
  <circle cx="176" cy="336" r="34" fill="#fff"/>
  <circle cx="336" cy="336" r="34" fill="#fff"/>
</svg>`;

(async () => {
  const buf = Buffer.from(svg);
  await sharp(buf).resize(192, 192).png().toFile('icons/icon-192.png');
  await sharp(buf).resize(512, 512).png().toFile('icons/icon-512.png');
  console.log('icons generated');
})();
