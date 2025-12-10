
import { WorkCard } from './work-card.js';
import { SectionLabel } from './section-label.js';

export function MoreWork() {
    // Dummy Data for More Works
    const otherWorks = [
        {
            title: "Rebranding a Tech Giant",
            client: "TechCorp",
            categories: ["Branding", "Strategy"],
            year: "2024",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            category: "Branding" // Fallback
        },
        {
            title: "Digital Experience for Fashion",
            client: "Vogueish",
            categories: ["Web Design", "Development"],
            year: "2023",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            category: "Web"
        },
        {
            title: "Sustainable Packaging Design",
            client: "EcoGoods",
            categories: ["Packaging", "Identity"],
            year: "2023",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            category: "Packaging"
        },
        {
            title: "Future of Mobility",
            client: "AutoMotion",
            categories: ["Concept", "3D"],
            year: "2024",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            category: "Concept"
        }
    ];

    // Force fixed height for consistency in slider
    const cardsHtml = otherWorks.map(work => {
        work.height = "513px"; // 684x513 ratio
        return WorkCard(work);
    }).join('');

    return `
    <section class="more-work-section">
        <div class="more-work-container">
            
            <!-- Row 1: Heading -->
            <div class="more-work-header">
                ${SectionLabel('More Work')}
                <h2 class="more-work-heading">Selected Work</h2>
            </div>

            <!-- Row 2: Carousel -->
            <div class="more-work-slider-wrapper">
                <div class="more-work-slider" id="moreWorkSlider">
                    ${cardsHtml}
                </div>
            </div>

            <!-- Row 3: Navigation -->
            <div class="more-work-nav">
                <button class="blog-nav-btn prev btn-icon-only" id="moreWorkPrev" aria-label="Previous">
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
                <div class="nav-divider"></div>
                <button class="blog-nav-btn next btn-icon-only" id="moreWorkNext" aria-label="Next">
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
    </section>
    `;
}

export function initMoreWork() {
    const slider = document.getElementById('moreWorkSlider');
    const prevBtn = document.getElementById('moreWorkPrev');
    const nextBtn = document.getElementById('moreWorkNext');

    const sliderWrapper = document.querySelector('.more-work-slider-wrapper');
    if (!slider || !sliderWrapper) return;

    // Custom Cursor Logic
    let customCursor = document.querySelector('.more-work-cursor');
    if (!customCursor) {
        customCursor = document.createElement('div');
        customCursor.className = 'more-work-cursor';
        // Arrow SVG
        customCursor.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H17M7 12L11 8M7 12L11 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 12L13 8M17 12L13 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        // Simplify bidirectional arrow
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

    // Track cursor position globally on the wrapper
    sliderWrapper.addEventListener('mouseenter', () => {
        document.addEventListener('mousemove', moveCustomCursor);
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
        sliderWrapper.classList.remove('cursor-active');
        document.removeEventListener('mousemove', moveCustomCursor);
    });

    // Only show cursor when hovering on actual work cards, not gaps
    const workCards = slider.querySelectorAll('.work-card-new');
    workCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            customCursor.classList.add('active');
            sliderWrapper.classList.add('cursor-active');
        });
        card.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
            sliderWrapper.classList.remove('cursor-active');
        });
    });

    let isDown = false;
    let startX;
    let scrollLeft;
    let bounce = 0;
    const maxBounce = 150;

    const applyBounce = (px) => {
        const resistance = 0.5;
        slider.style.transform = `translateX(${px * resistance}px)`;
    };

    const resetBounce = () => {
        slider.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        slider.style.transform = `translateX(0px)`;
        setTimeout(() => {
            slider.style.transition = '';
        }, 500);
        bounce = 0;
    };

    const updateNavButtons = () => {
        if (!prevBtn || !nextBtn) return;

        // Small tolerance of 10px
        if (slider.scrollLeft <= 10) {
            prevBtn.setAttribute('disabled', '');
        } else {
            prevBtn.removeAttribute('disabled');
        }

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= maxScroll - 10) {
            nextBtn.setAttribute('disabled', '');
        } else {
            nextBtn.removeAttribute('disabled');
        }
    };

    const getScrollAmount = () => {
        const card = slider.querySelector('.work-card-new');
        return card ? card.offsetWidth + 32 : 450;
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

    slider.addEventListener('scroll', updateNavButtons);
    updateNavButtons();

    // Drag Logic
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

    // Prevent click if dragged
    let hasDragged = false;

    // Capture click events on the slider container
    slider.addEventListener('click', (e) => {
        if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
            // Reset for next interaction
            hasDragged = false;
        } else {
            // Valid click - hide cursor immediately before navigation
            if (customCursor) {
                customCursor.classList.remove('active');
                sliderWrapper.classList.remove('cursor-active');
            }
        }
    }, true); // Use capture to intercept before children

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.2;

        // Threshold to consider it a drag
        if (Math.abs(walk) > 5) {
            hasDragged = true;
        }

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

    // Touch Support
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        hasDragged = false; // Reset
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.transition = '';
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        if (bounce !== 0) resetBounce();
        // Timeout to allow click event to fire if it wasn't a drag
        setTimeout(() => { hasDragged = false; }, 50);
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.2;

        if (Math.abs(walk) > 5) {
            hasDragged = true;
        }

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
