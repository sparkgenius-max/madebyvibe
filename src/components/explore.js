import { SectionLabel } from './section-label.js';

export function Explore() {
    const projects = [
        {
            id: 1,
            category: "branding",
            categoryColor: "#E8FF00",
            name: "Lumina Brand",
            subtitle: "identity system",
            image: "/images/project-2.png",
            link: "/works"
        },
        {
            id: 2,
            category: "web design",
            categoryColor: "#FF6B35",
            name: "Artisan Studio",
            subtitle: "website redesign",
            image: "/images/project-3.png",
            link: "/works"
        },
        {
            id: 3,
            category: "UI/UX",
            categoryColor: "#00D4FF",
            name: "Fintech App",
            subtitle: "mobile experience",
            image: null,
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            link: "/works"
        },
        {
            id: 4,
            category: "branding",
            categoryColor: "#E8FF00",
            name: "Echo Systems",
            subtitle: "visual identity",
            image: null,
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            link: "/works"
        },
        {
            id: 5,
            category: "web design",
            categoryColor: "#FF6B35",
            name: "Zenith Portal",
            subtitle: "e-commerce platform",
            image: null,
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            link: "/works"
        },
        {
            id: 6,
            category: "UI/UX",
            categoryColor: "#00D4FF",
            name: "Health Sync",
            subtitle: "dashboard design",
            image: null,
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            link: "/works"
        },
        {
            id: 7,
            category: "branding",
            categoryColor: "#E8FF00",
            name: "Nova Creative",
            subtitle: "brand strategy",
            image: null,
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            link: "/works"
        },
        {
            id: 8,
            category: "web design",
            categoryColor: "#FF6B35",
            name: "Orbit Labs",
            subtitle: "startup website",
            image: null,
            gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            link: "/works"
        }
    ];

    const projectCards = projects.map(project => `
        <div class="explore-card" data-id="${project.id}">
            <div class="explore-card-image" style="${project.image ? '' : `background: ${project.gradient};`}">
                ${project.image ? `<img src="${project.image}" alt="${project.name}" class="explore-img">` : ''}
            </div>
            <div class="explore-card-content">
                <span class="explore-category" style="background: ${project.categoryColor}; color: ${project.categoryColor === '#E8FF00' ? '#000' : '#fff'};">${project.category}</span>
                <h4 class="explore-card-title">${project.name} <span class="explore-subtitle">${project.subtitle}</span></h4>
                <a href="${project.link}" class="explore-link">explore</a>
            </div>
        </div>
    `).join('');

    return `
    <section class="explore-section">
        <div class="explore-header">
            ${SectionLabel('Explore our')}
            <h2 class="explore-title">Best Projects</h2>
        </div>
        <div class="explore-slider-container">
            <div class="explore-slider" id="exploreSlider">
                ${projectCards}
            </div>
        </div>
    </section>
    `;
}

export function initExploreSlider() {
    const slider = document.getElementById('exploreSlider');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}
