export function ScrollExplore() {
    // SVG text path for rotation
    // Radius increased to 44 (diameter 88) for better gap from center
    // Circumference = 2 * pi * 44 ≈ 276.5
    const text = "SCROLL TO EXPLORE • SCROLL TO EXPLORE • ";
    
    return `
    <div class="scroll-explore-container">
        <div class="scroll-explore-rotate">
            <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                    <path id="circle" d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
                </defs>
                <text font-size="10.5" font-weight="bold" fill="currentColor" textLength="276.5" dominant-baseline="middle">
                    <textPath xlink:href="#circle" startOffset="0">
                        ${text}
                    </textPath>
                </text>
            </svg>
        </div>
        <div class="scroll-explore-center">
            <div class="scroll-arrow-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
    `;
}
