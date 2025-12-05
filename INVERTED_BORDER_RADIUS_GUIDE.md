# How to Create the "Inverted Border Radius" Effect

Use this guide to instruct an AI agent (or developer) to create the seamless "melted" or "liquid" connection effect between UI elements.

## 🎯 The Golden Prompt

Copy and paste this instruction to get the result instantly:

> "Create a floating notification card anchored to the **bottom-left** of the viewport, sitting **outside** the main container.
>
> I want it to have an **'Inverted Border Radius'** (or **'Reverse Rounded Corner'**) effect where it connects to the surrounding space, making it look like the main container is curving around it.
>
> **Implementation Requirement:** Do **not** use CSS border-radius hacks. Instead, use **SVG Vector Spandrels** (small concave shapes) positioned absolutely at the junctions to create a pixel-perfect, smooth curve."

## 🧠 Why this works
1.  **"Inverted Border Radius"**: Clearly defines that the *negative space* should be rounded, not the element itself.
2.  **"SVG Vector Spandrels"**: Forces the use of a robust, scalable vector shape instead of fragile CSS hacks (like `box-shadow` or `radial-gradient` masks).
3.  **"Outside the Main Container"**: Ensures the correct DOM structure for "breakout" elements.

## 🛠️ The "Cheat Sheet" Snippet

Use this exact SVG path geometry for a perfect 40px inverted curve.

**The Shape:**
```html
<!-- The "Magic" Shape for Inverted Corners -->
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- 
       Path Explanation:
       M0 0   -> Start at Top-Left
       v40    -> Line down to Bottom-Left (0,40)
       h40    -> Line right to Bottom-Right (40,40)
       C...   -> Cubic Bezier Curve back to Top-Left (0,0)
                 Control points: (17.9, 40) and (0, 22.1) create the perfect circular arc.
    -->
    <path d="M0 0v40h40C17.9 40 0 22.1 0 0z" fill="YOUR_COLOR_HERE" />
</svg>
```

**CSS Positioning Strategy:**
- Place the SVG **absolutely** relative to the card.
- **Top Junction**: `top: -40px; left: 0;` (No rotation needed if using the path above).
- **Bottom/Right Junction**: `bottom: 0; right: -40px;` (No rotation needed if using the path above).
- **Overlap**: You might need a `-1px` offset (e.g., `top: -39px`) to prevent sub-pixel rendering gaps on some screens.
