import { client } from '../lib/sanity.js';

export function ServicesDropdown() {
    return `
    <div class="dropdown-menu services-dropdown">
        <!-- Left Column: Services List -->
        <div class="dropdown-col-left">
            <div class="dropdown-list" id="services-dropdown-list">
                <!-- Loading or default content -->
                <div style="padding: 1rem; color: var(--text-secondary);">Loading...</div>
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

// Cache for navbar services to avoid redundant fetches
let cachedServicesNav = null;

export async function initServicesDropdown() {
    const listContainer = document.getElementById('services-dropdown-list');
    if (!listContainer) return;

    // Use cached data if available
    if (cachedServicesNav) {
        renderServicesList(listContainer, cachedServicesNav);
        return;
    }

    // Fetch top services (limit 6)
    const query = `*[_type == "service" && defined(slug.current)] | order(title asc)[0...6] {
        title,
        "slug": slug.current,
        shortDescription
    }`;

    try {
        const services = await client.fetch(query);

        if (services.length > 0) {
            cachedServicesNav = services; // Update cache
            renderServicesList(listContainer, services);
        } else {
            listContainer.innerHTML = '<div style="padding: 1rem;">No services found.</div>';
        }

    } catch (err) {
        console.error('Error fetching services nav:', err);
        // Fallback?
        listContainer.innerHTML = '<a href="/services" class="dropdown-item group">View All Services</a>';
    }
}

function renderServicesList(container, services) {
    const html = services.map(service => `
        <a href="/services/${service.slug}" class="dropdown-item group">
            <div class="dropdown-item-header">
                <h4 class="dropdown-item-title">${service.title}</h4>
                <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <p class="dropdown-item-desc">${service.shortDescription || 'Learn more'}</p>
        </a>
    `).join('');

    container.innerHTML = html;
}

export function AboutDropdown() {
    return `
    <div class="dropdown-menu about-dropdown">
        <!-- Left Column: About Links -->
        <div class="dropdown-col-left">
            <div class="dropdown-list">
                <a href="/about" class="dropdown-item group">
                    <div class="dropdown-item-header">
                        <h4 class="dropdown-item-title">Our Story</h4>
                         <svg class="dropdown-arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="dropdown-item-desc">Learn about our journey and mission</p>
                </a>
                
                <a href="/team" class="dropdown-item group">
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
                    <a href="/about" class="dropdown-cta-header group">
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
