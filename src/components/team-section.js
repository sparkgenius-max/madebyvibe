import '../styles/team.css';
import { SectionLabel } from './section-label.js';

export function TeamSection() {
    const members = [
        {
            name: "Joe",
            role: "Web Developer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            social: "#"
        },
        {
            name: "Chris",
            role: "Accounts & Finance",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
            social: "#"
        },
        {
            name: "Ruby",
            role: "Design Intern",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
            social: "#"
        },
        {
            name: "Dipper",
            role: "Chief Barker",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
            social: "#"
        },
        {
            name: "Alex",
            role: "Founder",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
            social: "#"
        },
        {
            name: "Sarah",
            role: "Lead Designer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
            social: "#"
        }
    ];

    const cards = members.map(member => `
        <div class="team-card">
            <div class="team-image-wrapper">
                <img src="${member.image}" alt="${member.name}" class="team-img">
            </div>
            
            <!-- Breakout Label (Bottom-Left) -->
            <div class="team-info-breakout">
                <!-- Top Curve (Rotated 90deg clockwise) 32px -->
                <svg class="corner-smooth-top" width="32" height="32" viewBox="0 0 32 32" fill="none" style="transform: rotate(90deg);">
                     <path d="M32 0v32H0C17.68 32 32 17.68 32 0z" />
                </svg>

                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>

                <!-- Right Curve (Rotated 90deg clockwise) 32px -->
                <svg class="corner-smooth-right" width="32" height="32" viewBox="0 0 32 32" fill="none" style="transform: rotate(90deg);">
                     <path d="M32 0v32H0C17.68 32 32 17.68 32 0z" />
                </svg>
            </div>

            <button class="team-social-btn" aria-label="Social Link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `).join('');

    return `
    <section class="team-slider-section">
        <div class="team-header-wrapper">
            ${SectionLabel('Our Team', 'team-label')}
            <h2 class="team-title">Multiple personalities,<br>No egos.</h2>
        </div>
        
        <div class="team-slider-container" id="teamSlider">
            ${cards}
        </div>
    </section>
    `;
}

export function initTeamSection() {
    const slider = document.getElementById('teamSlider');
    if (!slider) return;

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
        const walk = (x - startX) * 2; // Scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}
