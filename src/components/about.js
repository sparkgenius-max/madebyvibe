import { Button } from './button.js';

export function About() {
    return `
    <section class="about-section">
        <div class="about-container">
            <span class="about-label">• Who are we?</span>
            <p class="about-text">
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
