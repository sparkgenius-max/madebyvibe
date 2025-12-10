import { Button } from './button.js';

export function AboutHeroHTML() {
    return `
    <div class="carousel-wrapper">
        <header class="carousel-header">
            <h1 class="carousel-title">
                Good design<br>
                makes life better.
            </h1>
        </header>

        <div class="carousel-main-container">
            <div id="carousel" class="carousel-container">
                <!-- Cards will be injected here via JS -->
            </div>
        </div>

        <div class="carousel-action-wrapper">
            ${Button({ text: 'Learn about us', variant: 'primary', href: '#about-story', icon: true })}
        </div>
    </div>
    `;
}

export function initAboutHeroCarousel() {
    const container = document.getElementById('carousel');
    if (!container) return;

    // Original Data
    const rawItems = [
        { id: 1, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', title: 'Collaboration' },
        { id: 2, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', title: 'Leadership' },
        { id: 3, img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80', title: 'Focus' },
        { id: 4, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', title: 'Innovation' },
        { id: 5, img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80', title: 'Teamwork' },
        { id: 6, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', title: 'Strategy' },
        { id: 7, img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80', title: 'Meeting' }
    ];

    // Doubling the items to ensure smooth infinite wrapping off-screen
    const items = [...rawItems, ...rawItems];

    // Configuration
    const RADIUS = 1400;
    const ITEM_ANGLE = 18;
    // Total arc covered by all items. Used for modulo wrapping.
    const TOTAL_ARC = items.length * ITEM_ANGLE;

    // State
    let currentAngle = 0;
    let isDragging = false;
    let startX = 0;
    let lastX = 0;
    let velocity = 0;
    let autoSpeed = 0.08; // Constant marquee speed

    // Cleanup helper
    function isMounted() {
        return document.body.contains(container);
    }

    function init() {
        // Clear previous content if any (though usually empty)
        container.innerHTML = '';

        items.forEach((item, index) => {
            // Replaced the card div with a custom element structure if needed, 
            // but user asked to "turn the carousel image to component".
            // Since this is raw JS manipulation, we can create a helper function to generate the card HTML.
            // But for now, let's keep the DOM element creation here for performance in the loop.

            const card = document.createElement('div');
            card.className = 'card';
            // card.style.backgroundImage = `url(${item.img})`; 
            // User asked "turn the carousel image to component". 
            // This implies using an IMG tag or a component structure instead of background image?
            // Or maybe a literal web component? 
            // Let's assume they mean inserting an <img> tag inside the card instead of background-image.

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.title;
            img.className = 'card-image-component';
            img.draggable = false;

            card.appendChild(img);
            container.appendChild(card);
        });

        requestAnimationFrame(update);
    }

    // Helper for positive modulo
    const mod = (n, m) => ((n % m) + m) % m;

    function update() {
        if (!isMounted()) return;

        // Physics & Marquee Logic
        if (!isDragging) {
            // Apply friction to user-imparted velocity
            velocity *= 0.95;

            // If velocity is low, revert to autoSpeed (marquee)
            // We blend them for smoothness
            if (Math.abs(velocity) < 0.01) {
                velocity = 0;
                currentAngle -= autoSpeed;
            } else {
                currentAngle += velocity;
            }
        }

        const cards = container.querySelectorAll('.card');

        cards.forEach((card, i) => {
            // Infinite Loop Logic:
            // 1. Calculate base position
            const baseAngle = i * ITEM_ANGLE;

            // 2. Add current rotation
            let rawAngle = baseAngle + currentAngle;

            // 3. Wrap angle within [-TOTAL_ARC/2, TOTAL_ARC/2]
            // This ensures that as an item disappears on left, it reappears on right
            let effectiveAngle = mod(rawAngle, TOTAL_ARC);
            if (effectiveAngle > TOTAL_ARC / 2) effectiveAngle -= TOTAL_ARC;

            const angleRad = effectiveAngle * (Math.PI / 180);

            // Calculate Visuals based on effectiveAngle
            const x = Math.sin(angleRad) * RADIUS;
            // Calculate Y drop (arc shape)
            const y = (RADIUS - (Math.cos(angleRad) * RADIUS)) + 50;

            const rotation = effectiveAngle;

            // Scale & Opacity
            const distFromCenter = Math.abs(effectiveAngle);
            const scale = Math.max(0.7, 1 - (distFromCenter / 150));
            const opacity = Math.max(0, 1 - (distFromCenter / 100)); // Fade out at edges

            // Z-Index
            const zIndex = 100 - Math.round(distFromCenter);

            // Optimization: Hide completely invisible items
            if (opacity < 0.05) {
                card.style.visibility = 'hidden';
            } else {
                card.style.visibility = 'visible';
                card.style.transform = `
                        translate3d(${x}px, ${y}px, 0) 
                        rotate(${rotation}deg) 
                        scale(${scale})
                    `;
                card.style.zIndex = zIndex;
                card.style.opacity = opacity;
            }
        });

        requestAnimationFrame(update);
    }

    // --- Interaction Handlers ---

    // Mouse Events
    const onMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX;
        lastX = e.clientX;
        container.style.cursor = 'grabbing';
        velocity = 0; // Stop auto-scroll momentarily
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        if (!isMounted()) {
            // Cleanup if component unmounted
            window.removeEventListener('mousemove', onMouseMove);
            return;
        }
        const deltaX = e.clientX - lastX;
        currentAngle += deltaX * 0.15; // Move immediate
        velocity = deltaX * 0.15; // Store momentum
        lastX = e.clientX;
    };

    const onMouseUp = () => {
        isDragging = false;
        if (isMounted()) container.style.cursor = 'grab';
        if (!isMounted()) window.removeEventListener('mouseup', onMouseUp);
    };

    // Touch Events
    const onTouchStart = (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        lastX = e.touches[0].clientX;
        velocity = 0;
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;
        if (!isMounted()) {
            window.removeEventListener('touchmove', onTouchMove);
            return;
        }
        const deltaX = e.touches[0].clientX - lastX;
        currentAngle += deltaX * 0.2;
        velocity = deltaX * 0.2;
        lastX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        isDragging = false;
        if (!isMounted()) window.removeEventListener('touchend', onTouchEnd);
    };

    // Attach listeners
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Initialize
    init();
}
