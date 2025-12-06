export function ServicesDropdown() {
    return `
    <div class="dropdown-menu services-dropdown">
        <!-- Left Column: Services List -->
        <div class="dropdown-col-left">
            <div class="dropdown-list">
                <a href="/services/brand-identity" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Brand Identity</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Crafting memorable brands</p>
                </a>
                
                <a href="/services/websites" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Websites</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">High-performance digital experiences</p>
                </a>

                <a href="/services/seo" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">SEO</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Get found by your audience</p>
                </a>

                <a href="/services/ui-ux-design" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">UI/UX Design</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">User-centric interface design</p>
                </a>

                <a href="/services/e-commerce" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">E-Commerce</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Scalable online stores</p>
                </a>

                <a href="/services/illustration" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Illustration</h4>
                        <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Custom visual storytelling</p>
                </a>
            </div>
        </div>
        
        <!-- Right Column: Call to Action -->
        <div class="dropdown-col-right">
            <div class="dropdown-cta-card">
                <div>
                    <a href="/services" class="dropdown-cta-header group">
                        <h4 class="dropdown-cta-title">View all Services</h4>
                        <svg class="dropdown-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <p class="dropdown-cta-desc">Explore our full range of capabilities.</p>
                </div>
                <div class="dropdown-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=300&fit=crop" alt="Services" class="dropdown-image" />
                </div>
            </div>
        </div>
    </div>
    `;
}

export function AboutDropdown() {
    return `
    <div class="dropdown-menu about-dropdown">
        <!-- Left Column: About Links -->
        <div class="dropdown-col-left">
            <div class="dropdown-list">
                <a href="#" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Our Story</h4>
                         <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Learn about our journey and mission</p>
                </a>
                
                <a href="#" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Team</h4>
                         <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Meet the minds behind Vibe</p>
                </a>

                <a href="#" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Careers</h4>
                         <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Join our growing team</p>
                </a>
            </div>
        </div>
        
        <!-- Right Column: Call to Action -->
        <div class="dropdown-col-right">
            <div class="dropdown-cta-card">
                 <div>
                    <a href="/culture" class="dropdown-cta-header group">
                        <h4 class="dropdown-cta-title">Culture</h4>
                        <svg class="dropdown-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <p class="dropdown-cta-desc">See what it's like to work with us.</p>
                </div>
                <div class="dropdown-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop" alt="Team Culture" class="dropdown-image" />
                </div>
            </div>
        </div>
    </div>
    `;
}
