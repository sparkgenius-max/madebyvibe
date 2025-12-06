
export function WorkCard(work) {
    // Default categories if missing or not an array
    let categories = work.categories || ['Design'];
    if (typeof categories === 'string') {
        categories = [categories];
    } else if (work.category) {
        // Fallback for singular property from older data
        categories = [work.category];
    }

    // Determine height style - if passed directly, use it. 
    // The CSS enforces object-fit: cover, so consistent height depends on this style.
    const heightStyle = work.height ? `height: ${work.height};` : 'height: 500px;';

    const tagsHtml = categories.map(tag => `<span class="work-category-capsule">${tag}</span>`).join('');

    // MOVED .work-card-tag-breakout OUTSIDE of .work-card-image-wrapper
    return `
    <a href="/works/${work.client.toLowerCase().replace(/\s+/g, '-')}" class="work-card-new group">
        <div class="work-card-image-wrapper ${work.lightBg ? 'light-bg' : ''} ${work.darkBg ? 'dark-bg' : ''}" style="${heightStyle}">
             <img src="${work.image}" 
                  alt="${work.client}" 
                  class="work-card-img ${work.grayscale ? 'grayscale-img' : ''}">
        </div>

        <!-- Top Right Tag Breakout (Visible on Hover) -->
        <!-- Now a sibling of the image wrapper to avoid overflow clipping and radius issues -->
        <div class="work-card-tag-breakout">
             <svg class="corner-smooth-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" class="corner-svg-path" fill="#000000" />
             </svg>
             
             <div class="work-tags-container">
                ${tagsHtml}
             </div>

             <svg class="corner-smooth-bottom" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" class="corner-svg-path" fill="#000000" />
             </svg>
        </div>

        <div class="work-card-meta">
            <span>${work.year}</span>
            <span class="meta-dot"></span>
            <span>${work.client}</span>
        </div>
        <h3 class="work-card-title">${work.title}</h3>
    </a>
    `;
}

export function initWorkCards() {
    let cursor = document.getElementById('workCursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'workCursor';
        cursor.className = 'work-cursor';
        cursor.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        document.body.appendChild(cursor);
    }

    const workCards = document.querySelectorAll('.work-card-new');

    const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    workCards.forEach(card => {
        const imageWrapper = card.querySelector('.work-card-image-wrapper');

        if (imageWrapper) {
            imageWrapper.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });

            imageWrapper.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });

            imageWrapper.addEventListener('mousemove', moveCursor);
        }
    });
}
