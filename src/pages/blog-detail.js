
import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';
import { Blog, initBlog } from '../components/blog.js';
import { client, urlFor } from '../lib/sanity.js';

export function BlogDetailPage() {
    // Return skeleton - will be populated dynamically
    return `
    ${Navbar()}
    <main class="blog-detail-container" id="blog-detail-main">
        <div style="padding: 4rem 2rem; text-align: center; color: var(--text-secondary);">
            Loading article...
        </div>
    </main>
    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

// Helper to convert Portable Text blocks to HTML
function portableTextToHtml(blocks) {
    if (!blocks || blocks.length === 0) return '';

    let html = '';

    blocks.forEach(block => {
        if (block._type === 'block') {
            const style = block.style || 'normal';
            let text = '';

            if (block.children) {
                block.children.forEach(child => {
                    let childText = child.text || '';

                    // Apply marks (bold, italic, etc.)
                    if (child.marks && child.marks.length > 0) {
                        child.marks.forEach(mark => {
                            if (mark === 'strong') {
                                childText = `<strong>${childText}</strong>`;
                            } else if (mark === 'em') {
                                childText = `<em>${childText}</em>`;
                            } else if (mark === 'code') {
                                childText = `<code>${childText}</code>`;
                            }
                        });
                    }
                    text += childText;
                });
            }

            // Map styles to HTML elements
            switch (style) {
                case 'h1':
                    html += `<h1>${text}</h1>`;
                    break;
                case 'h2':
                    html += `<h2 id="heading-${blocks.indexOf(block)}">${text}</h2>`;
                    break;
                case 'h3':
                    html += `<h3>${text}</h3>`;
                    break;
                case 'h4':
                    html += `<h4>${text}</h4>`;
                    break;
                case 'blockquote':
                    html += `<blockquote>${text}</blockquote>`;
                    break;
                default:
                    html += `<p>${text}</p>`;
            }
        } else if (block._type === 'image' && block.asset) {
            const imgUrl = urlFor(block).width(1200).url();
            html += `
                <div class="blog-article-image">
                    <img src="${imgUrl}" alt="Article image">
                </div>
            `;
        }
    });

    return html;
}

export async function initBlogDetailPage() {
    // Get slug from URL
    const path = window.location.pathname;
    const slug = path.split('/blog/')[1];
    const mainContainer = document.getElementById('blog-detail-main');

    if (!slug || !mainContainer) {
        console.error('No slug found in URL');
        return;
    }

    // Fetch post data
    const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        publishedAt,
        readTime,
        mainImage,
        authorName,
        authorRole,
        authorImage,
        body
    }`;

    try {
        const post = await client.fetch(query, { slug });

        if (post) {
            const heroImage = post.mainImage ? urlFor(post.mainImage).width(1600).url() : '';
            const authorImg = post.authorImage ? urlFor(post.authorImage).width(200).url() : 'https://i.pravatar.cc/150?img=1';
            const bodyHtml = portableTextToHtml(post.body);

            const formattedDate = post.publishedAt ?
                new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }) : '';

            mainContainer.innerHTML = `
                <!-- Hero Section -->
                <section class="blog-hero-section">
                    <!-- Left: Info & Title -->
                    <div class="blog-hero-left">
                        <div class="blog-hero-content">
                            <div class="blog-hero-meta-top">
                                ${SectionLabel(post.readTime || '5 min read')}
                            </div>
                            
                            <div class="blog-title-container">
                                <h1 class="blog-hero-title">${post.title}</h1>
                            </div>
                        </div>

                        <div class="blog-hero-author">
                            <div class="author-avatar-wrapper">
                                <img src="${authorImg}" alt="${post.authorName}" class="author-avatar">
                            </div>
                            <div class="author-info">
                                <span class="author-name">${post.authorName || 'Vibe Team'}</span>
                                <span class="author-role">${post.authorRole || 'Content Creator'}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Image -->
                    <div class="blog-hero-right">
                        <!-- Mobile Social Toast -->
                        <div class="blog-hero-social-toast">
                            <svg class="corner-smooth-top" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000ff" />
                            </svg>
                        </div>
                        
                        <!-- Inverted Corners -->
                        <svg class="blog-corner blog-corner-top" width="32" height="32" viewBox="0 0 20 20" fill="none">
                            <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                        </svg>
                        <svg class="blog-corner blog-corner-bottom" width="32" height="32" viewBox="0 0 20 20" fill="none">
                            <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                        </svg>
                        
                        <!-- Image Container -->
                        <div class="blog-hero-image-wrapper">
                            <img src="${heroImage}" alt="${post.title}" class="blog-hero-img">
                            <svg class="corner-smooth-bottom" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000" />
                            </svg>
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
                        <div class="rich-text-block">
                            ${bodyHtml || '<p>No content available.</p>'}
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
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.36 19.5A4.86 4.86 0 0 1 14.91 18l.71-.71a3.86 3.86 0 0 0 5.46-5.46l-4.24-4.24a3.86 3.86 0 0 0-5.45 0l-1.07 1.07-1.41-1.42 1.06-1.06a5.86 5.86 0 0 1 8.28 0l4.24 4.24a5.86 5.86 0 0 1 0 8.28 5.84 5.84 0 0 1-4.13 1.8z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            `;

            // Update page title
            document.title = `${post.title} | madebyvibe`;

            // Initialize TOC and reading progress
            initTocAndProgress();
            positionCornerSVGs();
            window.addEventListener('resize', positionCornerSVGs);
            setTimeout(positionCornerSVGs, 200);

        } else {
            mainContainer.innerHTML = `
                <div style="padding: 4rem 2rem; text-align: center;">
                    <h1>Article not found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                </div>
            `;
        }

    } catch (err) {
        console.error('Error fetching post:', err);
        mainContainer.innerHTML = `
            <div style="padding: 4rem 2rem; text-align: center;">
                <h1>Error loading article</h1>
                <p>Please try again later.</p>
            </div>
        `;
    }

    // Init Blog Slider
    initBlog();
}

