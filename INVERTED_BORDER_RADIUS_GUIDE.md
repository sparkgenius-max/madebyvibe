# Inverted Border Radius (Fake Corner) Guide

This guide documents how to implement the "fake inverted border radius" effect (often called a "cutout" or "breakout") used in the Vibe Creative website. This effect creates seamless smooth corners where an element appears to "cut into" another element (like an image).

## 1. The Core Concept

The effect is achieved not by cutting the underlying element, but by layering a **container on top** (or overlapping it) that has the same background color as the page. This container holds your content (text, button) and uses **two SVG shapes** to create the smooth inverse curves at its connecting corners.

### ⚠️ Critical Rule: Placement
**Do NOT place the breakout container inside an element with `overflow: hidden` or `border-radius`.**
*   **Wrong:** Putting the tag inside a `.card-image-wrapper` that clips hidden content. This causes white lines and clipping issues.
*   **Right:** Place the breakout container as a **sibling** to the image wrapper, position it absolutely on top, and ensure the image wrapper does not have a border-radius on the corner you are "cutting" (or let the cutout sit on top to mask it).

---

## 2. The Magic SVG

We use a standard 20x20 SVG curve. This path draws a square that has one "inverted" round corner.

**File:** `src/components/work-card.js` (example usage)
**Dimensions:** 20px x 20px
**Path Data:** `M20 0v20H0C11.05 20 20 11.05 20 0z`

```html
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-section)" />
</svg>
```

---

## 3. Implementation Patterns

### Case A: Top-Right Breakout (e.g., Work Card Tag)
**Goal:** A tag sitting on the top-right corner of a card.

**Structure:**
```html
<div class="card-container" style="position: relative">
   <div class="image-wrapper">...</div>
   
   <!-- Sibling Breakout -->
   <div class="breakout-top-right">
       <!-- 1. Left Curve (Rotated -90deg) -->
       <svg class="corner-left">...</svg>
       
       <!-- 2. Content (The Tag) -->
       <div class="content">Tag Name</div>
       
       <!-- 3. Bottom Curve (No Rotation / 0deg) -->
       <svg class="corner-bottom">...</svg>
   </div>
</div>
```

**Positioning & Rotation:**
*   **Container:** `top: 0; right: 0;`
*   **Left SVG:**  `position: relative;` | `transform: rotate(-90deg);`
*   **Bottom SVG:** `position: absolute; bottom: -20px; right: 0;` | `transform: rotate(0deg);` or `rotate(-90deg)` depending on exact curve preference (Work Card uses -90deg for bottom to match vertical flow).

---

### Case B: Top-Left Breakout (e.g., Service Detail Button)
**Goal:** A large button sitting on the top-left corner of a hero image.

**Structure:**
```html
<div class="hero-container" style="position: relative">
   
   <!-- Sibling Breakout -->
   <div class="breakout-top-left">
       <!-- 1. Content (The Button) -->
       <div class="content">Button</div>
       
       <!-- 2. Right Curve (Rotated 180deg) -->
       <svg class="corner-right">...</svg>
       
       <!-- 3. Bottom Curve (Rotated 180deg) -->
       <svg class="corner-bottom">...</svg>
   </div>

   <div class="image-wrapper">...</div>
</div>
```

**Positioning & Rotation:**
*   **Container:** `top: 0; left: 0;`
*   **Right SVG:** `position: absolute; top: 0; right: -20px;` | `transform: rotate(180deg);`
*   **Bottom SVG:** `position: absolute; bottom: -20px; left: 0;` | `transform: rotate(180deg);`

---

## 4. Rotation Cheat Sheet

The SVG `M20 0v20H0C11.05 20 20 11.05 20 0z` by default fills the **Top-Left** of the 20x20 square (leaving the bottom-right transparent as the curve).

