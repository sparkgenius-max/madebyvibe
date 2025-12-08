# MadeByVibe Layout System Guide

This guide documents the unified layout strategy used to ensure consistent spacing, alignment, and responsive behavior across the MadeByVibe website.

## 1. The Core Principle: Unified Layout Padding

To solve inconsistency between different screen sizes and section types (full-width vs. contained), we use a single source of truth for horizontal gutters.

### CSS Variable
Defined in `:root` (src/styles/main.css):

```css
:root {
    /* Unified Layout Padding: Standard gutter for all constrained containers */
    /* Scales from 1.5rem (mobile) to 4rem (desktop) */
    --layout-padding: clamp(1.5rem, 5vw, 4rem);
}
```

**Usage Rule:** ALWAYS use `var(--layout-padding)` for the left/right padding of your main content container. Never hardcode pixel values or use inconsistent variables like `var(--padding-internal)` for the main page grid.

---

## 2. Standard Container Patterns

### A. Standard Constrained Section
Used for most text-heavy or grid-based sections (e.g., About, Expertise, Footer).

**Key Attributes:**
1.  `width: 100%`
2.  `max-width: 1800px` (Site-wide maximum content width)
3.  `margin: 0 auto` (Centers the container)
4.  `padding: 0 var(--layout-padding)` (Enforces the grid alignment)

```css
.section-container {
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 var(--layout-padding);
    
    /* Content Layout */
    display: flex; /* or grid */
    flex-direction: column;
}
```

### B. Full-Width "Bleed" Section
Used when you want the background to span the full viewport but the content to align with the grid (e.g., Works Masonry, Blog Slider).

**Key Attributes:**
*   **Parent:** Full width, no horizontal padding (usually).
*   **Content Container:** Applies the max-width and padding logic.

```css
/* Parent Section */
.works-section {
    width: 100%;
    /* Vertical padding only */
    padding: clamp(4rem, 8vw, 6rem) 0; 
}

/* Inner Grid/Container */
.works-masonry {
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    /* Inner content respects the grid lines */
    padding: 0 var(--layout-padding); 
}
```

### C. The "Hero Card" Pattern
The Hero section is unique because it visually "floats" like a card on larger screens.

**Logic:**
*   **Wrapper:** `viewport-wrapper` has `padding: var(--padding-viewport) 0` to create vertical space.
*   **Container:** `.main-container` height is calculated to fit perfectly: `calc(100vh - (var(--padding-viewport) * 2) - 4rem)`.
*   **Alignment:** The inner `.hero-section` uses `padding: ... var(--layout-padding)` to ensure the text aligns with the sections below it, despite being inside a "card".

---

## 3. Section-Specific Implementations

### Works Section (Masonry)
*   **Alignment:** Left-aligned CTA.
*   **Grid:** Flex column on mobile, Row on desktop.
*   **Spacing:** Uses `gap` for internal separation, but `var(--layout-padding)` for outer edges.

### About Section (Split Grid)
*   **Mobile:** Stacked Flex column.
*   **Desktop:** CSS Grid.
    *   **Columns:** `max-content 0.6fr`
    *   **Left:** Sticky "Who are we?" label.
    *   **Right:** Text block takes 60% of available space (0.6fr).
    *   **Alignment:** `justify-content: space-between`.

### Blog Section (Horizontal Slider)
This is the most complex because the slider must align on the left but "bleed" (overflow) on the right.

**Strategy:**
*   **Desktop:**
    *   **Left Padding:** Calculated dynamically to align with the max-width grid: `max(var(--layout-padding), calc(50vw - 900px + var(--layout-padding)))`.
    *   **Right Padding:** `0` (allows items to scroll off-screen).
*   **Mobile:**
    *   Standard `var(--layout-padding)` on both sides to keep content safe.

---

## 4. Checklist for New Sections

When creating a new section, ask:

1.  **Is it full width or constrained?**
    *   If constrained background: Use Standard Container Pattern (A).
    *   If full width background: Use Bleed Pattern (B).

2.  **Does it need to align with the Logo/Nav?**
    *   Yes: Apply `padding-left: var(--layout-padding)`.

3.  **Does it have a max-width?**
    *   Yes: Always use `max-width: 1800px` and `margin: 0 auto` to match the rest of the site.

4.  **Are you defining vertical padding?**
    *   Use `clamp(4rem, 8vw, 6rem)` for section top/bottom padding to ensure responsive scaling.
