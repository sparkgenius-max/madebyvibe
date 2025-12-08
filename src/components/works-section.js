import { WorkCard } from './work-card.js';
import { SectionLabel } from './section-label.js';
import { Button } from './button.js';

const worksData = {
    left: [
        {
            image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2500&auto=format&fit=crop',
            year: '2024',
            client: 'Marcus Stone',
            title: 'Forging a bold personal identity for a fintech visionary.',
            height: '500px',
            grayscale: true,
            categories: ['Branding', 'Identity', 'Strategy']
        },
        {
            image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=2671&auto=format&fit=crop',
            year: '2023',
            client: 'Nexus Logistics',
            title: 'Modernizing a legacy brand through strategic visual storytelling.',
            height: '500px',
            categories: ['Strategy', 'Visuals']
        },
        {
            image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop',
            year: '2025',
            client: 'Neon Core',
            title: 'Immersive UI/UX design for a next-gen gaming platform.',
            height: '500px',
            categories: ['UI/UX', 'Gaming', 'Web']
        },
        {
            image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2670&auto=format&fit=crop',
            year: '2024',
            client: 'Aura Spaces',
            title: 'Translating physical luxury into a seamless digital brand.',
            height: '500px',
            categories: ['Marketing', 'Luxury']
        },
        {
            image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2670&auto=format&fit=crop',
            year: '2024',
            client: 'Global Talent',
            title: 'Dominating search rankings with a high-performance web revamp.',
            height: '500px',
            lightBg: true,
            categories: ['Web Design', 'SEO', 'Performance']
        }
    ],
    right: [
        {
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
            year: '2025',
            client: 'Flux Analytics',
            title: 'Simplifying complex data through intuitive product design.',
            height: '500px',
            categories: ['App Design', 'Data', 'SaaS']
        },
        {
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop',
            year: '2024',
            client: 'Pulse Events',
            title: 'Capturing the energy of nightlife in a vibrant brand system.',
            height: '500px',
            categories: ['Branding', 'Events']
        },
        {
            image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop',
            year: '2024',
            client: 'Apex Structures',
            title: 'Structuring a digital presence as solid as their skyscrapers.',
            height: '500px',
            categories: ['Development', 'Corporate']
        },
        {
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop',
            year: '2024',
            client: 'Lumina Lens',
            title: 'A cinematic showcase for award-winning visual artists.',
            height: '500px',
            darkBg: true,
            categories: ['Photography', 'Portfolio']
        },
        {
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
            year: '2024',
            client: 'Haven Home',
            title: 'Scaling DTC sales with a conversion-led Shopify store.',
            height: '500px',
            categories: ['E-Commerce', 'Shopify', 'Conversion']
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