| Desired Curve Location | Rotation Needed | Usage Context |
|------------------------|-----------------|---------------|
| **Bottom-Right** Curve matches | `0deg` | Standard bottom-left corner of a container |
| **Bottom-Left** Curve matches | `-90deg` or `270deg` | **Top-Right Breakout** (Left side of tag) |
| **Top-Left** Curve matches | `180deg` | **Top-Left Breakout** (Right side of button) |
| **Top-Right** Curve matches | `90deg` | Bottom-Right Breakout |

*(Note: "Curve matches" refers to which corner of the 20x20 box is the solid curved part connecting to your content)*

## 5. CSS Adjustments for Perfection
1.  **Overlap:** Always set top/left positions to `-1px` or add `margin: -1px` to SVGs to overlap content slightly. This prevents sub-pixel rendering gaps (white lines).
2.  **Fill Color:** Ensure the `<path>` fill matches the **page background** (`var(--bg-section)`), NOT the card color.
3.  **Z-Index:** Give the breakout container `z-index: 10` to sit above the image.
4.  **Interaction:** If the breakout covers a large area, set `pointer-events: none` on the container and `pointer-events: auto` on the inner content so clicks pass through the invisible gaps.

---

## 6. Case C: Mobile Footer Toast (Bottom Breakout)
**Goal:** A "Back to Top" toast stuck to the bottom of the visible viewport or footer container on mobile.

**Structure:**
```html
<div class="footer-mobile-backtop">
    <!-- 1. Logo Container (Left) -->
    <div class="mobile-backtop-logo-container">Vibe.</div>

    <!-- 2. Toast Container (Right) -->
    <div class="mobile-backtop-toast">
        <!-- Top SVG Smoother -->
        <svg class="corner-smooth-top">...</svg>
        
        <!-- Content -->
        <a href="#">Back to Top</a>
    </div>
</div>
```

**Key Implementation Details:**

### 1. The Flexbox Stretch
To avoid vertical gaps between the left logo container and the right toast block, the parent **must** use `align-items: stretch`.
```css
.footer-mobile-backtop {
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* CRITICAL: Ensures equal height */
    padding: 0;
    gap: 0;
}
```

### 2. Complex Border Radius
Instead of using SVGs for every corner, we use native border-radius where possible to match the parent container's rounded corners.

*   **Footer Container (Parent):** `border-radius: 24px`
*   **Logo Container:** `border-bottom-left-radius: 24px` (Matches parent)
*   **Toast Container:** `border-radius: 24px 0 24px 0`
    *   **Top-Left:** 24px (Internal curve start)
    *   **Top-Right:** 0 (Flush edge)
    *   **Bottom-Right:** 24px (Matches parent corner)
    *   **Bottom-Left:** 0 (Flush with logo container)

### 3. The Top Smoother SVG
The internal curve on the top-left of the toast is smoothed by an SVG sitting **on top** of the block.

*   **Position:** `absolute`
*   **Top:** `-20px` (Sits exactly above the block)
*   **Right:** `0` (Aligned to right edge)
*   **Transform:** `none` (Default orientation matches top-right curve needs if drawn correctly, or rotated)

### 4. Sub-Pixel Bleed Fix
When overlapping dark backgrounds with rounded corners, sub-pixel rendering can sometimes reveal the background color of the parent container behind the radius, creating a thin "line" (often black or white).

**The Fix:** Add a small box-shadow directly to the inner container to "bleed" the background color slightly outward, covering the gap without affecting layout.
```css
.mobile-backtop-toast {
    box-shadow: 1px 1px 0 var(--bg-section);
}
```

### 5. Full Width Strategy
On mobile, if the footer has padding, the full-width toast bar cannot stretch to the edges.
*   **Solution:** Remove padding from the main `.footer-container` on mobile.
*   **Compensation:** Wrap the *rest* of the footer content (links, text) in a wrapper (e.g., `.footer-content-wrapper`) and apply the padding there.

```css
@media (max-width: 768px) {
    .footer-container {
        padding: 0; /* Full width for toast */
    }
    .footer-content-wrapper {
        padding: clamp(...) /* Restore padding for content */
    }
}
```
