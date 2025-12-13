import { Button } from './button.js';
import { SectionLabel } from './section-label.js';
import { client, urlFor } from '../lib/sanity.js';

export function Expertise() {
    return `
    <section class="expertise-section">
        <div class="expertise-cursor" id="expertiseCursor">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="expertise-container">
            <div class="expertise-header">
                <div class="expertise-col-1">
                    ${SectionLabel('Our Expertise')}
                </div>
                <div class="expertise-col-2">
                    <h2 class="expertise-title">How we take your<br>business to the next level</h2>
                </div>
                <div class="expertise-col-3">
                    <div class="expertise-desc">
                        <p>We are a digital marketing agency with expertise,<br>and we're on a mission to help you take the next<br>step in your business.</p>
                        ${Button({ text: 'See all services', variant: 'outline-dark', href: '#' })}
                    </div>
                </div>
            </div>

            <div class="expertise-list" id="expertiseList">
                <div style="padding: 2rem; color: var(--text-secondary);">Loading services...</div>
            </div>
        </div>
    </section>
    `;
}

export async function initExpertise() {
    const listContainer = document.getElementById('expertiseList');

    // Only fetch if the list container exists (i.e. we are on a page with the Expertise section)
    if (listContainer) {
        const query = `*[_type == "service"] | order(_createdAt asc)`;

        try {
            const services = await client.fetch(query);

            if (services.length > 0) {
                const html = services.map(service => {
                    const imageUrl = service.image ? urlFor(service.image).width(600).url() : '';

                    return `
                    <div class="expertise-item">
                        <div class="expertise-item-content">
                            <div class="expertise-img-wrapper">
                                <img src="${imageUrl}" alt="${service.title}" class="expertise-img">
                            </div>
                            <h3 class="expertise-name">${service.title}</h3>
                        </div>
                    </div>
                    `;
                }).join('');

                listContainer.innerHTML = html;
            } else {
                listContainer.innerHTML = '<div style="padding: 2rem;">No services found.</div>';
            }
        } catch (err) {
            console.error('Error fetching services:', err);
            listContainer.innerHTML = '<div style="padding: 2rem;">Error loading services.</div>';
        }
    }

    // Initialize cursor (will handle BigFooterMarquee etc on other pages, and new items here)
    initCustomCursor();
}

let cursorGlobalListener = null;

export function initCustomCursor() {
    let cursor = document.getElementById('expertiseCursor');

    // Create cursor if it doesn't exist
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'expertise-cursor';
        cursor.id = 'expertiseCursor';
        cursor.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        document.body.appendChild(cursor);
    }

    // Setup global movement listener once
    if (!cursorGlobalListener) {
        cursorGlobalListener = (e) => {
            const c = document.getElementById('expertiseCursor');
            if (c) {
                c.style.left = `${e.clientX}px`;
                c.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener('mousemove', cursorGlobalListener);
    }

    // Define targets: Expertise items, Big Marquee, Footer Big Text
    // Note: Since initCustomCursor might be called after dynamic content load, we re-select
    const targets = [
        '.expertise-item-content',
        '.big-marquee-section',
        '.footer-big-text',
        '.team-card',
        '.testimonial-card'
    ];

    // Clean up any existing active state (fix for persisting cursor on navigation)
    if (cursor) cursor.classList.remove('active');

    targets.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // If element is already initialized, skip re-adding listeners
            // BUT we must ensure the class 'hide-cursor-target' is applied if we want CSS-only cursor hiding
            if (!el.classList.contains('hide-cursor-target')) {
                el.classList.add('hide-cursor-target');
            }

            if (el.dataset.cursorInitialized) return;
            el.dataset.cursorInitialized = 'true';

            el.addEventListener('mouseenter', () => {
                const c = document.getElementById('expertiseCursor');
                if (c) c.classList.add('active');
            });

            el.addEventListener('mouseleave', () => {
                const c = document.getElementById('expertiseCursor');
                if (c) c.classList.remove('active');
            });
        });
    });
}
