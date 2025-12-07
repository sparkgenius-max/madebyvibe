
import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { Button } from '../components/button.js';

export function ContactPage() {
    return `
    ${Navbar()}
    
    <!-- Hero Section -->
    <div class="contact-hero">
        <div class="contact-hero-content">
            <div class="contact-label">
                <span class="dot">●</span> Contact
            </div>
            <h1 class="contact-heading">
                It's nice to<br>meet ya
                <span class="contact-heading-icon">
                    👋
                </span>
            </h1>
        </div>
        <div class="contact-hero-visual">
            <div class="contact-hero-image-card">
                 <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop" alt="Vibe Team" class="contact-team-img">
                 <div class="contact-video-overlay-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                 </div>
            </div>
        </div>
    </div>

    <!-- Form Section -->
    <section class="contact-form-section">
        <div class="contact-layout">
            <!-- Left Column: Info & Alt Actions -->
            <div class="contact-info-col">
                <p class="contact-desc">
                    For general enquiries, please fill out the form to get in touch. Alternatively, if you know your project details — head over to our project planner for a more refined step-by-step process.
                </p>
                
                <div class="contact-actions">
                    ${Button({ text: 'Go to Project Planner', href: '#', variant: 'primary', icon: true })}
                </div>

                <div class="contact-alt">
                    <span class="alt-label">Hate contact forms?</span>
                    <a href="mailto:hello@vibecreative.id" class="alt-email">hello@vibecreative.id</a>
                </div>
            </div>

            <!-- Right Column: Form -->
            <div class="contact-form-col">
                <form class="vibe-form" onsubmit="event.preventDefault();">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" placeholder="Name" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email Address" class="form-input" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <input type="tel" placeholder="Phone (Optional)" class="form-input">
                        </div>
                        <div class="form-group">
                            <div class="select-wrapper">
                                <select class="form-select">
                                    <option value="" disabled selected>How did you hear about Vibe?</option>
                                    <option value="google">Google Search</option>
                                    <option value="social">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group full-width">
                        <textarea placeholder="Tell us about your project" class="form-textarea" rows="5" required></textarea>
                    </div>

                    <div class="form-checkbox-group">
                        <label class="checkbox-container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                            <span class="checkbox-text">Subscribe to our newsletter for all the latest Vibe goss!</span>
                        </label>
                    </div>

                    <div class="form-submit-wrapper">
                        <span class="form-disclaimer">By submitting this form I accept the Privacy Policy of this site.</span>
${Button({ text: 'Send Message', variant: 'dark', icon: true, className: 'form-submit-btn' })}
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Studio Section -->
    <section class="studio-section">
        <div class="studio-card">
            <div class="studio-info">
                <h2 class="studio-title">Our Malang Studio</h2>
                <p class="studio-desc">
                    Just a short drive from the city center, our Studio is in a creative hub, surrounded by coffee shops, art spaces, and the vibrant energy of East Java.
                </p>
                
                <div class="studio-details-grid">
                    <div class="studio-detail-col">
                        <h4 class="studio-detail-label">Studio Address</h4>
                        <address class="studio-address">
                            Vibe Creative<br>
                            Jl. Soekarno Hatta No. 45<br>
                            Malang, East Java<br>
                            Indonesia 65141
                        </address>
                    </div>
                    <div class="studio-detail-col">
                        <h4 class="studio-detail-label">Follow us</h4>
                        <div class="studio-socials">
                            <a href="#" class="studio-social-icon">IG</a>
                            <a href="#" class="studio-social-icon">Li</a>
                            <a href="#" class="studio-social-icon">Be</a>
                            <a href="#" class="studio-social-icon">Dr</a>
                        </div>
                    </div>
                </div>

                <div class="studio-action">
                    ${Button({ text: 'Get directions', href: '#', variant: 'primary', icon: true })}
                </div>
            </div>
            <div class="studio-image-wrapper">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Vibe Studio" class="studio-img">
                 <div class="neon-sign-overlay">
                     <span>good vibes only</span>
                 </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="faq-layout">
            <div class="faq-header">
                <div class="faq-label">
                    <span class="dot">●</span> Anything else?
                </div>
                <h2 class="faq-heading">The answers to<br>your questions.</h2>
                <div class="faq-action">
                    ${Button({ text: 'View all FAQs', href: '#', variant: 'primary', icon: true })}
                </div>
            </div>
            
            <div class="faq-list">
                <div class="faq-item">
                    <div class="faq-question">
                        <span>How long does a website project usually take to complete?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>Typically, a standard website project takes between 4-8 weeks from start to launch. This timeline can vary depending on the scope of work, complexity of features, and how quickly we receive content and feedback.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <span>How much does a website cost?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>Our website packages start from $5,000 for a custom-designed brochure site. E-commerce and more complex web applications generally start from $10,000. We provide detailed quotes after understanding your specific requirements.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <span>We have a limited budget, will you still work with us?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>We try to accommodate various budgets where possible. If a full custom build isn't feasible, we may suggest a more streamlined approach or a phased development plan to get you started.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <span>Do you outsource any work?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>No, we are a fully in-house team of designers and developers based in Malang. We believe close collaboration yields the best results, so we don't white-label or outsource our core services.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <span>What services do you offer?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>We are a full-service digital agency specializing in Web Design, Web Development (headless & traditional), Branding, UI/UX Strategy, and SEO. We also offer ongoing maintenance and support packages.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">
                        <span>We're not based in Malang, does that matter?</span>
                        <div class="faq-toggle">
                            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq-answer">
                        <p>Not at all! We work with clients globally. We have refined our remote workflow using tools like Slack, Figma, and Zoom to ensure seamless communication and collaboration regardless of timezone.</p>
                    </div>
                </div>
            </div>
    </section>

    ${Footer()}
    `;
}

export function initContactPage() {
    initFooter();
    
    // Initialize custom cursor for big marquee/footer text
    import('../components/expertise.js').then(module => {
        if (module.initCustomCursor) module.initCustomCursor();
    }).catch(e => {});

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items (optional - accordion style)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });
}
