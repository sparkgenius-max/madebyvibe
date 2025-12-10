import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Button } from '../components/button.js';
import { SectionLabel } from '../components/section-label.js';
import { AboutHeroHTML, initAboutHeroCarousel } from '../components/about-hero.js';
import { TeamSection, initTeamSection } from '../components/team-section.js';
import { TestimonialSlider, initTestimonialSlider } from '../components/testimonial-slider.js';
import { AboutStory } from '../components/about-story.js';
import { LargeImageCTA } from '../components/large-image-cta.js';

export function AboutPage() {
    return `
    ${Navbar()}
    
    <div class="about-page-container">
        <!-- 1. Hero Section -->
        ${AboutHeroHTML()}

        <!-- 2. The Story (Redesigned) -->
        ${AboutStory()}

        <!-- 3. Large Image CTA -->
        <div style="width: 100%; max-width: 1800px; margin: 0 auto; padding: 0 var(--layout-padding);">
            ${LargeImageCTA()}
        </div>

        <!-- 4. The Team (Horizontal Scroll / Creative Layout) -->
        ${TeamSection()}

        <!-- 5. Testimonial Section -->
        ${TestimonialSlider()}

        <!-- 6. CTA -->
        <section class="about-cta-section">
            <div class="about-cta-content">
                <h2 class="about-cta-title">Ready to find your vibe?</h2>
                <div class="about-cta-actions">
                    ${Button({ text: 'Start a Project', variant: 'primary', href: '/contact' })}
                    ${Button({ text: 'View Works', variant: 'outline-dark', href: '/works' })}
                </div>
            </div>
        </section>
    </div>

    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initAboutPage() {
    initAboutHeroCarousel();
    initTeamSection();
    initTestimonialSlider();
    initFooter();

    // Initialize custom cursor for big marquee/footer text
    import('../components/expertise.js').then(module => {
        if (module.initCustomCursor) module.initCustomCursor();
    }).catch(e => { });

    // Initialize custom cursor for team and testimonial cards
    initAboutCustomCursor();

    // Simple scroll reveals
    const revealElements = document.querySelectorAll('.story-text, .value-card, .team-member, .masonry-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}

function initAboutCustomCursor() {
    // Create or get the cursor element
    let cursor = document.getElementById('workCursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'workCursor';
        cursor.className = 'work-cursor';
        cursor.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        document.body.appendChild(cursor);
    }

    // Select team cards and testimonial cards
    const teamCards = document.querySelectorAll('.team-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const allCards = [...teamCards, ...testimonialCards];

    const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    allCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        card.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });

        card.addEventListener('mousemove', moveCursor);
    });
}
