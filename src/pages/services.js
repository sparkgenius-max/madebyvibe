import { Navbar } from '../components/navbar.js';
import { Blog } from '../components/blog.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';

export function Services() {
    const servicesData = [
        {
            id: '01',
            title: 'Design',
            description: 'Our in-house artisans craft visual identities that perfectly resonate with your core values.',
            items: [
                'Brand Identity',
                'Web Design',
                'eCommerce',
                'Shopify',
                'Graphic Design'
            ]
        },
        {
            id: '02',
            title: 'Develop',
            description: 'Engineering robust digital platforms that meet the highest industry standards and performance metrics.',
            items: [
                'Web Development',
                'Craft CMS',
                'Shopify',
                'Craft Commerce',
                'eCommerce',
                'Technical SEO'
            ]
        },
        {
            id: '03',
            title: 'Support',
            description: 'Reliable ongoing partnership for your design, technical, and growth marketing requirements.',
            items: [
                'SEO',
                'Web Hosting',
                'Shape Support',
                'PPC',
                'Content Writing',
                'Craft CMS'
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
    <div class="viewport-wrapper">
        <main class="main-container">
            ${Navbar()}
            <div class="services-hero">
                <!-- Video Background -->
                <div class="hero-video-container">
                    <video class="hero-video" autoplay muted loop playsinline>
                        <source src="https://res.cloudinary.com/dg2cqc3e9/video/upload/v1764998015/6561920-uhd_3840_2160_25fps_fjc9a6.mp4" type="video/mp4">
                    </video>
                    <div class="hero-video-overlay"></div>
                </div>
                
                <div class="services-hero-content">
                    <div class="services-label">
                        <span class="dot">●</span> Services
                    </div>
                    <div class="services-hero-grid">
                        <h1 class="services-heading">
                            We are a creative <br>
                            digital agency <br>
                            with deep expertise
                        </h1>
                        <div class="services-intro-text">
                            <p>We channel our obsession for exceptional design into bold brands that demand attention and deliver results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <div class="services-main-content">
        ${servicesHTML}
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
