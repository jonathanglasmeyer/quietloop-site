// Comprehensive Blob Analysis Script
// Run this in browser console for detailed diagnostics

function runComprehensiveBlobAnalysis() {
  console.log("🔍 COMPREHENSIVE BLOB DIAGNOSTIC ANALYSIS")
  console.log("==========================================")

  // 1. DOM STRUCTURE ANALYSIS
  console.log("\n1. 🏗️ DOM STRUCTURE ANALYSIS")
  console.log("------------------------------")

  const heroSection = document.querySelector("section")
  const blobContainer = document.querySelector('[style*="z-index: -1"]')
  const allBlobs = document.querySelectorAll('[class*="hero-blob"]')

  console.log("Hero Section:", {
    found: !!heroSection,
    tagName: heroSection?.tagName,
    classes: heroSection?.className,
    overflow: heroSection ? getComputedStyle(heroSection).overflow : "N/A",
    position: heroSection ? getComputedStyle(heroSection).position : "N/A",
  })

  console.log("Blob Container:", {
    found: !!blobContainer,
    children: blobContainer?.children.length || 0,
    zIndex: blobContainer ? getComputedStyle(blobContainer).zIndex : "N/A",
  })

  console.log("Blob Elements Found:", allBlobs.length)

  // 2. INDIVIDUAL BLOB ANALYSIS
  console.log("\n2. 🎨 INDIVIDUAL BLOB ANALYSIS")
  console.log("-------------------------------")

  allBlobs.forEach((blob, index) => {
    const rect = blob.getBoundingClientRect()
    const style = getComputedStyle(blob)

    console.log(`\nBlob ${index + 1} (${blob.className}):`)
    console.log("  Visibility:", {
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      isInViewport: rect.width > 0 && rect.height > 0,
      boundingRect: {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
      },
    })

    console.log("  Positioning:", {
      position: style.position,
      left: style.left,
      top: style.top,
      right: style.right,
      bottom: style.bottom,
      zIndex: style.zIndex,
      transform: style.transform,
    })

    console.log("  Styling:", {
      backgroundColor: style.backgroundColor,
      borderRadius: style.borderRadius,
      filter: style.filter,
      animation: style.animation,
      width: style.width,
      height: style.height,
    })

    // Check for potential issues
    const issues = []
    if (style.display === "none") issues.push("display: none")
    if (style.visibility === "hidden") issues.push("visibility: hidden")
    if (Number.parseFloat(style.opacity) === 0) issues.push("opacity: 0")
    if (rect.width === 0 || rect.height === 0) issues.push("zero dimensions")
    if (!style.backgroundColor || style.backgroundColor === "rgba(0, 0, 0, 0)") {
      issues.push("no background color")
    }

    if (issues.length > 0) {
      console.warn("  ⚠️ ISSUES FOUND:", issues)
    } else {
      console.log("  ✅ No obvious issues detected")
    }
  })

  // 3. CSS RULES ANALYSIS
  console.log("\n3. 📋 CSS RULES ANALYSIS")
  console.log("-------------------------")

  const blobRules = []
  try {
    Array.from(document.styleSheets).forEach((sheet, sheetIndex) => {
      try {
        Array.from(sheet.cssRules || []).forEach((rule) => {
          if (rule.selectorText && rule.selectorText.includes("hero-blob")) {
            blobRules.push({
              selector: rule.selectorText,
              cssText: rule.cssText,
              sheet: sheet.href || `<style> tag ${sheetIndex}`,
            })
          }
        })
      } catch (e) {
        console.warn(`Cannot access stylesheet ${sheetIndex}:`, e.message)
      }
    })
  } catch (e) {
    console.error("Error accessing stylesheets:", e)
  }

  console.log("CSS Rules Found:", blobRules.length)
  blobRules.forEach((rule, index) => {
    console.log(`Rule ${index + 1}:`, rule)
  })

  // 4. ANIMATION ANALYSIS
  console.log("\n4. 🎬 ANIMATION ANALYSIS")
  console.log("------------------------")

  const animations = ["morphBlob1", "morphBlob2", "morphBlob3", "morphBlob4"]
  animations.forEach((animName, index) => {
    const blob = document.querySelector(`.hero-blob-${index + 1}`)
    if (blob) {
      const style = getComputedStyle(blob)
      console.log(`${animName}:`, {
        animationName: style.animationName,
        animationDuration: style.animationDuration,
        animationDelay: style.animationDelay,
        animationIterationCount: style.animationIterationCount,
        animationDirection: style.animationDirection,
        animationFillMode: style.animationFillMode,
        animationPlayState: style.animationPlayState,
      })
    }
  })

  // 5. RENDERING TEST
  console.log("\n5. 🧪 RENDERING TEST")
  console.log("--------------------")

  // Create test elements to verify rendering capability
  const testElements = [
    {
      name: "Simple Red Square",
      style: "position:absolute;width:50px;height:50px;background:red;top:0;left:0;z-index:9999;",
    },
    {
      name: "Blob-like Element",
      style:
        "position:absolute;width:100px;height:75px;background:rgba(200,198,247,0.5);border-radius:60% 40%;top:60px;left:0;z-index:9999;filter:blur(5px);",
    },
  ]

  testElements.forEach((test, index) => {
    const testEl = document.createElement("div")
    testEl.style.cssText = test.style
    testEl.className = `test-element-${index}`
    document.body.appendChild(testEl)

    setTimeout(() => {
      const rect = testEl.getBoundingClientRect()
      const isVisible = rect.width > 0 && rect.height > 0
      console.log(`${test.name}:`, {
        created: true,
        visible: isVisible,
        dimensions: `${rect.width}x${rect.height}`,
        position: `(${rect.left}, ${rect.top})`,
      })

      // Clean up
      setTimeout(() => testEl.remove(), 2000)
    }, 100)
  })

  // 6. BROWSER COMPATIBILITY CHECK
  console.log("\n6. 🌐 BROWSER COMPATIBILITY")
  console.log("----------------------------")

  const features = {
    "CSS Border Radius": CSS.supports("border-radius", "50%"),
    "CSS Filters": CSS.supports("filter", "blur(10px)"),
    "CSS Animations": CSS.supports("animation", "test 1s"),
    "CSS Transforms": CSS.supports("transform", "scale(1)"),
    "CSS Custom Properties": CSS.supports("color", "var(--test)"),
    "Viewport Units": CSS.supports("width", "100vw"),
  }

  Object.entries(features).forEach(([feature, supported]) => {
    console.log(`${feature}: ${supported ? "✅" : "❌"}`)
  })

  // 7. FINAL RECOMMENDATIONS
  console.log("\n7. 💡 DIAGNOSTIC SUMMARY & RECOMMENDATIONS")
  console.log("===========================================")

  if (allBlobs.length === 0) {
    console.error("❌ CRITICAL: No blob elements found in DOM")
    console.log("Recommendations:")
    console.log("- Check if blob elements are being created")
    console.log("- Verify CSS selectors are correct")
    console.log("- Check for JavaScript errors preventing element creation")
  } else if (allBlobs.length < 4) {
    console.warn(`⚠️ WARNING: Only ${allBlobs.length}/4 blob elements found`)
  } else {
    console.log("✅ All 4 blob elements found in DOM")
  }

  // Check if any blobs are visible
  const visibleBlobs = Array.from(allBlobs).filter((blob) => {
    const rect = blob.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0
  })

  if (visibleBlobs.length === 0) {
    console.error("❌ CRITICAL: No blob elements are visible")
    console.log("Common causes:")
    console.log("- Elements have display: none or visibility: hidden")
    console.log("- Elements have zero dimensions")
    console.log("- Elements are positioned outside viewport")
    console.log("- Background color is transparent or not set")
    console.log("- Z-index issues hiding elements")
  } else {
    console.log(`✅ ${visibleBlobs.length}/4 blob elements are visible`)
  }

  console.log("\n🔍 Analysis Complete - Check results above for detailed findings")
}

// Auto-run analysis
if (typeof window !== "undefined") {
  setTimeout(runComprehensiveBlobAnalysis, 2000)
}
