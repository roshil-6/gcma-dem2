# How to Add Images to Your Website

## Quick Start Guide

### Step 1: Locate the Public Folder
All images must be placed in the `public` folder at the root of your project:
```
gcma & social welfare/
  └── public/          ← Place images here or in subfolders
```

### Step 2: Choose the Right Subfolder

Your website has organized image folders for different sections:

| Section | Folder Path | Example |
|---------|-------------|---------|
| **Nursing Photos** | `public/nursing/photos/` | `australia-who.jpg` |
| **Nursing Flags** | `public/nursing/flags/` | `au.png` |
| **Study Abroad** | `public/study-abroad/` | `banner.jpg` |
| **Travel** | `public/travel/` | `banner.jpg` |
| **Visit Visa** | `public/visit-visa/` | `feature1.jpg` |
| **Tutors** | `public/tutors/` | `significance.jpg` |
| **Migration Advice** | `public/migration-advice/` | `australia.jpg` |
| **English Classes** | `public/english-classes/adults/` | `banner.jpg` |
| **Break the Silence** | `public/break-the-silence/` | `banner.jpg` |
| **Charity Support** | `public/charity-support/` | `education.jpg` |
| **Hero/Logo** | `public/` (root) | `logo_statue.png` |

### Step 3: Name Your Image File

**IMPORTANT:** Use descriptive, lowercase names with hyphens:
- ✅ **GOOD:** `australia-banner.jpg`, `feature-1.jpg`, `nursing-photo.png`
- ❌ **BAD:** `IMG_1234.jpg`, `New Image.png`, `PHOTO (1).jpeg`

### Step 4: Add the Image to the Folder

1. Copy your image file
2. Navigate to the appropriate folder (e.g., `public/nursing/photos/`)
3. Paste the image file
4. Rename it if needed to match the naming convention

### Step 5: Reference the Image in Code

In your React/Next.js components, reference images with a leading slash:

```tsx
// For images in public/nursing/photos/
<Image src="/nursing/photos/australia-banner.jpg" alt="Australia" fill />

// For images in public/ root
<Image src="/logo_statue.png" alt="Logo" width={100} height={100} />

// For images in public/study-abroad/
<Image src="/study-abroad/banner.jpg" alt="Study Abroad" fill />
```

**Note:** The path starts with `/` and does NOT include the word "public"

### Step 6: Clear Browser Cache

After adding new images:
1. **Hard Refresh:** Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. **Or:** Open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

---

## Common Issues & Solutions

### Issue 1: Image Not Showing
**Possible Causes:**
- ✅ Check the file path is correct (starts with `/`)
- ✅ Verify the image file exists in the public folder
- ✅ Check the file extension matches (`.jpg` vs `.jpeg` vs `.png`)
- ✅ Clear browser cache (Ctrl + F5)
- ✅ Check for typos in the filename

### Issue 2: Image Shows Broken Icon
**Possible Causes:**
- ✅ File path is incorrect
- ✅ Image file is corrupted
- ✅ File permissions issue (rare on Windows)

### Issue 3: Old Image Still Showing
**Solution:**
- Clear browser cache with hard refresh (Ctrl + F5)
- Restart the dev server (`npm run dev`)

---

## Image Requirements

### File Formats
- ✅ **Recommended:** `.jpg`, `.jpeg`, `.png`, `.webp`
- ⚠️ **Avoid:** `.bmp`, `.tiff`, `.gif` (for photos)

### File Sizes
- **Banner images:** 1920x1080px or larger (landscape)
- **Feature images:** 800x600px minimum
- **Icons/Logos:** 512x512px minimum (square)
- **File size:** Keep under 2MB for faster loading

### Optimization Tips
1. Compress images before uploading (use tools like TinyPNG)
2. Use `.webp` format for better compression
3. Use appropriate dimensions (don't upload 4K images if you only need 1080p)

---

## Examples

### Adding a New Nursing Country Banner

1. **Prepare your image:**
   - Name: `sweden-banner.jpg`
   - Size: 1920x1080px
   - Format: JPG

2. **Place in folder:**
   ```
   public/nursing/photos/sweden-banner.jpg
   ```

3. **Reference in code:**
   ```tsx
   <NursingCountryBanner
     country="Sweden"
     subtitle="Nordic Healthcare Excellence"
     flagSrc="/nursing/flags/se.png"
     bannerSrc="/nursing/photos/sweden-banner.jpg"
   />
   ```

### Adding a Study Abroad Feature Image

1. **Prepare your image:**
   - Name: `scholarship-assistance.jpg`
   - Size: 800x600px

2. **Place in folder:**
   ```
   public/study-abroad/scholarship-assistance.jpg
   ```

3. **Reference in code:**
   ```tsx
   <Image 
     src="/study-abroad/scholarship-assistance.jpg" 
     alt="Scholarship Assistance" 
     fill 
     className="object-cover"
   />
   ```

---

## Need Help?

If images still aren't showing:
1. Run the verification script: `node scripts/verify-images.js`
2. Check the browser console (F12) for errors
3. Verify the dev server is running (`npm run dev`)
4. Check that the file path in your code matches the actual file location

---

## Directory Structure Reference

```
public/
├── logo_statue.png
├── hero-background.jpeg
├── nursing/
│   ├── flags/
│   │   ├── au.png
│   │   ├── ca.png
│   │   ├── gb.png
│   │   └── ...
│   └── photos/
│       ├── australia-banner.jpg
│       ├── australia-who.jpg
│       ├── canada-banner.jpg
│       └── ...
├── study-abroad/
│   ├── banner.jpg
│   ├── to-study.jpg
│   └── ...
├── travel/
│   ├── banner.jpg
│   ├── uae-banner.jpg
│   └── ...
├── visit-visa/
│   ├── banner.jpg
│   └── ...
└── [other folders...]
```
