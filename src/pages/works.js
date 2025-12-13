import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';
import { WorksSection, initWorksSection } from '../components/works-section.js';
import { initWorkCards, WorkCard } from '../components/work-card.js';
import { Button } from '../components/button.js';
import { client, urlFor } from '../lib/sanity.js';

// Category definitions with display names
const workCategories = [
    { value: 'all', label: 'all projects' },
    { value: 'branding', label: 'branding' },
    { value: 'web-design', label: 'web design' },
    { value: 'development', label: 'development' },
    { value: 'strategy', label: 'strategy' }
];

export function Works() {
    const filterHtml = workCategories.map((cat, i) => `
        <a href="#" class="blog-filter-item ${i === 0 ? 'active' : ''}" data-filter="${cat.value}">
            ${cat.label}<span class="count" data-count="${cat.value}">--</span>
        </a>
    `).join('');

    return `
    ${Navbar()}

    <div class="blog-filter-header">
        <div class="blog-header-top">
            ${SectionLabel('Selected Work')}
        </div>
        <div class="blog-filter-list">
            ${filterHtml}
        </div>
    </div>

    <section class="works-section">
        <div class="works-masonry" id="works-masonry">
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

    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

let allWorks = []; // Store all works for filtering

export async function initWorks() {
    const leftColumn = document.getElementById('works-column-left');
    const rightCardsContainer = document.getElementById('works-right-cards');

    if (leftColumn && rightCardsContainer) {
        // Fetch all works with categories
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
                // Map to card format
                allWorks = works.map(work => ({
                    title: work.title,
                    slug: work.slug,
                    client: work.client || 'Client',
                    year: work.year || '2024',
                    categories: work.categories || [],
                    image: work.mainImage ? urlFor(work.mainImage).width(800).url() : '',
                    height: '500px'
                }));

                // Render all works initially
                renderWorks(allWorks);

                // Update counts
                updateWorkCategoryCounts(allWorks);

            } else {
                leftColumn.innerHTML = '<div style="padding: 2rem;">No projects found.</div>';
            }

        } catch (err) {
            console.error('Error fetching works:', err);
            leftColumn.innerHTML = '<div style="padding: 2rem;">Error loading projects.</div>';
        }
    }

    // Setup filter click handlers
    setupWorkFilterHandlers();

    // Initialize custom cursor and hover effects
    setTimeout(() => {
        initWorkCards();
    }, 100);
}

function renderWorks(works) {
    const leftColumn = document.getElementById('works-column-left');
    const rightCardsContainer = document.getElementById('works-right-cards');

    if (!leftColumn || !rightCardsContainer) return;

    if (works.length > 0) {
        // Split into two columns
        const half = Math.ceil(works.length / 2);
        const leftWorks = works.slice(0, half);
        const rightWorks = works.slice(half);

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

        // Re-init cursor after render
        setTimeout(() => {
            initWorkCards();
        }, 50);
    } else {
        leftColumn.innerHTML = '<div style="padding: 2rem;">No projects found in this category.</div>';
        rightCardsContainer.innerHTML = '';
    }
}

function updateWorkCategoryCounts(works) {
    // Count for "all"
    const allCount = document.querySelector('[data-count="all"]');
    if (allCount) allCount.textContent = works.length;

    // Count for each category
    workCategories.forEach(cat => {
        if (cat.value === 'all') return;
        const countEl = document.querySelector(`[data-count="${cat.value}"]`);
        if (countEl) {
            const count = works.filter(w => {
                if (!w.categories) return false;
                // Check if any category contains this filter value (case-insensitive partial match)
                return w.categories.some(c => c.toLowerCase().includes(cat.value.replace('-', ' ')) ||
                    c.toLowerCase().includes(cat.value));
            }).length;
            countEl.textContent = count;
        }
    });
}

function setupWorkFilterHandlers() {
    const filterItems = document.querySelectorAll('.blog-filter-item');

    filterItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active state
            filterItems.forEach(f => f.classList.remove('active'));
            item.classList.add('active');

            // Get filter value
            const filter = item.getAttribute('data-filter');

            // Filter works
            if (filter === 'all') {
                renderWorks(allWorks);
            } else {
                const filtered = allWorks.filter(w => {
                    if (!w.categories) return false;
                    return w.categories.some(c => c.toLowerCase().includes(filter.replace('-', ' ')) ||
                        c.toLowerCase().includes(filter));
                });
                renderWorks(filtered);
            }
        });
    });
}
