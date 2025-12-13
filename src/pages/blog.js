
import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Button } from '../components/button.js';
import { SectionLabel } from '../components/section-label.js';
import { initWorkCards } from '../components/work-card.js';
import { client, urlFor } from '../lib/sanity.js';

const BlogCard = (post) => `
    <a href="/blog/${post.slug}" class="blog-card-link work-card-new" data-categories="${post.categories ? post.categories.join(',') : ''}">
        <div>
            <div class="work-card-image-wrapper">
                <img src="${post.image}" alt="${post.title}" class="blog-card-img">
            </div>
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span class="dot-small">●</span>
                    <span class="read-time">${post.readTime || '5 min read'}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt || ''}</p>
            </div>
        </div>
    </a>
`;

// Category definitions with display names
const categories = [
    { value: 'all', label: 'explore all' },
    { value: 'web-development', label: 'web development' },
    { value: 'web-design', label: 'web design' },
    { value: 'branding', label: 'branding' },
    { value: 'news-culture', label: 'news & culture' }
];

export function BlogPage() {
    const filterHtml = categories.map((cat, i) => `
        <a href="#" class="blog-filter-item ${i === 0 ? 'active' : ''}" data-filter="${cat.value}">
            ${cat.label}<span class="count" data-count="${cat.value}">--</span>
        </a>
    `).join('');

    return `
    ${Navbar()}
    
    <div class="blog-filter-header">
        <div class="blog-header-top">
            ${SectionLabel('The Blog')}
        </div>
        <div class="blog-filter-list">
            ${filterHtml}
        </div>
    </div>

    <section class="blog-list-section">
        <div class="blog-grid" id="blog-grid">
            <div style="padding: 4rem; text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">
                Loading articles...
            </div>
        </div>

        <!-- Pagination -->
        <div class="blog-pagination" id="blog-pagination">
            <!-- Will be populated dynamically -->
        </div>
    </section>

    ${Footer()}
    `;
}

let allPosts = []; // Store all posts for filtering

export async function initBlogPage() {
    const blogGrid = document.getElementById('blog-grid');

    if (blogGrid) {
        // Fetch all posts with categories
        const query = `*[_type == "post"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            readTime,
            categories,
            publishedAt,
            mainImage,
            "excerpt": array::join(body[0..0].children[].text, " ")
        }`;

        try {
            const posts = await client.fetch(query);

            if (posts.length > 0) {
                // Map to card format
                allPosts = posts.map(post => ({
                    title: post.title,
                    slug: post.slug,
                    readTime: post.readTime || '5 min read',
                    categories: post.categories || [],
                    image: post.mainImage ? urlFor(post.mainImage).width(600).url() : '',
                    excerpt: post.excerpt ? (post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt) : ''
                }));

                // Render all posts initially
                renderPosts(allPosts);

                // Update counts
                updateCategoryCounts(allPosts);

            } else {
                blogGrid.innerHTML = '<div style="padding: 4rem; text-align: center; grid-column: 1 / -1;">No articles found.</div>';
            }

        } catch (err) {
            console.error('Error fetching posts:', err);
            blogGrid.innerHTML = '<div style="padding: 4rem; text-align: center; grid-column: 1 / -1;">Error loading articles.</div>';
        }
    }

    // Setup filter click handlers
    setupFilterHandlers();

    // Initialize footer JS and other components
    initFooter();

    // Initialize custom cursor for blog cards
    setTimeout(() => {
        if (typeof initWorkCards === 'function') {
            initWorkCards();
        }
    }, 100);
}

function renderPosts(posts) {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    if (posts.length > 0) {
        blogGrid.innerHTML = posts.map(BlogCard).join('');
        // Re-init cursor after render
        setTimeout(() => {
            if (typeof initWorkCards === 'function') {
                initWorkCards();
            }
        }, 50);
    } else {
        blogGrid.innerHTML = '<div style="padding: 4rem; text-align: center; grid-column: 1 / -1;">No articles found in this category.</div>';
    }
}

function updateCategoryCounts(posts) {
    // Count for "all"
    const allCount = document.querySelector('[data-count="all"]');
    if (allCount) allCount.textContent = posts.length;

    // Count for each category
    categories.forEach(cat => {
        if (cat.value === 'all') return;
        const countEl = document.querySelector(`[data-count="${cat.value}"]`);
        if (countEl) {
            const count = posts.filter(p => p.categories && p.categories.includes(cat.value)).length;
            countEl.textContent = count;
        }
    });
}

function setupFilterHandlers() {
    const filterItems = document.querySelectorAll('.blog-filter-item');

    filterItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active state
            filterItems.forEach(f => f.classList.remove('active'));
            item.classList.add('active');

            // Get filter value
            const filter = item.getAttribute('data-filter');

            // Filter posts
            if (filter === 'all') {
                renderPosts(allPosts);
            } else {
                const filtered = allPosts.filter(p => p.categories && p.categories.includes(filter));
                renderPosts(filtered);
            }
        });
    });
}
