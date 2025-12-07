import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { Marquee } from '../components/marquee.js';
import { About, initAbout } from '../components/about.js';
import { WorksSection } from '../components/works-section.js';
import { initWorkCards } from '../components/work-card.js';
import { Expertise, initExpertise } from '../components/expertise.js';
import { Blog, initBlog } from '../components/blog.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { TechStack } from '../components/tech-stack.js';

export function Home() {
    return `
    <div class="viewport-wrapper">
        ${Navbar()}
        ${Hero()}
    </div>

    ${Marquee()}
    ${About()}
    ${WorksSection()}
    ${Marquee({
        items: [
            "Sleep is a rendering error 😴 — MadeByVibe © 2025",
            "404: Work-Life balance not found 🤖 — MadeByVibe © 2025",
            "We fix what your nephew did 🔧 — MadeByVibe © 2025"
        ]
    })}
    ${Expertise()}
    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
  `;
}

export function initHome() {
    // Initialize interactive components after DOM is ready
    initWorkCards();
    initAbout();
    initExpertise();
    initBlog();
    initFooter();
}
