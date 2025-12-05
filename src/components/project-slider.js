export function ProjectSlider() {
    const projects = [
        {
            id: 1,
            category: "UI/UX",
            categoryColor: "#FE8A8A", // Neon Yellow
            textColor: "#000",
            name: "Fintech Dashboard",
            subtitle: "explore",
            image: "/images/project-2.png", // Reusing existing
            bg: "#E5E5E5"
        },
        {
            id: 2,
            category: "Branding",
            categoryColor: "#FF4D00", // Orange
            textColor: "#fff",
            name: "Lumina Identity",
            subtitle: "explore",
            image: "/images/product-keycap.png", // Reusing the artisan keycap image as a placeholder for "branding" object
            bg: "#E5E5E5"
        },
        {
            id: 3,
            category: "Mobile",
            categoryColor: "#000000", // Black
            textColor: "#fff",
            name: "Health App",
            subtitle: "explore",
            image: "/images/project-3.png",
            bg: "#E5E5E5"
        },
        {
            id: 4,
            category: "Design",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Creator Studio",
            subtitle: "starting at $249",
            image: "/images/product-workboard.png", // Reusing workboard
            bg: "#E5E5E5"
        },
        {
            id: 5,
            category: "Concept",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Future Vision",
            subtitle: "explore",
            image: null,
            bg: "#E5E5E5"
        },
        {
            id: 6,
            category: "Keyboard",
            categoryColor: "#FF4D00",
            textColor: "#fff",
            name: "Nomad [E] v1",
            subtitle: "explore",
            image: "/images/project-1-detail.png", // Use available image
            bg: "#E5E5E5"
        },
        {
            id: 7,
            category: "Accessory",
            categoryColor: "#000000",
            textColor: "#fff",
            name: "Macro Pad X",
            subtitle: "explore",
            image: "/images/project-1.png", // Use available image
            bg: "#E5E5E5"
        },
        {
            id: 8,
            category: "Lifestyle",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Desk Mat Pro",
            subtitle: "starting at $29",
            image: "/images/project-2.png", // Use available image
            bg: "#E5E5E5"
        }
    ];

    const cards = projects.map(p => `
        <div class="slider-card" style="background-color: ${p.bg}">
            <div class="slider-image-container">
                 ${p.image ? `<img src="${p.image}" alt="${p.name}" class="slider-img" draggable="false">` : `<div style="width:100%; height:100%; background: linear-gradient(45deg, #ccc, #999);"></div>`}
            </div>
            <div class="slider-content">
                <span class="slider-tag" style="background-color: ${p.categoryColor}; color: ${p.textColor}">${p.category}</span>
                <h4 class="slider-title">${p.name}</h4>
                <a href="#" class="slider-link">${p.subtitle}</a>
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
            category: "UI/UX",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Fintech Dashboard",
            subtitle: "explore",
            image: "/images/project-2.png",
            bg: "#E5E5E5"
        },
        {
            id: 2,
            category: "Branding",
            categoryColor: "#FF4D00",
            textColor: "#fff",
            name: "Lumina Identity",
            subtitle: "explore",
            image: "/images/product-keycap.png",
            bg: "#E5E5E5"
        },
        {
            id: 3,
            category: "Mobile",
            categoryColor: "#000000",
            textColor: "#fff",
            name: "Health App",
            subtitle: "explore",
            image: "/images/project-3.png",
            bg: "#E5E5E5"
        },
        {
            id: 4,
            category: "Design",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Creator Studio",
            subtitle: "starting at $249",
            image: "/images/product-workboard.png",
            bg: "#E5E5E5"
        },
        {
            id: 5,
            category: "Concept",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Future Vision",
            subtitle: "explore",
            image: null,
            bg: "#E5E5E5"
        },
        {
            id: 6,
            category: "Keyboard",
            categoryColor: "#FF4D00",
            textColor: "#fff",
            name: "Nomad [E] v1",
            subtitle: "explore",
            image: "/images/project-1-detail.png",
            bg: "#E5E5E5"
        },
        {
            id: 7,
            category: "Accessory",
            categoryColor: "#000000",
            textColor: "#fff",
            name: "Macro Pad X",
            subtitle: "explore",
            image: "/images/project-1.png",
            bg: "#E5E5E5"
        },
        {
            id: 8,
            category: "Lifestyle",
            categoryColor: "#FE8A8A",
            textColor: "#000",
            name: "Desk Mat Pro",
            subtitle: "starting at $29",
            image: "/images/project-2.png",
            bg: "#E5E5E5"
        }
    ];

    const cards = projects.map(p => `
        <div class="slider-card" style="background-color: ${p.bg}">
            <div class="slider-image-container">
                 ${p.image ? `<img src="${p.image}" alt="${p.name}" class="slider-img" draggable="false">` : `<div style="width:100%; height:100%; background: linear-gradient(45deg, #ccc, #999);"></div>`}
            </div>
            <div class="slider-content">
                <span class="slider-tag" style="background-color: ${p.categoryColor}; color: ${p.textColor}">${p.category}</span>
                <h4 class="slider-title">${p.name}</h4>
                <a href="#" class="slider-link">${p.subtitle}</a>
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
