const https = require('https')
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'public')

const IMAGES = [
  { dest: 'travel/why-global-network.jpg', url: 'https://images.pexels.com/photos/3467511/pexels-photo-3467511.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/why-expert-consultants.jpg', url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/why-best-price.jpg', url: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/why-support-247.jpg', url: 'https://images.pexels.com/photos/7652087/pexels-photo-7652087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/why-digital-itinerary.jpg', url: 'https://images.pexels.com/photos/4370235/pexels-photo-4370235.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/why-personalized-service.jpg', url: 'https://images.pexels.com/photos/3155660/pexels-photo-3155660.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-destination-research.jpg', url: 'https://images.pexels.com/photos/3046629/pexels-photo-3046629.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-custom-itinerary.jpg', url: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-budget-planning.jpg', url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-travel-insurance.jpg', url: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-flight-booking.jpg', url: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-accommodation.jpg', url: 'https://images.pexels.com/photos/2716247/pexels-photo-2716247.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-transportation.jpg', url: 'https://images.pexels.com/photos/170327/pexels-photo-170327.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
  { dest: 'travel/service-activities.jpg', url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop' },
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
  console.log('Downloading travel card images into public/travel/...')

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
