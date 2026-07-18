// resize.js
import sharp from "sharp";
import fs from "fs";

const files = fs.readdirSync("./src/assets/images");
for (const file of files) {
  if (!file.endsWith(".webp") && !file.endsWith(".jpg")) continue;
  await sharp(`./src/assets/images/${file}`)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(`./src/assets/optimized/${file.replace(/\.\w+$/, ".webp")}`);
}