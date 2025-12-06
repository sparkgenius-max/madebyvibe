import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Marquee } from '../components/marquee.js';
import { Button } from '../components/button.js';

export function ServiceDetail() {
    return `
    <div class="viewport-wrapper">
        <main class="main-container scrollable">
            ${Navbar()}
            <div class="sd-hero">
                <!-- Video Background -->
                <div class="hero-video-container">
                    <video class="hero-video" autoplay muted loop playsinline>
                        <source src="https://res.cloudinary.com/dg2cqc3e9/video/upload/v1764998015/6561920-uhd_3840_2160_25fps_fjc9a6.mp4" type="video/mp4">
                    </video>
                    <div class="hero-video-overlay"></div>
                </div>
                
                <div class="sd-hero-content">
                    <div class="sd-label">
                        <span class="dot">●</span>
                        <span>Digital Experience</span>
                    </div>
                    <h1 class="sd-title">
                        A Web Design Studio <br /> creating Digital Vibes.
                    </h1>
                </div>
            </div>
        </main>
    </div>

    <div class="service-detail-container">
        <!-- Header Text Section -->
        <div class="sd-header">
            <div class="sd-header-left">
                <p class="sd-description-lead">
                    Here at MadeByVibe, we combine creative intuition with technical expertise to build digital experiences that matter.
                </p>
            </div>
            <div class="sd-header-right">
                <p class="sd-description">
                    UI/UX, rapid prototyping, research, and motion — we master every pixel of the digital landscape. We take businesses from "just another website" to a fully realized brand ecosystem. Whether you are launching a new venture or reimagining a legacy enterprise, our <a href="#" class="sd-link">creative team at Vibe</a> works as an extension of your own.
                </p>
            </div>
        </div>

        <!-- Hero Image Section -->
        <div class="sd-hero-container" style="position: relative;">
            <!-- Top Left Breakout Button -->
            <div class="sd-image-breakout">
                 <div class="sd-breakout-inner">
                    ${Button({ text: 'See our work', href: '/works', variant: 'primary', className: 'sd-btn' })}
                 </div>
                
                <!-- Smooth Corners to blend with image -->
                <svg class="breakout-corner-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" class="corner-svg-path" fill="#000000" />
                </svg>
                <svg class="breakout-corner-bottom" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" class="corner-svg-path" fill="#000000" />
                </svg>
            </div>

            <div class="sd-hero-image-wrapper">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                     alt="Service Detail Hero" 
                     class="sd-hero-image">
            </div>
        </div>

        <!-- Approach & Capabilities Grid -->
        <div class="sd-content-grid">
            <div class="sd-approach">
                <div class="sd-label">
                    <span class="dot">●</span>
                    <span>Our Approach</span>
                </div>
                <h2 class="sd-subtitle">
                    Are you a challenger brand, a market leader, or somewhere in between? It doesn't matter. We amplify your voice.
                </h2>
                ${Button({ text: 'About Vibe', href: '/about', variant: 'primary' })}
            </div>

            <div class="sd-capabilities">
                <h3 class="sd-cap-title">Our Capabilities</h3>
                <ul class="sd-cap-list">
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>Web Design</span>
                    </li>
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>eCommerce</span>
                    </li>
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>UI/UX Strategy</span>
                    </li>
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>Development</span>
                    </li>
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>Motion & Interaction</span>
                    </li>
                    <li class="sd-cap-item">
                        <div class="sd-check-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span>Brand Identity</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    ${Marquee({ items: ["Design that works", "Code that performs", "Strategy that grows"] })}
    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}
