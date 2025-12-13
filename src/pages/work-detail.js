
import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';
import { MoreWork, initMoreWork } from '../components/more-work.js';
import { Button } from '../components/button.js';
import { client, urlFor } from '../lib/sanity.js';

export function WorkDetailPage() {
    // Return skeleton - will be populated by initWorkDetailPage
    return `
    ${Navbar()}
    <main class="work-detail-container" id="work-detail-main">
        <div style="padding: 4rem 2rem; text-align: center; color: var(--text-secondary);">
            Loading project...
        </div>
    </main>
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export async function initWorkDetailPage() {
    // Get slug from URL
    const path = window.location.pathname;
    const slug = path.split('/works/')[1];
    const mainContainer = document.getElementById('work-detail-main');

    if (!slug || !mainContainer) {
        console.error('No slug found in URL');
        return;
    }

    // Fetch project data with all fields
    const query = `*[_type == "work" && slug.current == $slug][0]{
        title,
        client,
        year,
        categories,
        description,
        statement,
        websiteUrl,
        mainImage,
        galleryImage1,
        galleryImage2,
        galleryImageFull,
        segment1,
        segment2
    }`;

    try {
        const work = await client.fetch(query, { slug });

        if (work) {
            // Build the full page HTML
            const categoriesHtml = work.categories ?
                work.categories.map(cat => `<span class="category-pill">${cat}</span>`).join('') :
                '<span class="category-pill">Design</span>';

            const heroImage = work.mainImage ? urlFor(work.mainImage).width(1600).url() : '';

            // Gallery images
            const gallery1 = work.galleryImage1 ? urlFor(work.galleryImage1).width(800).url() : '';
            const gallery2 = work.galleryImage2 ? urlFor(work.galleryImage2).width(800).url() : '';
            const galleryFull = work.galleryImageFull ? urlFor(work.galleryImageFull).width(1600).url() : '';

            // Build segments HTML
            let segmentsHtml = '';

            if (work.segment1 && work.segment1.label) {
                const seg1Img1 = work.segment1.image1 ? urlFor(work.segment1.image1).width(1600).url() : '';
                const seg1Img2 = work.segment1.image2 ? urlFor(work.segment1.image2).width(1600).url() : '';

                segmentsHtml += `
                <section class="work-segment">
                    <div class="work-segment-text-grid">
                        <div class="segment-left">
                            ${SectionLabel(work.segment1.label)}
                            <h2 class="work-statement-text">${work.segment1.title || ''}</h2>
                        </div>
                        <div class="segment-right">
                            <p class="segment-desc">${work.segment1.description || ''}</p>
                        </div>
                    </div>
                    <div class="work-gallery">
                        ${seg1Img1 ? `<div class="gallery-item-full"><div class="gallery-inner-image-wrapper"><img src="${seg1Img1}" alt="${work.segment1.label}"></div></div>` : ''}
                        ${seg1Img2 ? `<div class="gallery-item-full"><div class="gallery-inner-image-wrapper"><img src="${seg1Img2}" alt="${work.segment1.label}"></div></div>` : ''}
                    </div>
                </section>
                `;
            }

            if (work.segment2 && work.segment2.label) {
                const seg2Full = work.segment2.imageFull ? urlFor(work.segment2.imageFull).width(1600).url() : '';
                const seg2Left = work.segment2.imageLeft ? urlFor(work.segment2.imageLeft).width(800).url() : '';
                const seg2Right = work.segment2.imageRight ? urlFor(work.segment2.imageRight).width(800).url() : '';

                segmentsHtml += `
                <section class="work-segment">
                    <div class="work-segment-text-grid">
                        <div class="segment-left">
                            ${SectionLabel(work.segment2.label)}
                            <h2 class="work-statement-text">${work.segment2.title || ''}</h2>
                        </div>
                        <div class="segment-right">
                            <p class="segment-desc">${work.segment2.description || ''}</p>
                        </div>
                    </div>
                    <div class="work-gallery">
                        ${seg2Full ? `<div class="gallery-item-full"><div class="gallery-inner-image-wrapper"><img src="${seg2Full}" alt="${work.segment2.label}"></div></div>` : ''}
                        ${(seg2Left || seg2Right) ? `
                            <div class="gallery-grid">
                                ${seg2Left ? `<div class="gallery-item"><img src="${seg2Left}" alt="${work.segment2.label}"></div>` : ''}
                                ${seg2Right ? `<div class="gallery-item"><img src="${seg2Right}" alt="${work.segment2.label}"></div>` : ''}
                            </div>
                        ` : ''}
                    </div>
                </section>
                `;
            }

            // Build full page content
            mainContainer.innerHTML = `
                <!-- Hero Section -->
                <section class="work-hero">
                    <div class="work-hero-wrapper">
                        <!-- Floating Categories -->
                        <div class="work-categories hero-categories-floating">
                            ${categoriesHtml}
                        </div>

                        <!-- The Toast Breakout -->
                        <div class="work-hero-toast">
                            <svg class="corner-smooth-left" width="40" height="40" viewBox="0 0 20 20" fill="none">
                                <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                            </svg>
                            <div class="work-hero-content">
                                <div class="work-hero-meta">
                                    <span class="work-meta-tag">${work.year || ''}</span>
                                    <span class="meta-dot"></span>
                                    <span class="work-meta-tag">${work.client || ''}</span>
                                </div>
                                <h1 class="work-hero-title">${work.title || 'Untitled'}</h1>
                            </div>
                            <svg class="corner-smooth-bottom" width="40" height="40" viewBox="0 0 20 20" fill="none">
                                <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                            </svg>
                        </div>

                        <!-- Main Hero Image -->
                        <div class="work-hero-image-wrapper">
                            <!-- Mobile Toast (Top Left) - same as blog detail -->
                            <div class="work-hero-mobile-toast">
                                <svg class="corner-smooth-top" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000ff" />
                                </svg>
                                <svg class="corner-smooth-bottom" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000ff" />
                                </svg>
                            </div>
                            <img src="${heroImage}" alt="${work.title}" class="work-hero-img">
                        </div>
                    </div>
                </section>

                <!-- Project Info & Description -->
                <section class="work-info-section">
                    <div class="work-info-grid">
                        <div class="work-statement">
                            <h2 class="work-statement-text">${work.statement || 'Project overview'}</h2>
                            <div class="project-team">
                                <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=1');"></div>
                                <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=2');"></div>
                                <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=3');"></div>
                            </div>
                        </div>

                        <div class="work-details-col">
                            <p class="work-description">${work.description || ''}</p>
                            <div class="work-specs">
                                <div class="spec-item">
                                    <span class="spec-label">Client</span>
                                    <span class="spec-value">${work.client || '--'}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">Year</span>
                                    <span class="spec-value">${work.year || '--'}</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">Categories</span>
                                    <span class="spec-value">${work.categories ? work.categories.join(', ') : '--'}</span>
                                </div>
                            </div>
                            ${work.websiteUrl ? Button({ text: 'Visit Website', href: work.websiteUrl, variant: 'visit', direction: 'up-right', target: '_blank' }) : ''}
                        </div>
                    </div>
                </section>

                <!-- Gallery Section -->
                ${(gallery1 || gallery2 || galleryFull) ? `
                <section class="work-gallery">
                    ${(gallery1 || gallery2) ? `
                    <div class="gallery-grid">
                        ${gallery1 ? `<div class="gallery-item"><img src="${gallery1}" alt="Gallery"></div>` : ''}
                        ${gallery2 ? `<div class="gallery-item"><img src="${gallery2}" alt="Gallery"></div>` : ''}
                    </div>
                    ` : ''}
                    ${galleryFull ? `
                    <div class="gallery-item-full">
                        <div class="gallery-inner-image-wrapper">
                            <img src="${galleryFull}" alt="Gallery Full">
                        </div>
                    </div>
                    ` : ''}
                </section>
                ` : ''}

                <!-- Work Segments -->
                ${segmentsHtml}

                <!-- More Work -->
                <section class="more-work-section">
                    <div class="more-work-container">
                        <div class="more-work-header">
                            ${SectionLabel('More Work')}
                            <h2 class="more-work-heading">Selected Work</h2>
                        </div>
                        <div class="more-work-slider-wrapper">
                            <div class="more-work-slider" id="moreWorkSlider">
                                <div style="padding: 2rem; color: var(--text-secondary);">Loading...</div>
                            </div>
                        </div>
                        <div class="more-work-nav">
                            <button class="blog-nav-btn prev btn-icon-only" id="moreWorkPrev" aria-label="Previous" disabled>
                                <div class="btn-content">
                                    <div class="btn-icon-group left">
                                        <span class="btn-icon-primary">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-icon-svg">
                                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                        <span class="btn-icon-secondary">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-icon-svg">
                                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </button>
                            <div class="nav-divider"></div>
                            <button class="blog-nav-btn next btn-icon-only" id="moreWorkNext" aria-label="Next" disabled>
                                <div class="btn-content">
                                    <div class="btn-icon-group right">
                                        <span class="btn-icon-primary">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-icon-svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                        <span class="btn-icon-secondary">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="btn-icon-svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            `;

            // Update page title
            document.title = `${work.title} | madebyvibe`;

        } else {
            mainContainer.innerHTML = `
                <div style="padding: 4rem 2rem; text-align: center;">
                    <h1>Project not found</h1>
                    <p>The project you're looking for doesn't exist.</p>
                </div>
            `;
        }

    } catch (err) {
        console.error('Error fetching work:', err);
        mainContainer.innerHTML = `
            <div style="padding: 4rem 2rem; text-align: center;">
                <h1>Error loading project</h1>
                <p>Please try again later.</p>
            </div>
        `;
    }

    // Init MoreWork section
    initMoreWork();
}
