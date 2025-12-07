export function TechStack() {
    // Replaced tech logos with Company logos (Google, Amazon, Microsoft, Netflix, Spotify)
    
    const logos = [
        {
            name: "Google",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.053-1.147 8.16-3.293 2.133-2.133 2.827-5.147 2.827-7.627 0-.747-.053-1.467-.16-2.16h-10.827z"/></svg>`
        },
        {
            name: "Microsoft",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>`
        },
        {
            name: "Apple",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.7 19.5c-.5 1.7-1.7 3.5-3 3.5-1.3 0-1.6-.8-3.2-.8-1.6 0-2.1.8-3.2.8-2 0-3.6-2-4.9-4.8-2.1-4.3-.6-10.7 4.3-10.7 1.3 0 2.5.9 3.3.9.8 0 2.3-1.1 3.9-1.1 1.3 0 2.5.5 3.4 1.3-3 1.8-2.5 5.8.5 7 .2.1.5.1.7.2 0 .1 0 .1.1.2 0 .1-.1.2-.1.2-.5 1.3-1.3 2.4-1.8 3.3zM13 3.8c.7-1 1.2-2.3 1.1-3.5-1.1 0-2.5.6-3.3 1.6-.7.9-1.2 2.2-1.1 3.4 1.1.1 2.3-.5 3.3-1.5z"/></svg>`
        },
        {
            name: "Spotify",
            svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z"/></svg>`
        }
    ];

    const logoItems = logos.map(logo => `
        <div class="tech-logo" title="${logo.name}">
            ${logo.svg}
        </div>
    `).join('');

    // Create a larger set of items to ensure it covers even 4k screens
    // 4 logos * ~70px (width+gap) = 280px per set.
    // To fill 4000px width, we need ~15 sets. Let's do 6 for the "half" track to balance load.
    const repeatedLogos = Array(6).fill(logoItems).join('');

    return `
    <div class="tech-stack-wrapper">
        <div class="tech-stack-label">Trusted By</div>
        <div class="tech-stack-marquee">
            <div class="tech-track">
                <!-- Set 1 (Half) -->
                ${repeatedLogos}
                <!-- Set 2 (Clone for seamless loop) -->
                ${repeatedLogos}
            </div>
        </div>
    </div>
    `;
}
