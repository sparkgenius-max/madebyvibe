import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { Marquee } from '../components/marquee.js';
import { About, initAbout } from '../components/about.js';
import { Work } from '../components/work.js';
import { initProjectSlider } from '../components/project-slider.js';
import { Expertise, initExpertise } from '../components/expertise.js';
import { Blog, initBlog } from '../components/blog.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';

export function Home() {
    return `
    <div class="viewport-wrapper">
        <main class="main-container">
            ${Navbar()}
            ${Hero()}
        </main>
        
        <!-- Breakout Notification -->
        <div class="breakout-toast">
            <svg class="corner-smooth-top" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v40h40C17.9 40 0 22.1 0 0z" fill="black" />
            </svg>

            <div class="toast-content">
                <p>Accepting new projects <br> for Q4 2025</p>
            </div>
            <button class="toast-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 22M2 12L22 12M4.929 4.929L19.071 19.071M19.071 4.929L4.929 19.071" stroke="black"
                        stroke-width="3" stroke-linecap="round" />
                </svg>
            </button>

            <svg class="corner-smooth-right" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v40h40C17.9 40 0 22.1 0 0z" fill="black" />
            </svg>
        </div>
    </div>

    ${Marquee()}
    ${About()}
    ${Work()}
    ${Marquee({
        items: [
            "Sleep is a rendering error — MadeByVibe © 2025",
            "404: Work-Life balance not found — MadeByVibe © 2025",
            "We fix what your nephew did —  MadeByVibe © 2025"
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
    initProjectSlider();
    initAbout();
    initExpertise();
    initBlog();
    initFooter();
}
