import { Button } from './button.js';
import { SectionLabel } from './section-label.js';

export function About() {
    return `
    <section class="about-section">
        <div class="about-container">
            ${SectionLabel('Who are we?', 'about-label-custom')}
            <p class="about-text" id="aboutText">
                A global-minded design studio based in Malang ID, specializing in Web Development, Ecommerce, and
                Branding that elevates your digital presence.
            </p>
            <div class="about-actions">
                ${Button({ text: 'About Vibe', variant: 'primary', href: '/about' })}
                ${Button({ text: 'Meet the Team', variant: 'outline-dark', href: '/team' })}
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

            // Overlap settings - "Heavy" feel
            // Spread start times more (0.7) and shorter duration (0.3) for distinct steps
            const renderStart = i * 0.7;
            const renderEnd = renderStart + 0.3;

            let spanProgress = (progress - renderStart) / (renderEnd - renderStart);
            spanProgress = Math.max(0, Math.min(1, spanProgress));

            // Easing: Cubic In (starts slow, finishes fast) - feels "heavy"
            const easedProgress = Math.pow(spanProgress, 3);

            // Opacity: 0.15 -> 1.0
            const opacity = 0.15 + (easedProgress * 0.85);

            span.style.opacity = opacity.toFixed(2);
            span.style.filter = 'none';
            span.style.transform = 'none';
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}
