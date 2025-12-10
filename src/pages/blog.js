
import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Button } from '../components/button.js';
import { SectionLabel } from '../components/section-label.js';
import { initWorkCards } from '../components/work-card.js';

// Sample Data
const blogPosts = [
    {
        id: 1,
        readTime: "2 min read",
        title: "Why did Rise at Seven choose MadeByShape?",
        excerpt: "It always has a feel good factor when another agency instructs us to totally rebrand their business...",
        image: "/images/project-1.png",
        category: "Agency Life"
    },
    {
        id: 2,
        readTime: "6 min read",
        title: "Our Culture, Our Value & Our Studio",
        excerpt: "In our own words, how important culture, values and studio environment is to us as a web design agency...",
        image: "/images/project-2.png",
        category: "Culture"
    },
    {
        id: 3,
        readTime: "10 min read",
        title: "Why having a design agency matters",
        excerpt: "Co-Founder insights on why we haven't turned to AI and still believe in human creativity...",
        image: "/images/project-3.png",
        category: "Opinion"
    },
    {
        id: 4,
        readTime: "5 min read",
        title: "The Future of Web Design in 2025",
        excerpt: "Exploring the trends and technologies that will shape the digital landscape in the coming year...",
        image: "/images/project-1-detail.png",
        category: "Trends"
    },
    {
        id: 5,
        readTime: "8 min read",
        title: "Building Brand Identity From Scratch",
        excerpt: "A deep dive into our process of creating memorable brands that resonate with audiences...",
        image: "/images/project-2.png",
        category: "Branding"
    },
    {
        id: 6,
        readTime: "4 min read",
        title: "UX Best Practices for E-Commerce",
        excerpt: "How to convert visitors into customers through intuitive and seamless user experiences...",
        image: "/images/project-3.png",
        category: "UX/UI"
    },
    {
        id: 7,
        readTime: "7 min read",
        title: "Motion Design: Enhancing Interaction",
        excerpt: "Using subtle animations to guide users and add delight without sacrificing performance...",
        image: "/images/project-1.png",
        category: "Design"
    },
    {
        id: 8,
        readTime: "5 min read",
        title: "The Power of Typography",
        excerpt: "Why font choice is more than just aesthetics—it's about voice, tone, and readability...",
        image: "/images/project-2.png",
        category: "Design"
    },
    {
        id: 9,
        readTime: "3 min read",
        title: "SEO for Modern Websites",
        excerpt: "Technical considerations for ensuring your beautiful site actually gets seen by people...",
        image: "/images/project-3.png",
        category: "Development"
    }
];

const BlogCard = (post) => `
    <a href="/blog/${post.id}" class="blog-card-link work-card-new">
        <div>
            <div class="work-card-image-wrapper">
                <img src="${post.image}" alt="${post.title}" class="blog-card-img">
            </div>
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span class="dot-small">●</span>
                    <span class="read-time">${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        </div>
    </a>
`;

const NewsletterBlock = () => `
    <div class="blog-newsletter-block">
        <div class="newsletter-content">
            <h2 class="newsletter-title">Join our newsletter</h2>
            <p class="newsletter-desc">Get the latest insights, trends, and news from Vibe delivered straight to your inbox.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Your email address" class="newsletter-input" required>
                ${Button({ text: 'Subscribe', variant: 'primary', icon: true })}
            </form>
        </div>
        <div class="newsletter-visual">
             <!-- Abstract Visual -->
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" class="newsletter-svg">
                <circle cx="100" cy="100" r="99" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
                <path d="M100 0v200M0 100h200" stroke="rgba(255,255,255,0.1)"/>
             </svg>
        </div>
    </div>
`;

export function BlogPage() {
    return `
    ${Navbar()}
    
    <div class="blog-filter-header">
        <div class="blog-header-top">
            ${SectionLabel('The Blog')}
        </div>
        <div class="blog-filter-list">
            <a href="#" class="blog-filter-item active">explore all<span class="count">437</span></a>
            <a href="#" class="blog-filter-item">web development<span class="count">118</span></a>
            <a href="#" class="blog-filter-item">web design<span class="count">128</span></a>
            <a href="#" class="blog-filter-item">branding<span class="count">36</span></a>
            <a href="#" class="blog-filter-item">news & culture<span class="count">145</span></a>
            <a href="#" class="blog-filter-item">archive<span class="count">78</span></a>
        </div>
    </div>

    <section class="blog-list-section">
        <div class="blog-grid">
            ${blogPosts.map(BlogCard).join('')}
        </div>

        <!-- Pagination -->
        <div class="blog-pagination">
            <button class="pagination-btn active">1</button>
            <button class="pagination-btn">2</button>
            <button class="pagination-btn">3</button>
            <span class="pagination-dots">...</span>
            <button class="pagination-btn">Next</button>
        </div>
    </section>

    ${Footer()}
    `;
}

export function initBlogPage() {
    // Initialize footer JS and other components
    initFooter();

    // Initialize custom cursor for blog cards (same as works page)
    if (typeof initWorkCards === 'function') {
        initWorkCards();
    } else {
        // Fallback or dynamic import if needed, but direct import is better
        import('../components/work-card.js').then(module => {
            if (module.initWorkCards) module.initWorkCards();
        });
    }
}
