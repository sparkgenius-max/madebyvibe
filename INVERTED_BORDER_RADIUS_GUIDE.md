# How to Create the "Inverted Border Radius" Effect

Use this guide to instruct an AI agent (or developer) to create the seamless "melted" or "liquid" connection effect where a UI element breaks out of a container or floats with curved connections to the surrounding space.

## 🎯 The Golden Prompt

Copy and paste this instruction to get the result instantly:

> "Create a floating element (e.g., a notification or breakout card) anchored to the edge of the viewport.
>
> I want it to have an **'Inverted Border Radius'** (or **'Reverse Rounded Corner'**) effect where it connects to the surrounding space.
>
> **Implementation Requirement:**
> 1. Use **SVG Vector Spandrels** (small concave shapes) for the corners.
> 2. Position them **absolutely** (e.g., `right: -32px`) or as **flex siblings** to the main box.
> 3. Rotate the SVG using `transform: rotate(...)` to fit the specific corner junction."

## 🧠 Why this works
1.  **"Inverted Border Radius"**: Clearly defines that the *negative space* should be rounded.
2.  **"Vector Spandrels"**: Forces the use of robust SVGs instead of fragile CSS hacks (`box-shadow`, `mask`).
3.  **"Rotation Strategy"**: Allows you to reuse a single SVG asset for all 4 corners (Top-Left, Top-Right, Bottom-Left, Bottom-Right).

## 🛠️ The "Cheat Sheet" Snippet

### 1. The Shape (Reusable Asset)
Use this standard 32x32 curve. It creates a 90-degree concave arc.

```html
<!-- The "Smooth Corner" SVG -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Path: Starts top-left (0,0), goes down to (0,32), right to (32,32), 
         then curves back to (0,0) to create the negative space. -->
    <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="BLACK_OR_BG_COLOR" />
</svg>
```

### 2. Positioning Strategy (Based on Footer Implementation)

Assume you have a dark box (`.box`) and you want to connect it to the white space around it.

#### Scenario A: Connecting Top-Right of Box to Space (e.g., Footer Left Breakout)
*Goal: The curve fills the corner formed by the box's right edge and the space above it.*

```css
.corner-top-right {
    position: absolute;
    top: 0;
    right: -32px; /* Move perfectly to the right */
    transform: rotate(90deg); /* Rotate to fit the junction */
    /* Ensure fill color matches the .box background */
}
```

#### Scenario B: Connecting Bottom-Left of Box to Space (e.g., Footer Left Breakout)
*Goal: The curve fills the corner formed by the box's bottom edge and the space to the left.*

```css
.corner-bottom-left {
    position: absolute;
    bottom: -32px; /* Move perfectly down */
    left: 0;
    transform: rotate(90deg); /* Rotate to fit */
}
```

#### Scenario C: Flex Sibling (e.g., Footer Right Breakout)
*Goal: Place the curve naturally next to text without absolute positioning calculations.*

```html
<div class="flex-container">
   <!-- Curve sits on the left -->
   <svg class="corner-smooth-left" style="transform: rotate(-90deg)"></svg>
   
   <div class="box-content">
       <!-- Content here -->
   </div>
</div>
```

### 3. Rotation Reference Table

If your SVG path is `M0 0v32h32C14.3 32 0 17.7 0 0z` (Top-Left Origin):

| Desired Corner Location relative to Box | Transform Class | CSS Rotation | Position Example |
| :--- | :--- | :--- | :--- |
| **Top-Left** (Connecting Box Top & Left Space) | `.corner-tl` | `rotate(0deg)` | `top: 0; left: -32px;` |
| **Top-Right** (Connecting Box Top & Right Space) | `.corner-tr` | `rotate(90deg)` | `top: 0; right: -32px;` |
| **Bottom-Right** (Connecting Box Bottom & Right Space) | `.corner-br` | `rotate(180deg)` | `bottom: 0; right: -32px;` |
| **Bottom-Left** (Connecting Box Bottom & Left Space) | `.corner-bl` | `rotate(270deg)` (or -90?) | `bottom: 0; left: -32px;` |

*Note: You may need to adjust the `top/bottom/left/right` negative offsets based on the exact rotation and coordinate system of the SVG. Always inspect element to align.*

## ⚠️ Critical Implementation Tips
1.  **Match Dimensions**: The SVG `width/height` (e.g., 32px) must match the `negative offset` (e.g., `-32px`) exactly.
2.  **Fill Color**: The `fill` of the SVG path must match the **background color of the floating element** (the box), NOT the background of the page. This creates the illusion that the box itself is curving out.
3.  **Z-Index**: Ensure the corner SVGs are on the same stacking context level as the box so they blend seamlessy.
