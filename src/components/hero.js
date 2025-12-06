import { Button } from './button.js';
import { ScrollExplore } from './scroll-explore.js';

export function Hero() {
    return `
    <section class="hero-section">
        <!-- Video Background -->
        <div class="hero-video-container">
            <video class="hero-video" autoplay muted loop playsinline>
                <source src="https://res.cloudinary.com/dg2cqc3e9/video/upload/v1764998015/6561920-uhd_3840_2160_25fps_fjc9a6.mp4" type="video/mp4">
            </video>
            <div class="hero-video-overlay"></div>
        </div>

        <div class="hero-content">
            <h2 class="sub-heading">Digital Branding Studio</h2>
            <h1 class="display-heading">
                We craft <br>
                <span class="highlight">digital souls</span> <br>
                for future tech.
            </h1>
            <div class="cta-container">
                ${Button({ text: 'Start Project', variant: 'primary' })}
            </div>
        </div>

        <!-- Scroll Explore - Top Right -->
        <div class="scroll-indicator-wrapper top-right">
            ${ScrollExplore()}
        </div>
    </section>
  `;
}
