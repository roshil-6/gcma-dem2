const https = require('https')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public')
const dest = path.join(ROOT, 'english-classes', 'govt-students', 'hero-banner.jpg')
const fallbackDest = path.join(ROOT, 'english-classes', 'govt-students', 'banner.jpg')
const url = 'https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg'

function download(sourceUrl, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath)
    https
      .get(sourceUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirect = res.headers.location
          if (!redirect) {
            reject(new Error(`Redirect without location for ${sourceUrl}`))
            return
          }
          res.resume()
          download(redirect, outputPath).then(resolve).catch(reject)
          return
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${sourceUrl}' (${res.statusCode})`))
          return
        }

        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(outputPath, () => {})
        reject(err)
      })
  })
}

async function main() {
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  await download(url, dest)
  fs.copyFileSync(dest, fallbackDest)
  console.log('Downloaded english-classes/govt-students/hero-banner.jpg')
  console.log('Updated english-classes/govt-students/banner.jpg')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
