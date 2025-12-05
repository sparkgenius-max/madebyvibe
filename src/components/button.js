export function Button({ text, href, variant = 'primary', className = '', icon = true }) {
    const Tag = href ? 'a' : 'button';
    const attr = href ? `href="${href}"` : '';

    // Default Arrow Icon (Up-Right)
    const iconSvg = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    return `
    <${Tag} ${attr} class="btn btn-${variant} ${className}">
        <div class="btn-content">
            <div class="btn-text-group">
                <span class="btn-text-primary">${text}</span>
                <span class="btn-text-secondary">${text}</span>
            </div>
            ${icon ? `
            <div class="btn-icon-group">
                <span class="btn-icon-primary">${iconSvg}</span>
                <span class="btn-icon-secondary">${iconSvg}</span>
            </div>
            ` : ''}
        </div>
    </${Tag}>
    `;
}
