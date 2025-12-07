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
        <div style="padding: 0 var(--padding-viewport);">
            ${LargeImageCTA()}
        </div>

        <!-- 4. The Team (Horizontal Scroll / Creative Layout) -->
        ${TeamSection()}

        <!-- 5. Testimonial Section -->
        ${TestimonialSlider()}

        <!-- 6. Studio Gallery (Masonry) -->
        <section class="about-studio-section">
            <div class="studio-header">
                ${SectionLabel('The Space', 'studio-label')}
                <h2 class="studio-title">Where the magic happens.</h2>
            </div>
            <div class="studio-masonry">
                <div class="masonry-item large">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Studio 1" class="masonry-img">
                </div>
                <div class="masonry-item small">
                    <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80" alt="Studio 2" class="masonry-img">
                </div>
                <div class="masonry-item medium">
                    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80" alt="Studio 3" class="masonry-img">
                </div>
                <div class="masonry-item small">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Studio 4" class="masonry-img">
                </div>
            </div>
        </section>

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
    }).catch(e => {});

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
