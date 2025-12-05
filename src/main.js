import './styles/main.css';
import { Home, initHome } from './pages/home.js';

document.querySelector('#app').innerHTML = Home();
initHome();

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
}

attachListeners();
