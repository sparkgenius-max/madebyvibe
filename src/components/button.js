export function Button({ text, href, variant = 'primary', className = '', icon = true, direction = 'up-right' }) {
    // If icon-only variant, we don't capitalize text as there is no text shown (or text is aria-label)
    // But let's process it anyway if text exists
    const processedText = text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : '';

    const Tag = href ? 'a' : 'button';
    const attr = href ? `href="${href}"` : '';

    let iconSvg = '';
    
    // Choose icon based on direction
    if (direction === 'left') {
        iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    } else if (direction === 'right') {
        iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    } else {
        // Default Up-Right
        iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon-svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }

    // Icon Only Variant Logic
    if (variant.includes('icon-only')) {
        return `
        <${Tag} ${attr} class="btn btn-${variant} ${className}" aria-label="${text}">
            <div class="btn-content">
                <div class="btn-icon-group ${direction}">
                    <span class="btn-icon-primary">${iconSvg}</span>
                    <span class="btn-icon-secondary">${iconSvg}</span>
                </div>
            </div>
        </${Tag}>
        `;
    }

    return `
    <${Tag} ${attr} class="btn btn-${variant} ${className}">
        <div class="btn-content">
            <div class="btn-text-group">
                <span class="btn-text-primary">${processedText}</span>
                <span class="btn-text-secondary">${processedText}</span>
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
