import '../styles/team.css';
import { SectionLabel } from './section-label.js';
import { client, urlFor } from '../lib/sanity.js';

export function createTeamCard(member) {
    const linkedinBtn = member.linkedin ? `
        <a href="${member.linkedin}" class="team-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
        </a>
    ` : `
        <button class="team-social-btn" aria-label="Social Link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    `;

    return `
        <div class="team-card">
            <div class="team-image-wrapper">
                <img src="${member.image}" alt="${member.name}" class="team-img">
            </div>
            
            <!-- Breakout Label (Bottom-Left) -->
            <div class="team-info-breakout">
                <!-- Top Curve -->
                <svg class="corner-smooth-top" width="32" height="32" viewBox="0 0 32 32" fill="none" style="transform: rotate(90deg);">
                     <path d="M32 0v32H0C17.68 32 32 17.68 32 0z" />
                </svg>

                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>

                <!-- Right Curve -->
                <svg class="corner-smooth-right" width="32" height="32" viewBox="0 0 32 32" fill="none" style="transform: rotate(90deg);">
                     <path d="M32 0v32H0C17.68 32 32 17.68 32 0z" />
                </svg>
            </div>

            ${linkedinBtn}
        </div>
    `;
}

export function TeamSection() {
    return `
    <section class="team-slider-section">
        <div class="team-header-wrapper">
            ${SectionLabel('Our Team', 'team-label')}
            <h2 class="team-title">Multiple personalities,<br>No egos.</h2>
        </div>
        
        <div class="team-slider-container" id="teamSlider">
            <div style="padding: 2rem; color: var(--text-secondary);">Loading team...</div>
        </div>
    </section>
    `;
}

export async function initTeamSection() {
    const slider = document.getElementById('teamSlider');
    if (!slider) return;

    // Fetch team members from Sanity
    const query = `*[_type == "team"] | order(_createdAt asc) {
        name,
        role,
        image,
        linkedin
    }`;

    try {
        const members = await client.fetch(query);

        if (members.length > 0) {
            const mappedMembers = members.map(member => ({
                name: member.name,
                role: member.role,
                image: member.image ? urlFor(member.image).width(800).url() : 'https://via.placeholder.com/400x500',
                linkedin: member.linkedin || null
            }));

            slider.innerHTML = mappedMembers.map(createTeamCard).join('');
        } else {
            slider.innerHTML = '<div style="padding: 2rem;">No team members found.</div>';
        }
    } catch (err) {
        console.error('Error fetching team:', err);
        slider.innerHTML = '<div style="padding: 2rem;">Error loading team.</div>';
    }

    // Drag functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}
