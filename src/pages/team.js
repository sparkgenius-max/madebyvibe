import { Navbar } from '../components/navbar.js';
import { Footer, initFooter } from '../components/footer.js';
import { SectionLabel } from '../components/section-label.js';
import { Blog, initBlog } from '../components/blog.js';
import { BigFooterMarquee } from '../components/big-marquee.js';
import { teamMembers, createTeamCard } from '../components/team-section.js';
import '../styles/team.css';

export function TeamPage() {
    const cards = teamMembers.map(createTeamCard).join('');

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
            <div class="team-grid-container">
                ${cards}
            </div>
        </section>
    </div>

    ${Blog()}
    ${BigFooterMarquee()}
    ${Footer()}
    `;
}

export function initTeamPage() {
    initFooter();
    initBlog();
    
    // Initialize custom cursor for big marquee/footer text
    import('../components/expertise.js').then(module => {
        if (module.initCustomCursor) module.initCustomCursor();
    }).catch(e => {});
}
