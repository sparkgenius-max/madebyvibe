export function TechStack() {
    // Simple SVG paths for the requested logos
    // Using simple placeholders or simplified paths for brevity and reliability
    
    const logos = [
        {
            name: "Framer",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 0h16v8h-8l8 8v8h-16v-8h8l-8-8z"/></svg>`
        },
        {
            name: "Webflow",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.008 0L9.09 7.78 6.173 0H0v24h6.173V11.27l2.917 7.78h5.835l2.917-7.78V24H24V0h-6.173l-2.91 7.78z"/></svg>` // Rough W shape
        },
        {
            name: "Figma",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-12h4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-8c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V4zm8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4v8zm0 8c2.21 0 4-1.79 4-4H16v4z"/></svg>`
        },
        {
            name: "Affinity",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z"/></svg>` // Simple triangle/A
        }
    ];

    const logoItems = logos.map(logo => `
        <div class="tech-logo" title="${logo.name}">
            ${logo.svg}
        </div>
    `).join('');

    // Duplicate for seamless loop - Needs enough duplicates to fill width + overlap
    // Assuming 4 items * (24px + 24px gap approx) = ~200px. 
    // We need 2 full sets for the slide.
    // 4 items repeated 4 times = 16 items. 
    // Half is 8 items.
    
    return `
    <div class="tech-stack-wrapper">
        <div class="tech-stack-label">Stack</div>
        <div class="tech-stack-marquee">
            <div class="tech-track">
                <!-- Set 1 -->
                ${logoItems}
                ${logoItems}
                <!-- Set 2 (Clone) -->
                ${logoItems}
                ${logoItems}
            </div>
        </div>
    </div>
    `;
}
