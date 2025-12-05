export function Marquee({ items } = {}) {
    const defaultItems = [
        "Brand Strategy ✦",
        "Visual Identity ◈",
        "Web Design ✧",
        "Digital Experience ◇",
        "Creative Direction ✦",
        "UI/UX Design ◈"
    ];

    const contentItems = items || defaultItems;

    const renderContent = () => contentItems.map(item => `
        <span>${item}</span>
        <span class="separator">—</span>
    `).join('');

    // If custom items are few/long, we might need to duplicate more often to fill width, 
    // but the CSS usually handles the loop if the content is wide enough.
    // For these long sentences, 3 items might be wide enough.

    return `
    <section class="marquee-section">
        <div class="marquee-track">
            <div class="marquee-content">
                ${renderContent()}
            </div>
            <div class="marquee-content" aria-hidden="true">
                ${renderContent()}
            </div>
            <div class="marquee-content" aria-hidden="true">
                ${renderContent()}
            </div>
        </div>
    </section>
  `;
}
