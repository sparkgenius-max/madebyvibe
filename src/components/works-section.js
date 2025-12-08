import { WorkCard } from './work-card.js';
import { SectionLabel } from './section-label.js';
import { Button } from './button.js';

const worksData = {
    left: [
        {
            image: '/images/project-1.png',
            year: '2024',
            client: 'TechNova Solutions',
            title: 'Designing a memorable logo and comprehensive branding for a tech startup.',
            height: '500px',
            grayscale: true,
            categories: ['Logo Design', 'Branding']
        },
        {
            image: '/images/project-2.png',
            year: '2023',
            client: 'Urban Retail Co.',
            title: 'Creating a fully designed and developed website for a retail business.',
            height: '500px',
            categories: ['Website Creation (Design & Development)']
        },
        {
            image: '/images/project-3.png',
            year: '2024',
            client: 'Creative Studios',
            title: 'Building a custom website with complete design and development.',
            height: '500px',
            categories: ['Website Creation (Design & Development)']
        },
        {
            image: '/images/project-1.png',
            year: '2024',
            client: 'Global Marketing Agency',
            title: 'Creating engaging Instagram posts for brand awareness.',
            height: '500px',
            categories: ['Instagram Posts']
        },
        {
            image: '/images/project-2.png',
            year: '2024',
            client: 'Fashion Forward',
            title: 'Crafting custom illustrations for marketing materials.',
            height: '500px',
            lightBg: true,
            categories: ['Illustration']
        }
    ],
    right: [
        {
            image: '/images/project-3.png',
            year: '2024',
            client: 'DataFlow Inc.',
            title: 'Developing an eCommerce website with design and functionality.',
            height: '500px',
            categories: ['Website Creation (Design & Development)']
        },
        {
            image: '/images/project-1.png',
            year: '2024',
            client: 'Content Creators Hub',
            title: 'Designing professional LinkedIn posts for business networking.',
            height: '500px',
            categories: ['LinkedIn Posts']
        },
        {
            image: '/images/project-2.png',
            year: '2024',
            client: 'AdVantage Media',
            title: 'Creating eye-catching Instagram content for social media growth.',
            height: '500px',
            categories: ['Instagram Posts']
        },
        {
            image: '/images/project-3.png',
            year: '2024',
            client: 'Innovate Corp',
            title: 'Building a Shopify website with custom design and development.',
            height: '500px',
            categories: ['Website Creation (Design & Development)']
        },
        {
            image: '/images/project-1.png',
            year: '2024',
            client: 'Shape Dynamics',
            title: 'Crafting strategic LinkedIn posts for thought leadership.',
            height: '500px',
            darkBg: true,
            categories: ['LinkedIn Posts']
        }
    ]
};

export function WorksSection() {
    return `
    <section class="works-section">
        <div class="works-masonry">
            <!-- Left Column -->
            <div class="works-column">
                ${worksData.left.map(WorkCard).join('')}

                <!-- CTA Block -->
                <div class="works-cta-block">
                    <h4 class="works-cta-title">Seen enough?</h4>
                    <p class="works-cta-desc">Let's build your brand's future.</p>
                    ${Button({ text: 'Start a Project', href: '/contact', variant: 'primary' })}
                </div>
            </div>

            <!-- Right Column -->
            <div class="works-column">
                <!-- Testimonial Block -->
                <div class="works-testimonial">
                    <div class="works-testimonial-content">
                        <h3 class="testimonial-text">
                            <svg class="quote-icon-large" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 60C30 75 20 85 5 85V75C15 75 20 65 20 50H5V15H45V60H30ZM85 60C85 75 75 85 60 85V75C70 75 75 65 75 50H60V15H100V60H85Z"/>
                            </svg>
                            Vibe understands the client's concept & turns ideas into a reality
                        </h3>
                        <div class="testimonial-author">
                            <div class="author-avatar" style="background: var(--accent-brand); color: #000;">S</div>
                            <div class="author-info">
                                <span class="author-name">Stacy</span>
                                <span class="author-role">Miller Metcalfe</span>
                            </div>
                        </div>
                    </div>
                </div>

                ${worksData.right.map(WorkCard).join('')}
            </div>
        </div>
    </section>
    `;
}
