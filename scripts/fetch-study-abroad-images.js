const https = require('https')
const fs = require('fs')
const path = require('path')

const IMAGES = [
  { url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', name: 'pexels-3184360.jpg' },
  { url: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg', name: 'pexels-3184306.jpg' },
  { url: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg', name: 'pexels-5668473.jpg' },
  { url: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg', name: 'pexels-3184298.jpg' },
  { url: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg', name: 'pexels-3769021.jpg' },
  { url: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg', name: 'pexels-5905710.jpg' },
  { url: 'https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg', name: 'pexels-7235804.jpg' },
  { url: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg', name: 'pexels-5212339.jpg' },
  { url: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg', name: 'pexels-4145190.jpg' },
  { url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg', name: 'pexels-3184639.jpg' },
  { url: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg', name: 'pexels-6147369.jpg' },
  { url: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', name: 'pexels-267885.jpg' },
]

const destDir = path.join(__dirname, '..', 'public', 'study-abroad')

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${res.statusCode})`))
          return
        }
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

async function main() {
  console.log('Downloading study abroad images into public/study-abroad...')
  for (const img of IMAGES) {
    const dest = path.join(destDir, img.name)
    try {
      await download(img.url, dest)
      console.log(`✓ ${img.name}`)
    } catch (err) {
      console.error(`✗ ${img.name} -`, err.message)
    }
  }

  console.log('\nDone. Verify the images in public/study-abroad and commit them to the repo for production usage.')
  console.log("Recommended: run 'npm run download:study-images' or 'node scripts/fetch-study-abroad-images.js'")
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})