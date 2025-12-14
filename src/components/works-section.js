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
                <!-- Header Block -->
                <div class="works-header-block">
                    ${SectionLabel('Our work')}
                    <h2 class="works-intro-heading">Take a look at <br> our projects</h2>
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
