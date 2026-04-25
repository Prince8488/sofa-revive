const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(process.cwd(), 'public/images')

if (!fs.existsSync(inputDir)) {
  process.exit(1)
}

const files = fs.readdirSync(inputDir)

const heroPath = path.join(inputDir, 'sofa-banner-hero.webp')

if (!fs.existsSync(heroPath)) {
  process.exit(1)
}

sharp(heroPath)
  .resize({ width: 1200 })
  .webp({ quality: 50 })
  .toFile(path.join(inputDir, 'output-test.webp'))
  .then(() => console.log('🔥 HERO WORKED'))
  .catch((err) => console.error('❌ ERROR:', err))
