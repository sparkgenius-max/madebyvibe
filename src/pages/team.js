import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { SectionLabel } from '../components/section-label.js';
import { Blog, initBlog } from '../components/blog.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { createTeamCard } from '../components/team-section.js';
import { client, urlFor } from '../lib/sanity.js';
import '../styles/team.css';

export function TeamPage() {
    return `
    ${Navbar()}
    
    <div class="team-page-container">
        <!-- Header Section -->
        <section class="team-page-header">
            <div class="team-header-content">
                ${SectionLabel('Our Team', 'team-label')}
                <h1 class="team-page-title">Meet the creative minds<br>behind the vibe.</h1>
            </div>
        </section>

        <!-- Team Grid -->
        <section class="team-grid-section">
            <div class="team-grid-container" id="teamGrid">
                <div style="padding: 2rem; text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">
                    Loading team members...
                </div>
            </div>
        </section>
    </div>

    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export async function initTeamPage() {
    const teamGrid = document.getElementById('teamGrid');

    if (teamGrid) {
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

                teamGrid.innerHTML = mappedMembers.map(createTeamCard).join('');
            } else {
                teamGrid.innerHTML = '<div style="padding: 2rem; text-align: center; grid-column: 1 / -1;">No team members found.</div>';
            }
        } catch (err) {
            console.error('Error fetching team:', err);
            teamGrid.innerHTML = '<div style="padding: 2rem; text-align: center; grid-column: 1 / -1;">Error loading team.</div>';
        }
    }

    initFooter();
    initBlog();

    // Initialize custom cursor for big marquee/footer text
    import('../components/expertise.js').then(module => {
        if (module.initCustomCursor) module.initCustomCursor();
    }).catch(e => { });
}
