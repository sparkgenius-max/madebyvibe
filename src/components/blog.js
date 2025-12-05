import { Button } from './button.js';

export function Blog() {
    const posts = [
        {
            id: 1,
            readTime: "2 min read",
            title: "Why did Rise at Seven choose MadeByShape?",
            excerpt: "It always has a feel good factor when another agency instructs us to totally rebrand their business, create a new digital environment and ...",
            image: "/images/project-1.png"
        },
        {
            id: 2,
            readTime: "6 min read",
            title: "Our Culture, Our Value & Our Studio",
            excerpt: "In our own words, how important culture, values and studio environment is to us as a web design agency at MadeByShape",
            image: "/images/project-2.png"
        },
        {
            id: 3,
            readTime: "10 min read",
            title: "Why having a design agency matters",
            excerpt: "Co-Founder insights on why we haven't turned to AI and still believe in human creativity...",
            image: "/images/project-3.png"
        },
        {
            id: 4,
            readTime: "5 min read",
            title: "The Future of Web Design in 2025",
            excerpt: "Exploring the trends and technologies that will shape the digital landscape in the coming year...",
            image: "/images/project-1-detail.png"
        },
        {
            id: 5,
            readTime: "8 min read",
            title: "Building Brand Identity From Scratch",
            excerpt: "A deep dive into our process of creating memorable brands that resonate with audiences...",
            image: "/images/project-2.png"
        }
    ];

    const cards = posts.map(post => `
        <div class="blog-card">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" class="blog-img" draggable="false">
            </div>
            <div class="blog-card-content">
                <span class="blog-read-time">● ${post.readTime}</span>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
            </div>
        </div>
    `).join('');

    return `
    <section class="blog-section">
        <div class="blog-layout">
            <div class="blog-intro">
                <span class="blog-label">● Blog</span>
                <h2 class="blog-heading">The latest from<br>our design studio</h2>
                <div class="blog-cta-wrapper" style="margin-bottom: 2rem;">
                    ${Button({ text: 'View the blog', variant: 'outline-dark', href: '#' })}
                </div>
                <div class="blog-nav">
                    <button class="blog-nav-btn prev" id="blogPrev">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="blog-nav-btn next" id="blogNext">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="blog-slider-container">
                <div class="blog-slider" id="blogSlider">
                    ${cards}
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initBlog() {
    const slider = document.getElementById('blogSlider');
    const prevBtn = document.getElementById('blogPrev');
    const nextBtn = document.getElementById('blogNext');

    if (!slider) return;

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

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

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
