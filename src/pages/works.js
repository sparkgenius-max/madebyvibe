import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';
import { WorksSection } from '../components/works-section.js';
import { initWorkCards } from '../components/work-card.js';

export function Works() {
    return `
    ${Navbar()}

    <div class="blog-filter-header">
        <div class="blog-header-top">
            ${SectionLabel('Selected Work')}
        </div>
        <div class="blog-filter-list">
            <a href="#" class="blog-filter-item active">all projects<span class="count">24</span></a>
            <a href="#" class="blog-filter-item">branding<span class="count">8</span></a>
            <a href="#" class="blog-filter-item">web design<span class="count">12</span></a>
            <a href="#" class="blog-filter-item">development<span class="count">10</span></a>
            <a href="#" class="blog-filter-item">strategy<span class="count">6</span></a>
        </div>
    </div>

    ${WorksSection()}

    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initWorks() {
    // Initialize custom cursor and hover effects
    initWorkCards();
}
