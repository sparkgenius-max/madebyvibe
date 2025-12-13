import { WorkCard } from './work-card.js';
import { SectionLabel } from './section-label.js';
import { Button } from './button.js';
import { client, urlFor } from '../lib/sanity.js';

export function WorksSection() {
    return `
    <section class="works-section">
        <div class="works-masonry">
            <!-- Left Column -->
            <div class="works-column" id="works-column-left">
                <div style="padding: 2rem; color: var(--text-secondary);">Loading projects...</div>
            </div>

            <!-- Right Column -->
            <div class="works-column" id="works-column-right">
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
                
                <div id="works-right-cards"></div>
            </div>
        </div>
    </section>
    `;
}

export async function initWorksSection() {
    const leftColumn = document.getElementById('works-column-left');
    const rightCardsContainer = document.getElementById('works-right-cards');

    if (!leftColumn || !rightCardsContainer) return;

    // Fetch all works
    const query = `*[_type == "work"] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        client,
        year,
        categories,
        mainImage
    }`;

    try {
        const works = await client.fetch(query);

        if (works.length > 0) {
            // Map Sanity data to WorkCard format
            const mappedWorks = works.map(work => ({
                title: work.title,
                slug: work.slug,
                client: work.client || 'Client',
                year: work.year || '2024',
                categories: work.categories || [],
                image: work.mainImage ? urlFor(work.mainImage).width(800).url() : '',
                height: '500px'
            }));

            // Split into two columns
            const half = Math.ceil(mappedWorks.length / 2);
            const leftWorks = mappedWorks.slice(0, half);
            const rightWorks = mappedWorks.slice(half);

            // Render left column
            leftColumn.innerHTML = leftWorks.map(WorkCard).join('') + `
                <!-- CTA Block -->
                <div class="works-cta-block">
                    <h4 class="works-cta-title">Seen enough?</h4>
                    <p class="works-cta-desc">Let's build your brand's future.</p>
                    ${Button({ text: 'Start a Project', href: '/contact', variant: 'primary' })}
                </div>
            `;

            // Render right column cards
            rightCardsContainer.innerHTML = rightWorks.map(WorkCard).join('');

        } else {
            leftColumn.innerHTML = '<div style="padding: 2rem;">No projects found.</div>';
        }

    } catch (err) {
        console.error('Error fetching works:', err);
        leftColumn.innerHTML = '<div style="padding: 2rem;">Error loading projects.</div>';
    }
}
