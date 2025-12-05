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

export function initProjectSlider() {
    const slider = document.getElementById('projectSliderTrack');
    const mask = document.getElementById('sliderMask');
    const cursor = document.getElementById('dragCursor');

    if (!slider || !mask) return;

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

    slider.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.opacity = '1';
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
        }
    });

    slider.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.opacity = '0';
            cursor.style.transform = 'scale(0) translate(-50%, -50%)';
        }
        if (!isDown) {
            slider.classList.remove('active');
        }
    });

    slider.addEventListener('mousemove', moveCursor);

    // Reset drag when leaving the scroll area
    mask.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            if (bounce !== 0) resetBounce();
            if (cursor) {
                cursor.style.transform = 'scale(1) translate(-50%, -50%)';
                cursor.innerText = 'drag';
            }
        }
    });

    mask.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - mask.offsetLeft;
        scrollLeft = mask.scrollLeft;
        slider.style.transition = '';
        if (cursor) {
            cursor.style.transform = 'scale(1.2) translate(-50%, -50%)';
            cursor.innerText = 'grabbing';
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            if (bounce !== 0) resetBounce();
            if (cursor) {
                cursor.style.transform = 'scale(1) translate(-50%, -50%)';
                cursor.innerText = 'drag';
            }
        }
    });

    mask.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - mask.offsetLeft;
        const walk = (x - startX) * 2;

        const newScrollLeft = scrollLeft - walk;
        const maxScroll = mask.scrollWidth - mask.clientWidth;

        if (newScrollLeft < 0) {
            bounce = -newScrollLeft;
            if (bounce > maxBounce) bounce = maxBounce + (bounce - maxBounce) * 0.2;
            applyBounce(bounce);
            if (mask.scrollLeft !== 0) mask.scrollLeft = 0;
        } else if (newScrollLeft > maxScroll) {
            const overscroll = newScrollLeft - maxScroll;
            bounce = -overscroll;
            if (Math.abs(bounce) > maxBounce) bounce = -(maxBounce + (Math.abs(bounce) - maxBounce) * 0.2);
            applyBounce(bounce);
            if (mask.scrollLeft !== maxScroll) mask.scrollLeft = maxScroll;
        } else {
            mask.scrollLeft = newScrollLeft;
            if (bounce !== 0) {
                bounce = 0;
                slider.style.transform = `translateX(0px)`;
            }
        }
    });

    // Touch events
    mask.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - mask.offsetLeft;
        scrollLeft = mask.scrollLeft;
        slider.style.transition = '';
    });

    mask.addEventListener('touchend', () => {
        isDown = false;
        if (bounce !== 0) resetBounce();
    });

    mask.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - mask.offsetLeft;
        const walk = (x - startX) * 2;

        const newScrollLeft = scrollLeft - walk;
        const maxScroll = mask.scrollWidth - mask.clientWidth;

        if (newScrollLeft < 0) {
            bounce = -newScrollLeft;
            if (bounce > maxBounce) bounce = maxBounce + (bounce - maxBounce) * 0.2;
            applyBounce(bounce);
            if (mask.scrollLeft !== 0) mask.scrollLeft = 0;
        } else if (newScrollLeft > maxScroll) {
            const overscroll = newScrollLeft - maxScroll;
            bounce = -overscroll;
            if (Math.abs(bounce) > maxBounce) bounce = -(maxBounce + (Math.abs(bounce) - maxBounce) * 0.2);
            applyBounce(bounce);
            if (mask.scrollLeft !== maxScroll) mask.scrollLeft = maxScroll;
        } else {
            mask.scrollLeft = newScrollLeft;
            if (bounce !== 0) {
                bounce = 0;
                slider.style.transform = `translateX(0px)`;
            }
        }
    });
}
