import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Marquee } from '../components/marquee.js';
import { Button } from '../components/button.js';
import { SectionLabel } from '../components/section-label.js';
import { LargeImageCTA } from '../components/large-image-cta.js';

export function ServiceDetail() {
    return `
    ${Navbar()}
    
    <div class="service-detail-wrapper">
        <div class="service-detail-hero">
            <div class="sd-hero-grid">
                <div class="sd-hero-left">
                    ${SectionLabel('Digital Experience')}
                    <h1 class="sd-title-large">
                        A Web Design Studio <br /> creating Digital Vibes.
                    </h1>
                </div>
                
                <div class="sd-hero-right">
                    <p class="sd-description-lead">
                        Here at MadeByVibe, we combine creative intuition with technical expertise to build digital experiences that matter.
                    </p>
                    <p class="sd-description">
                        UI/UX, rapid prototyping, research, and motion — we master every pixel of the digital landscape. We take businesses from "just another website" to a fully realized brand ecosystem. Whether you are launching a new venture or reimagining a legacy enterprise, our <a href="#" class="sd-link">creative team at Vibe</a> works as an extension of your own.
                    </p>
                </div>
            </div>
        </div>

        <div class="service-detail-container">
            <!-- Hero Image Section -->
            ${LargeImageCTA({
                buttonText: 'See our work',
                buttonLink: '/works',
                imageUrl: 'https://res.cloudinary.com/dg2cqc3e9/video/upload/v1765123431/3249454-uhd_3840_2160_25fps_gurww6.mp4'
            })}

        <!-- Approach & Capabilities Grid -->
        <div class="sd-content-grid">
            <div class="sd-approach">
                ${SectionLabel('Our Approach')}
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
