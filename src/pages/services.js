import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';
import { client } from '../lib/sanity.js';

export function Services() {
    return `
    ${Navbar()}
    
    <div class="service-detail-wrapper">
        <div class="service-detail-hero">
            <div class="sd-hero-grid">
                <div class="sd-hero-left">
                    ${SectionLabel('Services')}
                    <h1 class="sd-title-large">
                        We are a creative <br>
                        digital agency <br>
                        with deep expertise.
                    </h1>
                </div>
                
                <div class="sd-hero-right">
                    <p class="sd-description-lead">
                        We channel our obsession for exceptional design into bold brands that demand attention and deliver results.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Services List Content -->
        <div class="services-main-content" id="services-list-container">
            <div style="padding: 4rem; text-align: center; color: var(--text-secondary);">Loading services...</div>
        </div>
    </div>

    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export async function initServices() {
    initFooter();

    const container = document.getElementById('services-list-container');
    if (!container) return;

    // Fetch service categories with their linked services
    const query = `*[_type == "serviceCategory"] | order(order asc) {
        title,
        description,
        "items": *[_type == "service" && references(^._id)] | order(title asc) {
            title,
            "slug": slug.current
        }
    }`;

    try {
        const categories = await client.fetch(query);

        if (categories.length > 0) {
            const html = categories.map((category, index) => {
                return `
                <section class="service-category group">
                    <div class="service-title-wrapper">
                        <h2 class="service-title">${category.title}</h2>
                    </div>

                    <div class="service-details-grid">
                        <div class="service-desc-col">
                            <p class="service-description">${category.description || ''}</p>
                        </div>

                        <div class="service-list-col">
                            <div class="service-items">
                                ${category.items && category.items.length > 0 ? category.items.map((item, i) => `
                                    <a href="/services/${item.slug}" class="service-item-link" style="text-decoration: none; color: inherit; display: block;">
                                        <div class="service-item">
                                            <span class="service-item-num">0${i + 1}</span>
                                            <span class="service-item-name">${item.title}</span>
                                            <div class="service-item-icon">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                                    <polyline points="7 7 17 7 17 17"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                `).join('') : '<div class="service-item"><span class="service-item-name">Cannot load details</span></div>'}
                            </div>
                        </div>
                    </div>
                </section>
                `;
            }).join('');

            container.innerHTML = html;
        } else {
            container.innerHTML = '<div style="padding: 4rem; text-align: center;">No services found.</div>';
        }
    } catch (err) {
        console.error('Error fetching services:', err);
        container.innerHTML = '<div style="padding: 4rem; text-align: center;">Error loading services.</div>';
    }
}
