const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

console.log(`${colors.cyan}===========================================`);
console.log(`  Image Verification Script`);
console.log(`===========================================${colors.reset}\n`);

// Get all image references from TSX/TS files
function findImageReferences(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip node_modules and .next directories
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                findImageReferences(filePath, fileList);
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Extract image paths from file content
function extractImagePaths(content) {
    const imagePaths = new Set();

    // Match src="/path/to/image.ext" or src='/path/to/image.ext'
    const srcPattern = /src=["'](\/[^"']+\.(?:jpg|jpeg|png|webp|gif|svg))["']/gi;
    let match;

    while ((match = srcPattern.exec(content)) !== null) {
        imagePaths.add(match[1]);
    }

    // Match imageSrc="/path/to/image.ext" or similar props
    const propPattern = /(?:imageSrc|bannerSrc|flagSrc)=["'](\/[^"']+\.(?:jpg|jpeg|png|webp|gif|svg))["']/gi;

    while ((match = propPattern.exec(content)) !== null) {
        imagePaths.add(match[1]);
    }

    return Array.from(imagePaths);
}

// Check if image exists in public directory
function imageExists(imagePath) {
    const publicPath = path.join(__dirname, '..', 'public', imagePath.substring(1));
    return fs.existsSync(publicPath);
}

// Main verification function
function verifyImages() {
    const projectRoot = path.join(__dirname, '..');
    const files = findImageReferences(projectRoot);

    console.log(`${colors.blue}Found ${files.length} TypeScript/TSX files to scan${colors.reset}\n`);

    const allImageRefs = new Map(); // Map of image path to files that reference it
    const missingImages = new Set();
    const foundImages = new Set();

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const imagePaths = extractImagePaths(content);

        imagePaths.forEach(imgPath => {
            if (!allImageRefs.has(imgPath)) {
                allImageRefs.set(imgPath, []);
            }
            allImageRefs.get(imgPath).push(file);

            if (imageExists(imgPath)) {
                foundImages.add(imgPath);
            } else {
                missingImages.add(imgPath);
            }
        });
    });

    // Report results
    console.log(`${colors.cyan}===========================================`);
    console.log(`  Verification Results`);
    console.log(`===========================================${colors.reset}\n`);

    console.log(`${colors.green}✓ Total image references found: ${allImageRefs.size}${colors.reset}`);
    console.log(`${colors.green}✓ Images that exist: ${foundImages.size}${colors.reset}`);
    console.log(`${colors.red}✗ Missing images: ${missingImages.size}${colors.reset}\n`);

    if (missingImages.size > 0) {
        console.log(`${colors.red}===========================================`);
        console.log(`  Missing Images`);
        console.log(`===========================================${colors.reset}\n`);

        missingImages.forEach(imgPath => {
            console.log(`${colors.red}✗ ${imgPath}${colors.reset}`);
            const referencedIn = allImageRefs.get(imgPath);
            referencedIn.forEach(file => {
                const relativePath = path.relative(projectRoot, file);
                console.log(`  ${colors.yellow}→ Referenced in: ${relativePath}${colors.reset}`);
            });
            console.log();
        });
    }

    if (foundImages.size > 0) {
        console.log(`${colors.green}===========================================`);
        console.log(`  Valid Images (Sample)`);
        console.log(`===========================================${colors.reset}\n`);

        const sampleImages = Array.from(foundImages).slice(0, 10);
        sampleImages.forEach(imgPath => {
            console.log(`${colors.green}✓ ${imgPath}${colors.reset}`);
        });

        if (foundImages.size > 10) {
            console.log(`${colors.blue}  ... and ${foundImages.size - 10} more${colors.reset}\n`);
        }
    }

    // Summary
    console.log(`${colors.cyan}===========================================`);
    console.log(`  Summary`);
    console.log(`===========================================${colors.reset}\n`);

    if (missingImages.size === 0) {
        console.log(`${colors.green}✓ All image references are valid!${colors.reset}\n`);
    } else {
        console.log(`${colors.yellow}⚠ Found ${missingImages.size} missing image(s).${colors.reset}`);
        console.log(`${colors.yellow}  Please add these images to the public directory.${colors.reset}\n`);
    }

    console.log(`${colors.blue}Tip: Check the HOW_TO_ADD_IMAGES.md guide in the public folder${colors.reset}`);
    console.log(`${colors.blue}     for instructions on adding images correctly.${colors.reset}\n`);
}

// Run verification
try {
    verifyImages();
} catch (error) {
    console.error(`${colors.red}Error running verification:${colors.reset}`, error);
    process.exit(1);
}
