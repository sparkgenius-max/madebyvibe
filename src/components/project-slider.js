import { Button } from './button.js';

export function ProjectSlider() {
    const projects = [
        {
            id: 1,
            category: "Branding",
            categoryColor: "#E8FF00",
            textColor: "#000",
            name: "Restaurant Identity",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 2,
            category: "Web Design",
            categoryColor: "#0047FF",
            textColor: "#fff",
            name: "Portfolio Website",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 3,
            category: "Mobile App",
            categoryColor: "#FF6B00",
            textColor: "#000",
            name: "Travel Companion",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 4,
            category: "UI/UX",
            categoryColor: "#9B59B6",
            textColor: "#fff",
            name: "SaaS Dashboard",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 5,
            category: "Motion",
            categoryColor: "#E74C3C",
            textColor: "#fff",
            name: "Product Animation",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 6,
            category: "Print",
            categoryColor: "#27AE60",
            textColor: "#fff",
            name: "Magazine Layout",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 7,
            category: "Packaging",
            categoryColor: "#F39C12",
            textColor: "#000",
            name: "Product Packaging",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 8,
            category: "Illustration",
            categoryColor: "#E91E63",
            textColor: "#fff",
            name: "Brand Illustrations",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
            bg: "#E5E5E5"
        }
    ];

    const cards = projects.map(p => `
        <div class="slider-card" style="background-color: ${p.bg}">
            <div class="slider-image-section">
                 ${p.image ? `<img src="${p.image}" alt="${p.name}" class="slider-img" draggable="false">` : `<div style="width:100%; height:100%; background: linear-gradient(45deg, #ccc, #999);"></div>`}
            </div>
            <div class="slider-content" style="background-color: ${p.categoryColor}; color: ${p.textColor}">
                <div class="slider-content-top">
                    <span class="tag-pill ${p.textColor === '#fff' ? 'light-tag' : 'dark-tag'}">${p.category}</span>
                </div>
                <div class="slider-content-bottom">
                    <h4 class="slider-title">${p.name}</h4>
                    ${Button({ text: p.subtitle, href: '#', variant: 'outline-dark', className: 'slider-btn' })}
                </div>
            </div>
        </div>
    `).join('');

    return `
    <section class="slider-section">
        <div class="custom-drag-cursor" id="dragCursor">drag</div>
        <!-- Flex container for the layout: Text on Left, Slider on Right -->
        <div class="slider-layout">
            <div class="slider-intro">
                <h2 class="slider-heading">Explore our<br>other works</h2>
            </div>
            
            <div class="slider-mask" id="sliderMask">
                <div class="slider-track" id="projectSliderTrack">
                    ${cards}
                </div>
            </div>
        </div>
    </section>
    `;
}

// Exportable slider HTML for embedding in Work section
export function getSliderHTML() {
    const projects = [
        {
            id: 1,
            category: "Branding",
            categoryColor: "#E8FF00",
            textColor: "#000",
            name: "Restaurant Identity",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 2,
            category: "Web Design",
            categoryColor: "#0047FF",
            textColor: "#fff",
            name: "Portfolio Website",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 3,
            category: "Mobile App",
            categoryColor: "#FF6B00",
            textColor: "#000",
            name: "Travel Companion",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 4,
            category: "UI/UX",
            categoryColor: "#9B59B6",
            textColor: "#fff",
            name: "SaaS Dashboard",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 5,
            category: "Motion",
            categoryColor: "#E74C3C",
            textColor: "#fff",
            name: "Product Animation",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 6,
            category: "Print",
            categoryColor: "#27AE60",
            textColor: "#fff",
            name: "Magazine Layout",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 7,
            category: "Packaging",
            categoryColor: "#F39C12",
            textColor: "#000",
            name: "Product Packaging",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
            bg: "#E5E5E5"
        },
        {
            id: 8,
            category: "Illustration",
            categoryColor: "#E91E63",
            textColor: "#fff",
            name: "Brand Illustrations",
            subtitle: "explore",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
            bg: "#E5E5E5"
        }
    ];

    const cards = projects.map(p => `
        <div class="slider-card" style="background-color: ${p.bg}">
            <div class="slider-image-section">
                 ${p.image ? `<img src="${p.image}" alt="${p.name}" class="slider-img" draggable="false">` : `<div style="width:100%; height:100%; background: linear-gradient(45deg, #ccc, #999);"></div>`}
            </div>
            <div class="slider-content" style="background-color: ${p.categoryColor}; color: ${p.textColor}">
                <div class="slider-content-top">
                    <span class="tag-pill ${p.textColor === '#fff' ? 'light-tag' : 'dark-tag'}">${p.category}</span>
                </div>
                <div class="slider-content-bottom">
                    <h4 class="slider-title">${p.name}</h4>
                    ${Button({ text: p.subtitle, href: '#', variant: 'outline-dark', className: 'slider-btn' })}
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="slider-embed">
            <div class="custom-drag-cursor" id="dragCursor">drag</div>
            <div class="slider-layout">
                <div class="slider-intro">
                    <h2 class="slider-heading">Explore our<br>other works</h2>
                </div>
                
                <div class="slider-mask" id="sliderMask">
                    <div class="slider-track" id="projectSliderTrack">
                        ${cards}
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initProjectSlider() {
    const slider = document.getElementById('projectSliderTrack');
    const mask = document.getElementById('sliderMask');
    const cursor = document.getElementById('dragCursor');

    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let bounce = 0;
    const maxBounce = 150;

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

    // Custom Cursor Logic
    const moveCursor = (e) => {
        if (cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    };

    // --- Events on Slider Track (the scrolling element) ---

    // Mouse Down
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

        slider.style.scrollBehavior = 'auto'; // Instant scroll
        slider.style.transition = ''; // Clear bounce transition

        if (cursor) {
            cursor.style.transform = 'scale(1.2) translate(-50%, -50%)';
            cursor.innerText = 'grabbing';
        }
    });

    // Mouse Leave
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        if (bounce !== 0) resetBounce();

        if (cursor) {
            cursor.style.opacity = '0';
            cursor.style.transform = 'scale(0) translate(-50%, -50%)';
            cursor.innerText = 'drag';
        }
    });

    // Mouse Up
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        if (bounce !== 0) resetBounce();
        slider.style.scrollBehavior = 'smooth';

        if (cursor) {
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
            cursor.innerText = 'drag';
        }
    });

    // Mouse Move
    slider.addEventListener('mousemove', (e) => {
        moveCursor(e);

        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;

        const newScrollLeft = scrollLeft - walk;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        // Bounce Logic
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

    // Mouse Enter (show cursor)
    slider.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.opacity = '1';
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
        }
    });

    // Touch Events
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.transition = '';
        slider.style.scrollBehavior = 'auto';
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        if (bounce !== 0) resetBounce();
        slider.style.scrollBehavior = 'smooth';
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
