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

export async function initAboutPage() {
    initAboutHeroCarousel();
    await initTeamSection();
    await initTestimonialSlider();
    initFooter();

    // Initialize custom cursor for big marquee/footer text/team/testimonials
    import('../components/expertise.js').then(module => {
        if (module.initCustomCursor) module.initCustomCursor();
    }).catch(e => { });

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
