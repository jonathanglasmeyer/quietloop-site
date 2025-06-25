// Blob Diagnostic Script
// Run this in the browser console to diagnose blob issues

function runBlobDiagnostics() {
  console.log("🔍 Starting Blob Diagnostics...")

  // 1. Check if hero section exists
  const heroSection = document.querySelector('section[class*="hero"], section:first-of-type')
  console.log("1. Hero Section:", {
    found: !!heroSection,
    element: heroSection,
    classes: heroSection?.className,
    styles: heroSection ? window.getComputedStyle(heroSection) : null,
  })

  // 2. Check for blob container
  const blobContainer = document.querySelector(".blob-container")
  console.log("2. Blob Container:", {
    found: !!blobContainer,
    element: blobContainer,
    children: blobContainer?.children.length || 0,
  })

  // 3. Check for individual blobs
  const blobs = document.querySelectorAll('[class*="hero-blob"]')
  console.log("3. Blob Elements:", {
    count: blobs.length,
    elements: Array.from(blobs),
  })

  // 4. Check computed styles for each blob
  blobs.forEach((blob, index) => {
    const styles = window.getComputedStyle(blob)
    console.log(`4.${index + 1} Blob ${index + 1} Styles:`, {
      display: styles.display,
      visibility: styles.visibility,
      opacity: styles.opacity,
      position: styles.position,
      zIndex: styles.zIndex,
      backgroundColor: styles.backgroundColor,
      width: styles.width,
      height: styles.height,
      left: styles.left,
      top: styles.top,
      borderRadius: styles.borderRadius,
      filter: styles.filter,
      animation: styles.animation,
    })
  })

  // 5. Check for CSS rules
  const cssRules = []
  try {
    Array.from(document.styleSheets).forEach((sheet) => {
      try {
        Array.from(sheet.cssRules || []).forEach((rule) => {
          if (rule.selectorText && rule.selectorText.includes("hero-blob")) {
            cssRules.push({
              selector: rule.selectorText,
              cssText: rule.cssText,
            })
          }
        })
      } catch (e) {
        console.warn("Could not access stylesheet:", sheet.href)
      }
    })
  } catch (e) {
    console.error("Error accessing stylesheets:", e)
  }

  console.log("5. CSS Rules for blobs:", cssRules)

  // 6. Check for JavaScript errors
  console.log("6. Check console for any JavaScript errors above this message")

  // 7. Test blob creation
  console.log("7. Testing manual blob creation...")
  const testBlob = document.createElement("div")
  testBlob.style.cssText = `
    position: absolute;
    background-color: rgba(255, 0, 0, 0.5);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    top: 50px;
    left: 50px;
    z-index: 1000;
    pointer-events: none;
  `
  testBlob.className = "test-blob"
  document.body.appendChild(testBlob)

  setTimeout(() => {
    const testBlobCheck = document.querySelector(".test-blob")
    console.log("Test blob created:", !!testBlobCheck)
    if (testBlobCheck) {
      testBlobCheck.remove()
      console.log("✅ Manual blob creation successful - DOM manipulation works")
    }
  }, 1000)

  console.log("🔍 Blob Diagnostics Complete - Check results above")
}

// Auto-run diagnostics
if (typeof window !== "undefined") {
  setTimeout(runBlobDiagnostics, 2000)
}
