import '../styles/about-story.css';
import { SectionLabel } from './section-label.js';

export function AboutStory() {
    return `
    <section class="about-story-section" id="about-story">
        <div class="story-container">
            <!-- Left Column -->
            <div class="story-header-col">
                ${SectionLabel('About us', 'story-label')}
                <h2 class="story-heading">
                    Expert web designers and web developers trained in the digital industry who offer a bespoke, professional and trustworthy service.
                </h2>
            </div>

            <!-- Right Column -->
            <div class="story-content-col">
                <p class="story-text">
                    We are an Award-Winning Branding and Web Design Agency based in Malang, ID specialising in Web Design, Web Development, eCommerce and Organic SEO.
                </p>
                <p class="story-text">
                    With over a decade of experience, Vibe is an energetic, fresh and vibrant team offering creative talent, industry knowledge and extremely high standards.
                </p>
                <p class="story-text">
                    We work with ambitious start-up businesses through to large global organisations so we can tailor our services to suit your needs. Our preferred content management system of choice is custom-built for performance.
                </p>
            </div>
        </div>
    </section>
    `;
}
