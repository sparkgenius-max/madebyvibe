
import { Navbar } from '../components/navbar.js';
import { Footer } from '../components/footer.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { SectionLabel } from '../components/section-label.js';

export function WorkDetailPage() {
    // Dummy Data
    const work = {
        title: "Refreshing Gary\nNeville's digital presence",
        client: "Gary Neville",
        category: "Branding",
        year: "2023",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2250&q=80",
        description: "We were tasked to reimagine all aspects of the Gary Neville brand, from his personal brand identity through to carefully architectured site structure, design, and build. The website acts as an overview of all things Gary Neville, from business to broadcasting, to charity and public speaking."
    };

    return `
    ${Navbar()}
    <main class="work-detail-container">
        
        <!-- Hero Section -->
        <section class="work-hero">
            
            <!-- Hero Wrapper for relative positioning -->
            <div class="work-hero-wrapper">
                
                <!-- The Toast Breakout (Top Right) -->
                <div class="work-hero-toast">
                    <!-- 1. Left Curve: Rotated -90deg to smooth the vertical edge -->
                    <svg class="corner-smooth-left" width="40" height="40" viewBox="0 0 20 20" fill="none">
                         <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                    </svg>

                    <!-- Content -->
                    <div class="work-hero-content">
                        <div class="work-hero-meta">
                            <span class="work-meta-tag">${work.year}</span>
                            <span class="meta-dot"></span>
                            <span class="work-meta-tag">${work.client}</span>
                        </div>

                        <div class="work-categories">
                            <span class="category-pill">${work.category}</span>
                            <span class="category-pill">Website</span>
                            <span class="category-pill">SEO</span>
                        </div>
                        
                        <h1 class="work-hero-title">${work.title.replace(/\n/g, '<br>')}</h1>
                    </div>

                    <!-- 2. Bottom Curve: Rotated 0deg (or match flow) to smooth horizontal edge -->
                    <!-- Guide says for bottom of Top-Right breakout, use 0deg if it ends there. 
                         However, since this is a "Toast" that hangs, we want the curve to be on the bottom-left corner of the toast?
                         No, the toast is a rectangle. 
                         We want to smooth the Left Vertical -> Bottom Horizontal transition?
                         No, we want to smooth the connection to the image.
                         If the toast sits at Top-Right:
                         - Left side connects to Top Edge of Image.
                         - Bottom side connects to Right Edge of Image. 
                    -->
                    <svg class="corner-smooth-bottom" width="40" height="40" viewBox="0 0 20 20" fill="none">
                         <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
                    </svg>
                </div>

                <!-- Main Hero Image -->
                <div class="work-hero-image-wrapper">
                    <img src="${work.image}" alt="${work.title}" class="work-hero-img">
                </div>

            </div>

        </section>

        <!-- Project Info & Description -->
        <section class="work-info-section">
            <div class="work-info-grid">
                <div class="work-statement">
                    <h2 class="work-statement-text">A new personal brand identity, bespoke site and build</h2>
                    
                    <!-- Team Avatars (Dummy) -->
                    <div class="project-team">
                        <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=1');"></div>
                        <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=2');"></div>
                        <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=3');"></div>
                        <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=4');"></div>
                        <div class="team-avatar dummy-avatar" style="background-image: url('https://i.pravatar.cc/150?img=5');"></div>
                    </div>
                </div>

                <div class="work-details-col">
                    <p class="work-description">
                        ${work.description}
                    </p>

                    <div class="work-specs">
                        <div class="spec-item">
                            <span class="spec-label">Client</span>
                            <span class="spec-value">${work.client}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Industry</span>
                            <span class="spec-value">Personal Branding</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Duration</span>
                            <span class="spec-value">12 Weeks</span>
                        </div>
                    </div>

                    <a href="#" class="visit-site-btn">
                        Visit Website 
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    </main>
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initWorkDetailPage() {
    // any interactions
}
