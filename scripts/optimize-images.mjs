import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const INPUT_DIR = "public/ejemplos";
const OUTPUT_DIR = "public/ejemplos"; // We'll save WebPs in the same folder

const files = readdirSync(INPUT_DIR).filter((file) => file.endsWith(".png"));

console.log(`🚀 Inicianado optimización de ${files.length} imágenes...`);

async function optimize() {
  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const outputPath = join(OUTPUT_DIR, file.replace(".png", ".webp"));

    const beforeSize = statSync(inputPath).size;

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const afterSize = statSync(outputPath).size;
      const reduction = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(2);

      console.log(`✅ ${file} -> ${file.replace(".png", ".webp")} | Reducción: ${reduction}% (${(afterSize / 1024).toFixed(2)} KB)`);
    } catch (error) {
      console.error(`❌ Error al optimizar ${file}:`, error);
    }
  }
  console.log("✨ Optimización completada.");
}

optimize();
