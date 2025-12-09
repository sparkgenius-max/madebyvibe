import './styles/main.css';
import './styles/about-carousel.css';
import './styles/work-gallery.css';
import './styles/more-work.css';
import { initHome } from './pages/home.js';
import { Home } from './pages/home.js';
import { Services } from './pages/services.js';
import { ServiceDetail } from './pages/service-detail.js';
import { Works, initWorks } from './pages/works.js';
import { WorkDetailPage, initWorkDetailPage } from './pages/work-detail.js';
import { BlogPage, initBlogPage } from './pages/blog.js';
import { BlogDetailPage, initBlogDetailPage } from './pages/blog-detail.js';
import { ContactPage, initContactPage } from './pages/contact.js';
import { AboutPage, initAboutPage } from './pages/about.js';
import { TeamPage, initTeamPage } from './pages/team.js';
import { initDropdownBlur } from './components/dropdown-interactions.js';
import { initBlog } from './components/blog.js';
import { initFooter } from './components/footer.js';

// Simple router logic
const app = document.getElementById('app');

function render() {
    const path = window.location.pathname;

    // Clear dropdown blur overlay state before re-rendering
    document.body.classList.remove('dropdown-active');

    if (path === '/services') {
        app.innerHTML = Services();
        initBlog();
        initFooter();
    } else if (path.startsWith('/services/')) {
        app.innerHTML = ServiceDetail();
        initBlog();
        initFooter();
    } else if (path === '/works') {
        app.innerHTML = Works();
        initWorks();
        initFooter();
    } else if (path.startsWith('/works/')) {
        app.innerHTML = WorkDetailPage();
        initWorkDetailPage();
        initFooter();
    } else if (path === '/blog') {
        app.innerHTML = BlogPage();
        initBlogPage();
    } else if (path.startsWith('/blog/')) {
        app.innerHTML = BlogDetailPage();
        initBlogDetailPage();
        initFooter();
    } else if (path === '/contact') {
        app.innerHTML = ContactPage();
        initContactPage();
    } else if (path === '/about') {
        app.innerHTML = AboutPage();
        initAboutPage();
    } else if (path === '/team') {
        app.innerHTML = TeamPage();
        initTeamPage();
    } else {
        app.innerHTML = Home();
        initHome();
    }

    // Initialize Theme Toggle, Scroll Navbar & Dropdown Blur (Global)
    initThemeToggle();
    initScrollNavbar();
    initDropdownBlur();
}

function setupNavigation() {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        const href = link?.getAttribute('href');
        if (href && href.startsWith('/')) {
            e.preventDefault();
            window.history.pushState({}, '', href);
            render();
            window.scrollTo(0, 0);
        }
    });

    window.addEventListener('popstate', render);
}

function initThemeToggle() {
    const html = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }

    // Helper function to toggle theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Desktop theme toggle
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        // Remove existing listeners to avoid duplicates (cloning approach)
        const newBtn = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);
        newBtn.addEventListener('click', toggleTheme);
    }
}

let scrollHandler = null;

function initScrollNavbar() {
    const navbar = document.querySelector('.floating-nav');
    if (!navbar) return;

    // Remove previous scroll listener if exists
    if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
    }

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDownDistance = 0;
    let ticking = false;

    const HIDE_THRESHOLD = 400; // Distance to scroll down before hiding navbar

    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;

        // Add scrolled class when scrolled down (glassmorphic pill effect)
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Track scroll direction and distance
        if (scrollDelta > 0) {
            // Scrolling down - accumulate distance
            scrollDownDistance += scrollDelta;

            // Only hide after scrolling down enough distance
            if (scrollDownDistance > HIDE_THRESHOLD && scrollTop > 100) {
                navbar.classList.add('nav-hidden');
            }
        } else {
            // Scrolling up - reset distance and show navbar
            scrollDownDistance = 0;
            navbar.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    // Set initial state
    updateNavbar();

    // Store reference and add listener
    scrollHandler = requestTick;
    window.addEventListener('scroll', scrollHandler, { passive: true });
}

// Init navigation once
setupNavigation();
// Initial render
render();
