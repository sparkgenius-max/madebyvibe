import '../styles/testimonial.css';
import { SectionLabel } from './section-label.js';
import { client } from '../lib/sanity.js';

export function TestimonialSlider() {
    return `
    <section class="testimonial-section">
        <div class="testimonial-layout">
            <div class="testimonial-intro">
                ${SectionLabel('Testimonials', 'testimonial-label')}
                <h2 class="testimonial-heading">What our clients say about us.</h2>
                
                <div class="testimonial-nav">
                    <button class="testimonial-nav-btn prev" id="testimonialPrev" aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
                        </svg>
                    </button>
                    <button class="testimonial-nav-btn next" id="testimonialNext" aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="testimonial-slider-container">
                <div class="testimonial-slider" id="testimonialSlider">
                    <div style="padding: 2rem; color: var(--text-secondary); white-space: nowrap;">Loading testimonials...</div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export async function initTestimonialSlider() {
    const slider = document.getElementById('testimonialSlider');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');

    if (!slider) return;

    // Fetch testimonials
    const query = `*[_type == "testimonial"] | order(_createdAt desc)`;

    try {
        const testimonials = await client.fetch(query);

        if (testimonials.length > 0) {
            const starsSvg = `
                <svg class="star-icon" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
            `;

            const cards = testimonials.map(t => `
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        ${starsSvg}${starsSvg}${starsSvg}${starsSvg}${starsSvg}
                    </div>
                    <p class="testimonial-text">${t.text}</p>
                    <div class="testimonial-user">
                        <div class="testimonial-avatar-initial">${t.initial || t.name.charAt(0)}</div>
                        <div class="testimonial-user-info">
                            <h4 class="testimonial-name">${t.name}</h4>
                            <span class="testimonial-company">${t.company || ''}</span>
                        </div>
                    </div>
                </div>
            `).join('');

            slider.innerHTML = cards;

            // Re-run scroll logic to enable/disable buttons based on new content width
            updateNavButtons();
        } else {
            slider.innerHTML = '<div style="padding: 2rem; white-space: nowrap;">No testimonials found.</div>';
        }
    } catch (err) {
        console.error('Error fetching testimonials:', err);
        slider.innerHTML = '<div style="padding: 2rem; white-space: nowrap;">Error loading testimonials.</div>';
    }

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

    // Check Scroll State for Buttons
    function updateNavButtons() {
        if (!prevBtn || !nextBtn) return;

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
        return 520 + 32; // Card width (520px) + gap (2rem)
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

    slider.addEventListener('scroll', updateNavButtons);
    // Initial check (in case fetch fails or takes time, but called again after fetch)
    updateNavButtons();

    // Drag functionality
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

    // Touch Support
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
