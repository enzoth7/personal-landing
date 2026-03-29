import sharp from "sharp";
import { statSync } from "fs";
import { join } from "path";

const ASSETS = [
  { name: "wallpaper.jpg", dir: "public" },
  { name: "1_ext.jpg", dir: "public" }
];

console.log("💎 Iniciando optimización de ALTA CALIDAD (95%)...");

async function optimizeHighQuality() {
  for (const asset of ASSETS) {
    const inputPath = join(asset.dir, asset.name);
    const outputPath = join(asset.dir, asset.name.split(".")[0] + ".webp");

    const beforeSize = statSync(inputPath).size;

    try {
      await sharp(inputPath)
        .webp({ quality: 95, effort: 6 })
        .toFile(outputPath);

      const afterSize = statSync(outputPath).size;
      const reduction = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(2);

      console.log(`✅ [PREMIUM] ${asset.name} -> ${asset.name.split(".")[0]}.webp | Reducción: ${reduction}% (${(afterSize / 1024 / 1024).toFixed(2)} MB)`);
    } catch (error) {
      console.error(`❌ Error al optimizar ${asset.name}:`, error);
    }
  }
  console.log("✨ Optimización de alta fidelidad completada.");
}

optimizeHighQuality();
