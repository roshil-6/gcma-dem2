const https = require('https')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public')
const IMAGES = [
  {
    dest: 'english-classes/adults/tracks/pte-core.jpg',
    url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  },
  {
    dest: 'english-classes/adults/tracks/pte-academics.jpg',
    url: 'https://images.pexels.com/photos/8197554/pexels-photo-8197554.jpeg',
  },
  {
    dest: 'english-classes/adults/tracks/ielts-general.jpg',
    url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
  },
  {
    dest: 'english-classes/adults/tracks/ielts-academics.jpg',
    url: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg',
  },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirect = res.headers.location
          if (!redirect) {
            reject(new Error(`Redirect without location for ${url}`))
            return
          }
          res.resume()
          download(redirect, dest).then(resolve).catch(reject)
          return
        }

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
  for (const image of IMAGES) {
    const dest = path.join(ROOT, image.dest)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    await download(image.url, dest)
    console.log(`Downloaded ${image.dest}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
