import { Button } from './button.js';

export function Footer() {
    return `
    <footer class="footer-section">
        <!-- Social Icons Breakout (Top Left) -->
        <div class="footer-social-breakout">
            <div class="footer-social">
                <svg class="corner-smooth-top" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000ff" />
                </svg>
                <svg class="corner-smooth-bottom" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0v32h32C14.3 32 0 17.7 0 0z" fill="#000000" />
                </svg>
                <a href="#" class="social-icon" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon" aria-label="X/Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon" aria-label="Dribbble">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon" aria-label="Behance">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM6.545 9.86c.56 0 1.01-.13 1.36-.403.345-.27.52-.72.52-1.35 0-.35-.06-.64-.19-.87-.13-.23-.3-.42-.52-.56-.218-.14-.47-.24-.75-.3-.28-.06-.57-.09-.88-.09H3.72v3.57h2.825zm.168 6.14c.336 0 .65-.03.95-.1.3-.07.56-.19.78-.36.22-.165.39-.39.51-.67.12-.28.18-.62.18-1.02 0-.81-.23-1.4-.69-1.77-.46-.37-1.08-.55-1.85-.55H3.72v4.47h2.993zM21.062 18.062c-.67.66-1.685 1.004-3.06 1.004-.99 0-1.8-.27-2.42-.79-.62-.52-1.01-1.2-1.16-2.04h7.84c.04-.24.07-.5.1-.78.03-.28.05-.55.05-.82 0-.87-.13-1.66-.4-2.38-.267-.72-.64-1.34-1.12-1.86-.48-.52-1.05-.92-1.71-1.21-.66-.29-1.39-.43-2.18-.43-.75 0-1.45.14-2.1.43-.65.29-1.21.69-1.68 1.21-.47.52-.84 1.14-1.11 1.86-.27.72-.41 1.51-.41 2.38s.14 1.67.41 2.39c.27.72.65 1.34 1.14 1.86.49.52 1.07.92 1.75 1.21.68.29 1.43.43 2.27.43 1.13 0 2.11-.26 2.93-.77.82-.51 1.44-1.31 1.85-2.38h-2.93c-.12.32-.36.57-.72.77-.36.2-.77.3-1.23.3-.84 0-1.48-.21-1.93-.63-.45-.42-.69-1.04-.73-1.86h7.26c-.02-.52-.07-1.02-.16-1.49zM15.5 10.5c.57 0 1.04.16 1.39.48.35.32.58.76.68 1.34h-4.5c.14-.52.44-.9.84-1.27.39-.37.92-.55 1.59-.55zM15 6.75h5.25v1.5H15z"/>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Back to Top Breakout (Top Right) -->
        <div class="footer-backtop-breakout">
            <svg class="corner-smooth-left" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0v32H0C17.7 32 32 17.7 32 0z" fill="#000000" />
            </svg>
            <a href="#" class="back-top-link" id="backToTop">
                Sh*t I've gone too far, send me back up <span class="finger-bounce">👆</span>
            </a>
            <svg class="corner-smooth-bottom-right" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0v32H0C17.7 32 32 17.7 32 0z" fill="#000000" />
            </svg>
        </div>

        <!-- Main Footer Container -->
        <div class="footer-container">
            <!-- Top Section -->
            <div class="footer-top">
                <!-- CTA Section -->
                <div class="footer-cta">
                    <h3 class="footer-cta-title">Do you like<br>what you see?</h3>
                    <div class="footer-cta-actions">
                        ${Button({ text: 'Start a project', href: '#', variant: 'primary' })}
                        <div class="footer-reviews">
                            <span class="review-icon">G</span>
                            <span class="review-stars">★★★★★</span>
                            <span class="review-text">5.0 from 89 reviews</span>
                        </div>
                    </div>
                </div>

                <!-- Footer Links -->
                <div class="footer-links-grid">
                    <div class="footer-links-column">
                        <h4 class="footer-links-title">Learn</h4>
                        <ul class="footer-links-list">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Culture</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Processes</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Branding FAQs</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-column">
                        <h4 class="footer-links-title">Explore</h4>
                        <ul class="footer-links-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Work <span class="new-badge">NEW</span></a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Sectors</a></li>
                            <li><a href="#">Hex Test</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-links-column contact-column">
                        <h4 class="footer-links-title">Get in touch</h4>
                        <ul class="footer-contact-list">
                            <li>
                                <span class="contact-icon">📞</span>
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li>
                                <span class="contact-icon">✉️</span>
                                <span>hello@vibecreative.id</span>
                            </li>
                            <li>
                                <span class="contact-icon">📍</span>
                                <span>Vibe Creative<br>Malang, East Java<br>Indonesia</span>
                            </li>
                            <li>
                                <span class="contact-icon">🗺️</span>
                                <span>///topped.little.pirate</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Big Text SVG -->
            <div class="footer-big-text">
                <svg id="footerBigSvg" viewBox="0 0 1400 130" preserveAspectRatio="xMidYMid meet" class="footer-big-svg">
                    <text id="footerBigText" x="0" y="105" fill="#FFFFFF" font-family="'Inter', 'Helvetica Neue', sans-serif" font-size="110" font-weight="500">Let's work together.</text>
                </svg>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <div class="footer-bottom-left">
                    <span class="footer-brand">Vibe.</span>
                    <span class="footer-copyright">© Vibe Creative 2025</span>
                    <span class="footer-divider">|</span>
                    <span class="footer-reg">Malang, Indonesia</span>
                </div>
                <div class="footer-bottom-right">
                    <a href="#">Web Design Malang</a>
                    <span class="footer-divider">|</span>
                    <a href="#">All Rights Reserved</a>
                    <span class="footer-divider">|</span>
                    <a href="#">Privacy Policy (you really care?)</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}

export function initFooter() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Adjust Footer Big Text to perfectly fit width
    const svg = document.getElementById('footerBigSvg');
    const text = document.getElementById('footerBigText');

    if (svg && text) {
        const adjustText = () => {
            const bbox = text.getBBox();
            // Set viewBox to exactly match the text width (plus small buffer if needed, but strict is requested)
            // We keep y and height constant (0 0 width 130)
            svg.setAttribute('viewBox', `${bbox.x} 0 ${bbox.width} 130`);
        };

        // Run immediately and after fonts load
        adjustText();
        document.fonts.ready.then(adjustText);
        window.addEventListener('resize', adjustText); // In case of fluid font resizing (though here it's fixed SVG)
    }
}
