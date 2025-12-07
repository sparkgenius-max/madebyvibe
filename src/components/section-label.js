export function SectionLabel(text, className = '') {
    return `
    <div class="section-label ${className}">
        <span class="dot">●</span>
        ${text}
    </div>
    `;
}
