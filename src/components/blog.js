import { Button } from './button.js';
import { SectionLabel } from './section-label.js';

export function Blog() {
    return `
    <section class="blog-section">
        <div class="blog-layout">
            <div class="blog-intro">
                ${SectionLabel('Blog', 'blog-label')}
                <h2 class="blog-heading">The latest from<br>our design studio</h2>
                <div class="blog-cta-wrapper" style="margin-bottom: 2rem;">
                    ${Button({ text: 'View the blog', variant: 'outline-dark', href: '/blog' })}
                </div>
                <div class="blog-nav">
                    <button class="blog-nav-btn prev btn-icon-only" id="blogPrev" aria-label="Previous" disabled>
                        <div class="btn-content">
                            <div class="btn-icon-group left">
                                <span class="btn-icon-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
                                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span class="btn-icon-secondary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
                                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </button>
                    <button class="blog-nav-btn next btn-icon-only" id="blogNext" aria-label="Next" disabled>
                        <div class="btn-content">
                            <div class="btn-icon-group right">
                                <span class="btn-icon-primary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span class="btn-icon-secondary">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            
            <div class="blog-slider-container">
                <div class="blog-slider" id="blogSlider">
                    <div style="padding: 2rem; color: var(--text-secondary);">Loading articles...</div>
                </div>
            </div>
        </div>
    </section>
    `;
}

import { client, urlFor } from '../lib/sanity.js';

