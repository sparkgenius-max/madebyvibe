
import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';

export function BlogDetailPage() {
    // dummy data
    const post = {
        title: "Best SMS Marketing Platform for Ecommerce",
        readTime: "5 min read",
        author: {
            name: "Vibe Team",
            role: "Content Creator",
            image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
        date: "Oct 24, 2023"
    };

    return `
    ${Navbar()}
    <main class="blog-detail-container">
        <!-- Hero Section -->
        <section class="blog-hero-section">
             <!-- Left: Info & Title -->
            <div class="blog-hero-left">
                <div class="blog-hero-content">
                    <div class="blog-hero-meta-top">
                         ${SectionLabel(post.readTime)}
                    </div>
                    
                    <div class="blog-title-container">
                        <h1 class="blog-hero-title">${post.title}</h1>
                    </div>
                </div>

                <div class="blog-hero-author">
                    <div class="author-avatar-wrapper">
                        <img src="${post.author.image}" alt="${post.author.name}" class="author-avatar">
                    </div>
                    <div class="author-info">
                        <span class="author-name">${post.author.name}</span>
                        <span class="author-role">${post.author.role}</span>
                    </div>
                </div>
            </div>

            <!-- Right: Image -->
            <div class="blog-hero-right">
                <!-- Inverted Corners - positioned at image left edge -->
                <svg class="blog-corner blog-corner-top" width="32" height="32" viewBox="0 0 20 20" fill="none">
                    <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                </svg>
                <svg class="blog-corner blog-corner-bottom" width="32" height="32" viewBox="0 0 20 20" fill="none">
                    <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                </svg>
                
                <div class="blog-hero-image-wrapper">
                    <img src="${post.image}" alt="${post.title}" class="blog-hero-img">
                </div>
            </div>
        </section>

        <!-- Main Layout: Sidebar Left | Content | Sidebar Right -->
        <div class="blog-layout-wrapper">
            
            <!-- Left Sticky Sidebar: TOC & Progress -->
            <aside class="blog-sidebar-left">
                <div class="sticky-sidebar-content">
                    <div class="toc-widget">
                        <h4 class="widget-title">Table of Content</h4>
                        <ul class="toc-list" id="tocList"> 
                            <!-- Injected via JS -->
                        </ul>
                    </div>
                    
                    <div class="reading-progress-widget">
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill"></div>
                        </div>
                        <span class="progress-text">0% Read</span>
                    </div>
                </div>
            </aside>

            <!-- Center: Rich Text Content -->
            <article class="blog-article-content" id="intro">
                <p class="lead-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div class="rich-text-block">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h2 id="why-sms">Why SMS Marketing?</h2>
                <div class="rich-text-block">
                    <p>SMS marketing represents one of the most direct channels for customer communication. With open rates often exceeding 98%, it outperforms email significantly in terms of immediate engagement.</p>
                    <blockquote>
                        "The future of ecommerce lies in personalized, instant communication channels that respect user preference while delivering value."
                    </blockquote>
                    <p>Businesses that leverage SMS correctly see a <strong>20-30% increase</strong> in customer retention rates compared to those relying solely on email.</p>
                </div>

                <h2 id="platforms">Is Platform Worth The Cost</h2>
                <div class="rich-text-block">
                    <p>When evaluating different platforms, it's essential to look at the ROI they generate. Here is a breakdown of common tiers:</p>
                    
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Platform</th>
                                    <th>Starting Price</th>
                                    <th>Key Feature</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Klaviyo</td>
                                    <td>$45/mo</td>
                                    <td>Deep Integration</td>
                                </tr>
                                <tr>
                                    <td>Postscript</td>
                                    <td>$25/mo</td>
                                    <td>Shopify Native</td>
                                </tr>
                                <tr>
                                    <td>Attentive</td>
                                    <td>Custom</td>
                                    <td>Enterprise Scale</td>
                                </tr>
                                <tr>
                                    <td>Yotpo</td>
                                    <td>$19/mo</td>
                                    <td>Review Synergy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="caption">Table 1: Comparison of major SMS marketing platforms in 2024.</p>
                </div>

                <h2 id="analytics">Advanced Analytics & Tools</h2>
                <div class="rich-text-block">
                     <p>A good platform must provide detailed insights. You need to know not just who opened, but who clicked and who purchased.</p>
                     
                     <div class="blog-article-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Analytics Dashboard">
                        <span class="image-caption">Real-time analytics dashboard example</span>
                     </div>

                     <h3>Key Metrics to Track</h3>
                     <ul>
                        <li><strong>Click-Through Rate (CTR)</strong>: Measures engagement effectiveness.</li>
                        <li><strong>Conversion Rate</strong>: The percentage of recipients who take the desired action.</li>
                        <li><strong>Opt-out Rate</strong>: Critical for monitoring list health.</li>
                     </ul>
                </div>

                <h2 id="engagement">How To Track Modern Engagement</h2>
                <div class="rich-text-block">
                    <p>Modern engagement isn't just about clicks. It's about replies, sentiment, and long-term value. Using <a href="#">conversational marketing</a> techniques enables two-way dialogue.</p>
                    <p>Consider the following strategies:</p>
                    <ol>
                        <li>Personalized welcome series</li>
                        <li>Cart abandonment flows with dynamic images</li>
                        <li>Post-purchase feedback loops</li>
                    </ol>
                </div>

                <h2 id="ai-feautres">AI & Future Features</h2>
                <div class="rich-text-block">
                    <p>Artificial Intelligence is reshaping how we write copy and segment audiences. Predictive analytics can now determine the <em>exact</em> best time to send a message to each individual user.</p>
                </div>

                <h2 id="conclusion">Putting It All Together</h2>
                <div class="rich-text-block">
                     <p>Choosing the right SMS platform is a strategic decision that impacts your bottom line. Take the time to demo multiple solutions and find the one that fits your workflow.</p>
                     <p>Ready to scale your business? Check out our <a href="/services">services page</a> to see how we can help.</p>
                </div>
            </article>

            <!-- Right Sticky Sidebar: Social Share -->
            <aside class="blog-sidebar-right">
                <div class="sticky-sidebar-content">
                    <div class="share-widget">
                        <div class="social-share-group">
                            <a href="#" class="share-btn twitter" aria-label="Share on Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="#" class="share-btn linkedin" aria-label="Share on LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
                            </a>
                            <a href="#" class="share-btn facebook" aria-label="Share on Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                             <a href="#" class="share-btn link" aria-label="Copy Link" onclick="navigator.clipboard.writeText(window.location.href); return false;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.36 19.5A4.86 4.86 0 0 1 14.91 18l.71-.71a3.86 3.86 0 0 0 5.46-5.46l-4.24-4.24a3.86 3.86 0 0 0-5.45 0l-1.07 1.07-1.41-1.42 1.06-1.06a5.86 5.86 0 0 1 8.28 0l4.24 4.24a5.86 5.86 0 0 1 0 8.28 5.84 5.84 0 0 1-4.13 1.8zM9.54 12.06a.5.5 0 0 1-.36-.15l-4.24-4.24A3.86 3.86 0 0 0 10.4 2.21L11.47 3.28 12.89 1.86 11.81.8a5.86 5.86 0 0 1 8.28 8.28L15.85 13.32a6 6 0 0 1-4.13 1.8 5.91 5.91 0 0 1-4.24-1.74l1.41-1.41a3.92 3.92 0 0 0 2.23-1.07.5.5 0 0 1 .71.71.5.5 0 0 1-.15.35z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </main>
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initBlogDetailPage() {
    // 1. Dynamic Table of Contents & Setup
    const article = document.querySelector('.blog-article-content');
    const tocList = document.getElementById('tocList');

    // Generate TOC
    if (article && tocList) {
        const headings = article.querySelectorAll('h2');
        tocList.innerHTML = '';

        headings.forEach((heading, index) => {
            // Create ID if missing
            if (!heading.id) {
                heading.id = 'heading-' + index;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + heading.id;
            a.className = 'toc-link';
            a.textContent = heading.textContent;

            // Allow smooth scroll
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(heading.id);
                if (target) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    // 2. Reading Progress & Active TOC - Optimized
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');
    let tocLinks = document.querySelectorAll('.toc-link'); // re-select after generation
    const sections = article ? article.querySelectorAll('h2') : [];

    let ticking = false;

    function updateProgress() {
        if (!article) return;

        // Re-select TOC links if empty (in case they were generated late)
        if (tocLinks.length === 0) {
            tocLinks = document.querySelectorAll('.toc-link');
        }

        // A. Reading Progress
        const winHeight = window.innerHeight;
        const currentPos = window.scrollY;

        // Get article position relative to document
        const articleRect = article.getBoundingClientRect();
        const articleTotalTop = currentPos + articleRect.top;
        const articleHeight = article.offsetHeight;

        // Progress should be 0% when article top reaches viewport top (with offset for nav)
        // Progress should be 100% when article bottom reaches viewport bottom
        const startPoint = articleTotalTop - 100; // 100px offset for navbar
        const endPoint = articleTotalTop + articleHeight - winHeight;

        let percent = 0;

        // Only start counting when we've scrolled past the start point
        if (currentPos >= startPoint) {
            const scrollDistance = endPoint - startPoint;
            if (scrollDistance > 0) {
                percent = ((currentPos - startPoint) / scrollDistance) * 100;
            }
        }

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        if (progressBar) progressBar.style.width = percent + '%';
        if (progressText) progressText.textContent = Math.round(percent) + '% Read';

        // B. Active TOC
        let currentId = '';

        // Find the section currently active
        // Logic: The last section that is above the middle of importance
        const prominenceThreshold = winHeight * 0.3;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < prominenceThreshold) {
                currentId = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (currentId && link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active');
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    // Slight delay to ensure DOM is ready? logic runs sync usually.
    setTimeout(updateProgress, 100);

    // 3. Position SVG corners to match title container edges
    function positionCornerSVGs() {
        const titleContainer = document.querySelector('.blog-title-container');
        const heroRight = document.querySelector('.blog-hero-right');
        const imageWrapper = document.querySelector('.blog-hero-image-wrapper');
        const cornerTop = document.querySelector('.blog-corner-top');
        const cornerBottom = document.querySelector('.blog-corner-bottom');

        if (!titleContainer || !heroRight || !imageWrapper || !cornerTop || !cornerBottom) return;

        const titleRect = titleContainer.getBoundingClientRect();
        const heroRightRect = heroRight.getBoundingClientRect();
        const imageRect = imageWrapper.getBoundingClientRect();

        // Get SVG dimensions
        const svgHeight = 32; // Fixed 32px as set in HTML

        // Calculate VERTICAL positions relative to hero-right container
        // For top SVG: position so visual bottom aligns with title top edge
        // Using center origin, so offset by half the SVG height, plus 1px adjustment
        const topOffset = titleRect.top - heroRightRect.top - svgHeight + 1;
        // For bottom SVG: position so visual top aligns with title bottom edge
        const bottomOffset = heroRightRect.bottom - titleRect.bottom - svgHeight;

        // Calculate HORIZONTAL position - left edge of image relative to hero-right
        const leftOffset = imageRect.left - heroRightRect.left;

        // Position SVGs using setProperty with important to override CSS
        // Vertical
        cornerTop.style.setProperty('top', topOffset + 'px', 'important');
        cornerTop.style.setProperty('bottom', 'auto', 'important');
        cornerBottom.style.setProperty('bottom', bottomOffset + 'px', 'important');
        cornerBottom.style.setProperty('top', 'auto', 'important');

        // Horizontal - both at the left edge of the image
        cornerTop.style.setProperty('left', leftOffset + 'px', 'important');
        cornerBottom.style.setProperty('left', leftOffset + 'px', 'important');

        console.log('SVG positions updated:', { topOffset, bottomOffset, leftOffset });
    }

    // Run on load and resize
    positionCornerSVGs();
    window.addEventListener('resize', positionCornerSVGs);
    // Also run after a short delay to ensure layout is complete
    setTimeout(positionCornerSVGs, 200);

    // 4. Init Footer
    if (typeof window.initFooter === 'function') {
        window.initFooter();
    }
}
