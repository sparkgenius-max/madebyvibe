import { Button } from './button.js';
import { ServicesDropdown, AboutDropdown } from './dropdown-nav.js';

export function Navbar() {
    return `
    <nav class="floating-nav">
        <div class="nav-content-wrapper">
            <a href="/" class="nav-logo">Vibe.</a>

            <div class="nav-links">
                <div class="nav-item-wrapper group">
                    <a href="/services" class="nav-item">Services</a>
                    ${ServicesDropdown()}
                </div>
                <a href="/works" class="nav-item">Work</a>
                <div class="nav-item-wrapper group">
                    <a href="/about" class="nav-item">About</a>
                    ${AboutDropdown()}
                </div>
                <a href="/blog" class="nav-item">Blog</a>
                <a href="/contact" class="nav-item">Contact</a>
            </div>

            <div class="nav-actions">
                <button class="theme-toggle">
                    <!-- Sun Icon (Visible in Dark Mode) -->
                    <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V5M12 19V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M3 12H5M19 12H21M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <!-- Moon Icon (Visible in Light Mode) -->
                    <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                ${Button({ text: 'Start a project', href: '/contact', variant: 'primary', className: 'desktop-cta' })}
                
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                    <div class="hamburger-line top"></div>
                    <div class="hamburger-line bottom"></div>
                    <!-- Close Icon (Visible when menu is open) -->
                    <svg class="close-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
            <div class="mobile-menu-content">
                <div class="mobile-nav-links">
                    <a href="/services" class="mobile-nav-item">Services</a>
                    <a href="/works" class="mobile-nav-item">Work</a>
                    <a href="/about" class="mobile-nav-item">About</a>
                    <a href="/team" class="mobile-nav-item">Team</a>
                    <a href="/blog" class="mobile-nav-item">Blog</a>
                    <a href="/contact" class="mobile-nav-item">Contact</a>
                </div>
                <div class="mobile-menu-footer">
                    ${Button({ text: 'Start a project', href: '/contact', variant: 'primary', className: 'mobile-cta-btn' })}
                </div>
            </div>
        </div>
    </nav>
  `;
}