export async function initBlog() {
    const slider = document.getElementById('blogSlider');
    const prevBtn = document.getElementById('blogPrev');
    const nextBtn = document.getElementById('blogNext');

    if (!slider) return;

    // Fetch Posts
    // Query for posts, newest first
    const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        readTime,
        publishedAt,
        mainImage,
        "excerpt": array::join(body[0..0].children[].text, " ") 
    }`;
    // Note: The excerpt is a crude extraction from the first block of portable text.

    try {
        const posts = await client.fetch(query);

        if (posts.length > 0) {
            const cardsHtml = posts.map(post => {
                const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).url() : '';
                const link = `/blog/${post.slug?.current}`;
                const excerptText = post.excerpt ? (post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt) : '';

                return `
                <a href="${link}" class="blog-card-link">
                    <div class="blog-card">
                        <div class="blog-card-image">
                            <img src="${imageUrl}" alt="${post.title}" class="blog-img" draggable="false">
                        </div>
                        <div class="blog-card-content">
                            <span class="blog-read-time">● ${post.readTime || '5 min read'}</span>
                            <h3 class="blog-card-title">${post.title}</h3>
                            <p class="blog-card-excerpt">${excerptText}</p>
                        </div>
                    </div>
                </a>
                `;
            }).join('');

            slider.innerHTML = cardsHtml;

            // Enable buttons
            if (posts.length > 0) {
                if (prevBtn) prevBtn.removeAttribute('disabled'); // Actually logic handles this later
                // Re-run button updaters inside the scroll listener logic
            }
        } else {
            slider.innerHTML = '<div style="padding: 2rem;">No posts found.</div>';
        }

    } catch (err) {
        console.error('Blog fetch error:', err);
        slider.innerHTML = '<div style="padding: 2rem;">Error loading posts.</div>';
    }


    const sliderContainer = slider.closest('.blog-slider-container');

    // Custom Cursor Logic
    let customCursor = document.querySelector('.blog-cursor');
    if (!customCursor) {
        customCursor = document.createElement('div');
        customCursor.className = 'blog-cursor';
        customCursor.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
                <path d="M6 16L2 12L6 8"></path>
            </svg>
        `;
        document.body.appendChild(customCursor);
    }

    const moveCustomCursor = (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    };

    // Track cursor position globally on the container
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            document.addEventListener('mousemove', moveCustomCursor);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
            sliderContainer.classList.remove('cursor-active');
            document.removeEventListener('mousemove', moveCustomCursor);
        });
    }

    // Only show cursor when hovering on actual blog cards, not gaps
    const blogCards = slider.querySelectorAll('.blog-card-link, .blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            customCursor.classList.add('active');
            if (sliderContainer) sliderContainer.classList.add('cursor-active');
        });
        card.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
            if (sliderContainer) sliderContainer.classList.remove('cursor-active');
        });
        // Hide cursor immediately on click before navigation
        card.addEventListener('click', () => {
            customCursor.classList.remove('active');
            if (sliderContainer) sliderContainer.classList.remove('cursor-active');
        });
    });

    let isDown = false;
    let startX;
    let scrollLeft;
    let bounce = 0;
    const maxBounce = 150;
    const scrollAmount = 700;

    const applyBounce = (px) => {
        const resistance = 0.5;
        const boundedPx = px * resistance;
        slider.style.transform = `translateX(${boundedPx}px)`;
    };

    const resetBounce = () => {
        slider.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        slider.style.transform = `translateX(0px)`;
        setTimeout(() => {
            slider.style.transition = '';
        }, 500);
        bounce = 0;
    };

    // Check Scroll State for Buttons
    const updateNavButtons = () => {
        if (!prevBtn || !nextBtn) return;

        // Disable prev if at start (with small tolerance)
        if (slider.scrollLeft <= 10) {
            prevBtn.setAttribute('disabled', '');
        } else {
            prevBtn.removeAttribute('disabled');
        }

        // Disable next if at end (with small tolerance)
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= maxScroll - 10) {
            nextBtn.setAttribute('disabled', '');
        } else {
            nextBtn.removeAttribute('disabled');
        }
    };

    // Calculate scroll amount dynamically based on card width + gap
    const getScrollAmount = () => {
        // Card width (520px) + gap (32px/2rem) = 552px
        return 520 + 32;
    };

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Prev clicked'); 
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Next clicked'); 
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

    // Listen for scroll to update buttons
    slider.addEventListener('scroll', updateNavButtons);
    // Initial check
    updateNavButtons();

    // Drag to scroll
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.transition = '';
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        if (bounce !== 0) resetBounce();
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        if (bounce !== 0) resetBounce();
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;

        const newScrollLeft = scrollLeft - walk;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (newScrollLeft < 0) {
            bounce = -newScrollLeft;
            if (bounce > maxBounce) bounce = maxBounce + (bounce - maxBounce) * 0.2;
            applyBounce(bounce);
            if (slider.scrollLeft !== 0) slider.scrollLeft = 0;
        } else if (newScrollLeft > maxScroll) {
            const overscroll = newScrollLeft - maxScroll;
            bounce = -overscroll;
            if (Math.abs(bounce) > maxBounce) bounce = -(maxBounce + (Math.abs(bounce) - maxBounce) * 0.2);
            applyBounce(bounce);
            if (slider.scrollLeft !== maxScroll) slider.scrollLeft = maxScroll;
        } else {
            slider.scrollLeft = newScrollLeft;
            if (bounce !== 0) {
                bounce = 0;
                slider.style.transform = `translateX(0px)`;
            }
        }
    });

    // Touch support
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.transition = '';
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        if (bounce !== 0) resetBounce();
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;

        const newScrollLeft = scrollLeft - walk;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (newScrollLeft < 0) {
            bounce = -newScrollLeft;
            if (bounce > maxBounce) bounce = maxBounce + (bounce - maxBounce) * 0.2;
            applyBounce(bounce);
            if (slider.scrollLeft !== 0) slider.scrollLeft = 0;
        } else if (newScrollLeft > maxScroll) {
            const overscroll = newScrollLeft - maxScroll;
            bounce = -overscroll;
            if (Math.abs(bounce) > maxBounce) bounce = -(maxBounce + (Math.abs(bounce) - maxBounce) * 0.2);
            applyBounce(bounce);
            if (slider.scrollLeft !== maxScroll) slider.scrollLeft = maxScroll;
        } else {
            slider.scrollLeft = newScrollLeft;
            if (bounce !== 0) {
                bounce = 0;
                slider.style.transform = `translateX(0px)`;
            }
        }
    });
}
