import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';

export function Services() {
    const servicesData = [
        {
            id: '01',
            title: 'Design',
            description: 'Our in-house artisans craft visual identities that perfectly resonate with your core values.',
            items: [
                'Logo Design',
                'Branding',
                'Illustration'
            ]
        },
        {
            id: '02',
            title: 'Develop',
            description: 'Engineering robust digital platforms that meet the highest industry standards and performance metrics.',
            items: [
                'Website Creation (Design & Development)'
            ]
        },
        {
            id: '03',
            title: 'Support',
            description: 'Reliable ongoing partnership for your design, technical, and growth marketing requirements.',
            items: [
                'Instagram Posts',
                'LinkedIn Posts'
            ]
        }
    ];

    const servicesHTML = servicesData.map((service, index) => `
        <section class="service-category group">
            <div class="service-title-wrapper">
                <h2 class="service-title">${service.title}</h2>
            </div>

            <div class="service-details-grid">
                <div class="service-desc-col">
                    <p class="service-description">${service.description}</p>
                </div>

                <div class="service-list-col">
                    <div class="service-items">
                        ${service.items.map((item, i) => `
                            <div class="service-item">
                                <span class="service-item-num">0${i + 1}</span>
                                <span class="service-item-name">${item}</span>
                                <div class="service-item-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
    `).join('');

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
        <div class="services-main-content">
            ${servicesHTML}
        </div>
    </div>

    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initServices() {
    // Any specific interaction init for services page
    // e.g. scroll animations or hover effects that need JS
}
