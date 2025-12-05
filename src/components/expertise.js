import { Button } from './button.js';

export function Expertise() {
    return `
    <section class="expertise-section">
        <div class="expertise-cursor" id="expertiseCursor">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="expertise-container">
            <div class="expertise-header">
                <div class="expertise-col-1">
                    <span class="expertise-label">● Our Expertise</span>
                </div>
                <div class="expertise-col-2">
                    <h2 class="expertise-title">How we take your<br>business to the next level</h2>
                </div>
                <div class="expertise-col-3">
                    <div class="expertise-desc">
                        <p>We are a digital marketing agency with expertise,<br>and we're on a mission to help you take the next<br>step in your business.</p>
                        ${Button({ text: 'See all services', variant: 'outline-dark', href: '#' })}
                    </div>
                </div>
            </div>

            <div class="expertise-list" id="expertiseList">
                <div class="expertise-item">
                    <div class="expertise-item-content">
                        <div class="expertise-img-wrapper">
                            <img src="/images/project-1-detail.png" alt="Brand Identity" class="expertise-img">
                        </div>
                        <h3 class="expertise-name">Brand Identity</h3>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-item-content">
                        <div class="expertise-img-wrapper">
                            <img src="/images/project-2.png" alt="Websites" class="expertise-img">
                        </div>
                        <h3 class="expertise-name">Websites</h3>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-item-content">
                        <div class="expertise-img-wrapper">
                            <img src="/images/project-3.png" alt="SEO" class="expertise-img">
                        </div>
                        <h3 class="expertise-name">SEO</h3>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-item-content">
                         <div class="expertise-img-wrapper">
                            <img src="/images/project-1.png" alt="UI/UX Design" class="expertise-img">
                        </div>
                        <h3 class="expertise-name">UI/UX Design</h3>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-item-content">
                         <div class="expertise-img-wrapper">
                            <img src="/images/project-2.png" alt="E-Commerce" class="expertise-img">
                        </div>
                        <h3 class="expertise-name">E-Commerce</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initExpertise() {
    const list = document.getElementById('expertiseList');
    const cursor = document.getElementById('expertiseCursor');

    if (!list || !cursor) return;

    const contentItems = list.querySelectorAll('.expertise-item-content');

    const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    contentItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });

        item.addEventListener('mousemove', moveCursor);
    });
}
