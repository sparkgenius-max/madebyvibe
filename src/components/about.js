import { Button } from './button.js';

export function About() {
    return `
    <section class="about-section">
        <div class="about-container">
            <span class="about-label">• Who are we?</span>
            <p class="about-text" id="aboutText">
                A global-minded design studio based in Malang ID, specializing in Web Development, Ecommerce, and
                Branding that elevates your digital presence.
            </p>
            <div class="about-actions">
                ${Button({ text: 'About Vibe', variant: 'primary', href: '#' })}
                ${Button({ text: 'Meet the Team', variant: 'outline-dark', href: '#' })}
            </div>
        </div>
    </section>
  `;
}

export function initAbout() {
    const textElement = document.getElementById('aboutText');
    if (!textElement) return;

    // Split text into words
    const text = textElement.innerText;
    const words = text.split(' ');
    // Use inline-block for transforms. preserving space inside the block.
    textElement.innerHTML = words.map(word => `<span class="reveal-word" style="display: inline-block; will-change: opacity, filter, transform;">${word}&nbsp;</span>`).join('');

    const spans = textElement.querySelectorAll('.reveal-word');

    const handleScroll = () => {
        const rect = textElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Define interaction zone
        // Start revealing when top of element enters 75% of viewport (was 95%) - Starts later
        // Finish revealing when bottom of element reaches 25% of viewport (was 35%)
        const startY = windowHeight * 0.75;
        const endY = windowHeight * 0.25;

        // Calculate global progress clamped 0 to 1
        let progress = (startY - rect.top) / (startY - endY);
        progress = Math.max(0, Math.min(1, progress));

        spans.forEach((span, index) => {
            const i = index / spans.length;

            // Overlap settings
            const renderStart = i * 0.6;
            const renderEnd = renderStart + 0.4;

            let spanProgress = (progress - renderStart) / (renderEnd - renderStart);
            spanProgress = Math.max(0, Math.min(1, spanProgress));

            // 1. Opacity: 0.1 -> 1.0 (More dramatic range)
            const opacity = 0.1 + (spanProgress * 0.9);

            // 2. Blur: 8px -> 0px (Focus effect)
            const blur = 8 * (1 - spanProgress);

            // 3. TranslateY: 15px -> 0px (Slide up)
            const y = 15 * (1 - spanProgress);

            span.style.opacity = opacity.toFixed(2);
            span.style.filter = `blur(${blur.toFixed(1)}px)`;
            span.style.transform = `translateY(${y.toFixed(1)}px)`;
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}
