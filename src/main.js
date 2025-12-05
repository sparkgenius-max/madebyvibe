import './styles/main.css';
import { Home, initHome } from './pages/home.js';
import Lenis from '@studio-freight/lenis';

document.querySelector('#app').innerHTML = Home();
initHome();
initSmoothScroll();

function initSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

// Re-attach listeners because we just replaced the DOM
// Note: In a real framework, this would be handled by components mounting
function attachListeners() {
    // Add simple interaction for the nav items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked
            item.classList.add('active');
        });
    });

    // Parallax effect for the orb
    const orb = document.querySelector('.gradient-orb');
    const heroSection = document.querySelector('.hero-section');

    if (orb && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            orb.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        });
    }

    // Navbar Scroll Effect
    const nav = document.querySelector('.floating-nav');
    let lastScrollY = window.scrollY;

    if (nav) {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);

            // 1. Morph Logic (Glass -> Dark Pill)
            // Trigger earlier for smoother feel
            if (currentScrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // 2. Headroom Logic (Hide/Show)
            // Show longer on first scroll (threshold 600px)
            if (isScrollingDown && currentScrollY > 600) {
                // Hide when scrolling down past 600px
                nav.classList.add('nav-hidden');
            } else {
                // Show when scrolling up OR when near top
                nav.classList.remove('nav-hidden');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Check initial state
        handleScroll();
    }
}

attachListeners();
