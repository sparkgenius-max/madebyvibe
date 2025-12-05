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
                <button class="primary-cta">
                    Start Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
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
