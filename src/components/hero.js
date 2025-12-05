import { Button } from './button.js';

export function Hero() {
    return `
    <section class="hero-section">
        <div class="hero-content">
            <h2 class="sub-heading">Digital Branding Studio</h2>
            <h1 class="display-heading">
                We craft <br>
                <span class="highlight">digital souls</span> <br>
                for future tech.
            </h1>
            <div class="cta-container">
                ${Button({ text: 'Start Project', variant: 'primary' })}
                <span class="scroll-indicator">Scroll to explore</span>
            </div>
        </div>

        <!-- Abstract Visual Element -->
        <div class="hero-visual">
            <div class="gradient-orb"></div>
            <div class="glass-card">
                <div class="card-content">
                    <span class="tag">Latest Work</span>
                    <h3>Ghost Protocol</h3>
                    <p>Identity System</p>
                </div>
            </div>
        </div>
    </section>
  `;
}
