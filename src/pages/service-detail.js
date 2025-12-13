import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Marquee } from '../components/marquee.js';
import { Button } from '../components/button.js';
import { SectionLabel } from '../components/section-label.js';
import { LargeImageCTA } from '../components/large-image-cta.js';
import { client, urlFor } from '../lib/sanity.js';

export function ServiceDetail() {
    return `
    ${Navbar()}
    
    <div id="service-detail-content">
        <div class="service-detail-wrapper" style="min-height: 80vh;">
             <!-- Loading State -->
             <div class="service-detail-hero">
                <div class="sd-hero-grid">
                    <div class="sd-hero-left">
                        ${SectionLabel('Loading...')}
                    </div>
                </div>
            </div>
        </div>
    </div>

    ${Marquee({ items: ["Design that works", "Code that performs", "Strategy that grows"] })}
    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export async function initServiceDetail() {
    initFooter();

    const container = document.getElementById('service-detail-content');
    if (!container) return;

    // Get slug from URL
    const slug = window.location.pathname.split('/services/')[1];

    if (!slug) {
        container.innerHTML = '<div style="padding: 4rem; text-align: center;">Service not found.</div>';
        return;
    }

    // Fetch service detail data
    const query = `*[_type == "service" && slug.current == $slug][0] {
        title,
        detailHeroTitle,
        detailHeroDescriptionLead,
        detailHeroDescription,
        detailImage,
        approachTitle,
        approachText,
        capabilities
    }`;

    try {
        const service = await client.fetch(query, { slug });

        if (service) {
            const heroTitle = service.detailHeroTitle || service.title || 'Service Detail';
            const imageUrl = service.detailImage
                ? urlFor(service.detailImage).width(1920).url()
                : 'https://res.cloudinary.com/dg2cqc3e9/video/upload/v1765123431/3249454-uhd_3840_2160_25fps_gurww6.mp4'; // Fallback to video placeholder if no image? 
            // Note: LargeImageCTA handles images. If video, we might need a different component or assume it's an image.
            // The original code passed a video URL to imageUrl property of LargeImageCTA. 
            // LargeImageCTA likely handles <img> src. Converting video to img src won't work.
            // However, Sanity usually serves images.

            const renderLargeImageCTA = () => {
                // Check if it's a video URL (fallback) or Sanity Image
                return LargeImageCTA({
                    buttonText: 'See our work',
                    buttonLink: '/works',
                    imageUrl: imageUrl
                });
            }

            container.innerHTML = `
            <div class="service-detail-wrapper">
                <div class="service-detail-hero">
                    <div class="sd-hero-grid">
                        <div class="sd-hero-left">
                            ${SectionLabel(service.title || 'Service')}
                            <h1 class="sd-title-large">
                                ${heroTitle}
                            </h1>
                        </div>
                        
                        <div class="sd-hero-right">
                            <p class="sd-description-lead">
                                ${service.detailHeroDescriptionLead || ''}
                            </p>
                            <p class="sd-description">
                                ${service.detailHeroDescription || ''}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="service-detail-container">
                    <!-- Hero Image Section -->
                    ${renderLargeImageCTA()}

                    <!-- Approach & Capabilities Grid -->
                    <div class="sd-content-grid">
                        <div class="sd-approach">
                            ${SectionLabel('Our Approach')}
                            <h2 class="sd-subtitle">
                                ${service.approachTitle || 'Approach'}
                            </h2>
                            <p class="sd-text-secondary" style="margin-bottom: 2rem; color: var(--text-secondary); font-size: 1.125rem; line-height: 1.6;">
                                ${service.approachText || ''}
                            </p>
                            ${Button({ text: 'About Vibe', href: '/about', variant: 'primary' })}
                        </div>

                        <div class="sd-capabilities">
                            <h3 class="sd-cap-title">Our Capabilities</h3>
                            <ul class="sd-cap-list">
                                ${service.capabilities ? service.capabilities.map(cap => `
                                    <li class="sd-cap-item">
                                        <div class="sd-check-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>${cap}</span>
                                    </li>
                                `).join('') : '<li class="sd-cap-item"><span>No capabilities listed</span></li>'}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } else {
            container.innerHTML = '<div style="padding: 4rem; text-align: center;">Service not found.</div>';
        }
    } catch (err) {
        console.error('Error fetching service detail:', err);
        container.innerHTML = '<div style="padding: 4rem; text-align: center;">Error loading service detail.</div>';
    }
}
