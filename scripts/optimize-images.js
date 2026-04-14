const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(process.cwd(), 'public/images')

console.log('📂 Checking folder:', inputDir)

// ❗ Check if folder exists
if (!fs.existsSync(inputDir)) {
  console.log('❌ Folder NOT found!')
  process.exit(1)
}

// ❗ List all files
const files = fs.readdirSync(inputDir)

console.log('📄 Files found:', files)

// ❗ Try ONLY hero image
const heroPath = path.join(inputDir, 'sofa-banner-hero.webp')

console.log('🎯 Hero path:', heroPath)

// ❗ Check if hero exists
if (!fs.existsSync(heroPath)) {
  console.log('❌ HERO FILE NOT FOUND')
  process.exit(1)
}

// 🔥 Process hero ONLY
sharp(heroPath)
  .resize({ width: 1200 })
  .webp({ quality: 50 })
  .toFile(path.join(inputDir, 'output-test.webp'))
  .then(() => console.log('🔥 HERO WORKED'))
  .catch((err) => console.error('❌ ERROR:', err))
