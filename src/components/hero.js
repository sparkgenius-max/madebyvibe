import { Button } from './button.js';
import { ScrollExplore } from './scroll-explore.js';
import { TechStack } from './tech-stack.js';

export function Hero() {
    return `
    <div class="hero-wrapper">
        <main class="main-container">
            <!-- Video Background -->
            <div class="hero-video-container">
                <video class="hero-video" autoplay muted loop playsinline>
                    <source src="https://res.cloudinary.com/dg2cqc3e9/video/upload/v1764998015/6561920-uhd_3840_2160_25fps_fjc9a6.mp4" type="video/mp4">
                </video>
                <div class="hero-video-overlay"></div>
            </div>

            <section class="hero-section">
                <div class="hero-content">
                    <h2 class="sub-heading">Digital Branding Studio</h2>
                    <h1 class="display-heading">
                        We craft <br>
                        <span class="highlight">digital souls</span> <br>
                        for future tech.
                    </h1>
                    <div class="cta-container">
                        ${Button({ text: 'Start Project', variant: 'primary', href: '/contact' })}
                    </div>
                </div>

                <!-- Scroll Explore - Top Right -->
                <div class="scroll-indicator-wrapper top-right">
                    ${ScrollExplore()}
                </div>
            </section>

            <!-- Tech Stack at bottom -->
            <div class="hero-tech-stack">
                ${TechStack()}
            </div>
        </main>

        <!-- Breakout Notification -->
        <div class="breakout-toast">
            <svg class="corner-smooth-top" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v40h40C17.9 40 0 22.1 0 0z" fill="black" />
            </svg>

            <div class="toast-content-wrapper">
                <div class="toast-content">
                    <p>Accepting new projects 🚀 <br> for Q4 2025</p>
                </div>
            </div>

            <button class="toast-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 22M2 12L22 12M4.929 4.929L19.071 19.071M19.071 4.929L4.929 19.071" stroke="black"
                        stroke-width="3" stroke-linecap="round" />
                </svg>
            </button>

            <svg class="corner-smooth-right" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v40h40C17.9 40 0 22.1 0 0z" fill="black" />
            </svg>
        </div>
    </div>
  `;
}
