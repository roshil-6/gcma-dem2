const https = require('https')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public')

const IMAGES = [
  { dest: 'visit-visa/process-initial-assessment.jpg', url: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'visit-visa/process-document-preparation.jpg', url: 'https://images.pexels.com/photos/5905883/pexels-photo-5905883.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'visit-visa/process-application-submission.jpg', url: 'https://images.pexels.com/photos/590051/pexels-photo-590051.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'visit-visa/process-follow-up-approval.jpg', url: 'https://images.pexels.com/photos/327043/pexels-photo-327043.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'visit-visa/checklist-essential-documents.jpg', url: 'https://images.pexels.com/photos/3938612/pexels-photo-3938612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'visit-visa/checklist-supporting-documents.jpg', url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
  console.log('Downloading visit visa images into public/visit-visa/...')

  for (const image of IMAGES) {
    const dest = path.join(ROOT, image.dest)
    fs.mkdirSync(path.dirname(dest), { recursive: true })

    try {
      await download(image.url, dest)
      console.log(`✓ ${image.dest}`)
    } catch (err) {
      console.error(`✗ ${image.dest} - ${err.message}`)
    }
  }

  console.log('\nDone.')
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
