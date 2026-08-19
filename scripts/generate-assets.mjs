/**
 * Génère favicons + OG image depuis les SVG de marque.
 * Usage : node scripts/generate-assets.mjs
 * Sorties : app/favicon.ico, app/icon.png, app/apple-icon.png,
 *           app/opengraph-image.png, public/brand/icon-{16,32,180,512}.png
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const brand = (f) => path.join(root, "public", "brand", f);

const iconSvg = await readFile(brand("Eyeconic_Logo_Icon.svg"));
const hWhiteSvg = await readFile(brand("Eyeconic_Logo_H_White.svg"));

async function iconPng(size, { background = null } = {}) {
  let img = sharp(iconSvg, { density: 300 }).resize(size, size, {
    fit: "contain",
    background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
  });
  if (background) img = img.flatten({ background });
  return img.png().toBuffer();
}

await mkdir(path.join(root, "public", "brand"), { recursive: true });

// Favicons 16 / 32 / 180 / 512
const sizes = [16, 32, 180, 512];
const buffers = {};
for (const size of sizes) {
  buffers[size] = await iconPng(size);
  await writeFile(brand(`icon-${size}.png`), buffers[size]);
}

// Conventions de fichiers Next (app/)
await writeFile(path.join(root, "app", "icon.png"), buffers[512]);
// Apple touch : fond opaque paper, icône à 80 %
const appleIcon = await sharp(await iconPng(144))
  .extend({
    top: 18,
    bottom: 18,
    left: 18,
    right: 18,
    background: "#f9f9f9",
  })
  .flatten({ background: "#f9f9f9" })
  .png()
  .toBuffer();
await writeFile(path.join(root, "app", "apple-icon.png"), appleIcon);

// favicon.ico multi-tailles
const ico = await pngToIco([buffers[16], buffers[32]]);
await writeFile(path.join(root, "app", "favicon.ico"), ico);

// OG image 1200×630 — chambre noire + logo horizontal blanc
const logoWidth = 680;
const logo = await sharp(hWhiteSvg, { density: 300 })
  .resize(logoWidth, null, { fit: "inside" })
  .png()
  .toBuffer();
const logoMeta = await sharp(logo).metadata();
const og = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#041f38",
  },
})
  .composite([
    {
      input: logo,
      left: Math.round((1200 - logoWidth) / 2),
      top: Math.round((630 - logoMeta.height) / 2),
    },
  ])
  .png()
  .toBuffer();
await writeFile(path.join(root, "app", "opengraph-image.png"), og);

console.log("Assets générés : favicon.ico, icon.png, apple-icon.png, opengraph-image.png, icon-{16,32,180,512}.png");
