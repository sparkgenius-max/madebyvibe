import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Button } from '../components/button.js';

export function Works() {
    const worksData = {
        left: [
            {
                image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2500&auto=format&fit=crop',
                year: '2024',
                client: 'Marcus Stone',
                title: 'Forging a bold personal identity for a fintech visionary.',
                height: '500px',
                grayscale: true
            },
            {
                image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=2671&auto=format&fit=crop',
                year: '2023',
                client: 'Nexus Logistics',
                title: 'Modernizing a legacy brand through strategic visual storytelling.',
                height: '600px'
            },
            {
                image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop',
                year: '2025',
                client: 'Neon Core',
                title: 'Immersive UI/UX design for a next-gen gaming platform.',
                height: '450px'
            },
            {
                image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2670&auto=format&fit=crop',
                year: '2024',
                client: 'Aura Spaces',
                title: 'Translating physical luxury into a seamless digital brand.',
                height: '500px'
            },
            {
                image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2670&auto=format&fit=crop',
                year: '2024',
                client: 'Global Talent',
                title: 'Dominating search rankings with a high-performance web revamp.',
                height: '500px',
                lightBg: true
            }
        ],
        right: [
            {
                image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
                year: '2025',
                client: 'Flux Analytics',
                title: 'Simplifying complex data through intuitive product design.',
                height: '450px'
            },
            {
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop',
                year: '2024',
                client: 'Pulse Events',
                title: 'Capturing the energy of nightlife in a vibrant brand system.',
                height: '400px'
            },
            {
                image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop',
                year: '2024',
                client: 'Apex Structures',
                title: 'Structuring a digital presence as solid as their skyscrapers.',
                height: '550px'
            },
            {
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop',
                year: '2024',
                client: 'Lumina Lens',
                title: 'A cinematic showcase for award-winning visual artists.',
                height: '350px',
                darkBg: true
            },
            {
                image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
                year: '2024',
                client: 'Haven Home',
                title: 'Scaling DTC sales with a conversion-led Shopify store.',
                height: '500px'
            }
        ]
    };

    const renderCard = (work) => `
        <a href="/works/${work.client.toLowerCase().replace(/\s+/g, '-')}" class="work-card-group">
            <div class="work-card-image-wrapper ${work.lightBg ? 'light-bg' : ''} ${work.darkBg ? 'dark-bg' : ''}">
                <img src="${work.image}" 
                     alt="${work.client}" 
                     class="work-card-img ${work.grayscale ? 'grayscale-img' : ''}"
                     style="height: ${work.height}">
            </div>
            <div class="work-card-meta">
                <span>${work.year}</span>
                <span class="meta-dot"></span>
                <span>${work.client}</span>
            </div>
            <h3 class="work-card-title">${work.title}</h3>
        </a>
    `;

    return `
    <div class="viewport-wrapper">
        <main class="main-container">
            ${Navbar()}
            <div class="works-hero">
                <div class="works-hero-content">
                    <div class="works-label">
                        <span class="dot">●</span> Selected Work
                    </div>
                    <h1 class="works-heading">
                        Projects that<br>
                        define brands
                    </h1>
                </div>
            </div>
        </main>
    </div>

    <section class="works-section">
        <div class="works-masonry">
            <!-- Left Column -->
            <div class="works-column">
                ${worksData.left.map(renderCard).join('')}

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
                    <svg class="testimonial-quote" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-3c0-1.945 1.32-3.266 2.866-3.266.41 0 .673.117 1.201.44.498.322 1.113.322 1.494.176.41-.176.732-.528.732-.996v-3.225c0-.469-.293-.85-.732-.996-.44-.147-.938-.117-1.436 0-1.084.234-1.728.088-2.197-.586-.41-.586-.41-1.289-.41-1.963v-.879c0-.703.469-1.435 1.26-1.435h2.343c.645 0 1.172-.528 1.172-1.172V2.223c0-.645-.527-1.172-1.172-1.172h-2.343c-2.485 0-4.653 2.197-4.653 5.654v9.142c0 2.842.908 5.153 1.875 5.153zm-9 0v-3c0-1.945 1.32-3.266 2.866-3.266.41 0 .673.117 1.201.44.498.322 1.113.322 1.494.176.41-.176.732-.528.732-.996v-3.225c0-.469-.293-.85-.732-.996-.44-.147-.938-.117-1.436 0-1.084.234-1.728.088-2.197-.586-.41-.586-.41-1.289-.41-1.963v-.879c0-.703.469-1.435 1.26-1.435h2.343c.645 0 1.172-.528 1.172-1.172V2.223c0-.645-.527-1.172-1.172-1.172H5.795c-2.485 0-4.653 2.197-4.653 5.654v9.142c0 2.842.908 5.153 1.875 5.153z"/>
                    </svg>
                    <h3 class="testimonial-text">
                        "Vibe didn't just design a website; they built a conversion engine. Our organic traffic doubled in 3 months."
                    </h3>
                    <div class="testimonial-author">
                        <div class="author-avatar">S</div>
                        <div class="author-info">
                            <span class="author-name">Sarah Jenkins</span>
                            <span class="author-role">CMO, TechFlow</span>
                        </div>
                    </div>
                </div>

                ${worksData.right.map(renderCard).join('')}
            </div>
        </div>
    </section>

    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initWorks() {
    // Any specific interaction init for works page
}