function initTocAndProgress() {
    const article = document.querySelector('.blog-article-content');
    const tocList = document.getElementById('tocList');

    // Generate TOC
    if (article && tocList) {
        const headings = article.querySelectorAll('h2');
        tocList.innerHTML = '';

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = 'heading-' + index;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + heading.id;
            a.className = 'toc-link';
            a.textContent = heading.textContent;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(heading.id);
                if (target) {
                    const offset = 100;
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                }
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }

    // Reading Progress
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');
    let tocLinks = document.querySelectorAll('.toc-link');
    const sections = article ? article.querySelectorAll('h2') : [];

    function updateProgress() {
        if (!article) return;

        if (tocLinks.length === 0) {
            tocLinks = document.querySelectorAll('.toc-link');
        }

        const winHeight = window.innerHeight;
        const currentPos = window.scrollY;
        const articleRect = article.getBoundingClientRect();
        const articleTotalTop = currentPos + articleRect.top;
        const articleHeight = article.offsetHeight;

        const startPoint = articleTotalTop - 100;
        const endPoint = articleTotalTop + articleHeight - winHeight;

        let percent = 0;
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

        // Active TOC
        let currentId = '';
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
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateProgress);
    }, { passive: true });

    setTimeout(updateProgress, 100);
}

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

    const svgHeight = 32;
    const topOffset = titleRect.top - heroRightRect.top - svgHeight + 1;
    const bottomOffset = heroRightRect.bottom - titleRect.bottom - svgHeight + 1.5;
    const leftOffset = imageRect.left - heroRightRect.left;

    cornerTop.style.setProperty('top', topOffset + 'px', 'important');
    cornerTop.style.setProperty('bottom', 'auto', 'important');
    cornerBottom.style.setProperty('bottom', bottomOffset + 'px', 'important');
    cornerBottom.style.setProperty('top', 'auto', 'important');
    cornerTop.style.setProperty('left', leftOffset + 'px', 'important');
    cornerBottom.style.setProperty('left', leftOffset + 'px', 'important');
}
