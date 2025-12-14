import '../styles/large-image-cta.css';
import { Button } from './button.js';

export function LargeImageCTA({
    imageUrl = "https://res.cloudinary.com/dg2cqc3e9/video/upload/v1765123431/3249454-uhd_3840_2160_25fps_gurww6.mp4",
    buttonText = "See our work",
    buttonLink = "/works",
    isVideo = false
} = {}) {
    return `
    <div class="sd-hero-container">
        <!-- Top Left Breakout Button -->
        <div class="sd-image-breakout">
             <div class="sd-breakout-inner">
                ${Button({ text: buttonText, href: buttonLink, variant: 'primary', className: 'sd-btn' })}
             </div>
            
            <!-- Smooth Corners to blend with image -->
            <svg class="breakout-corner-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
            </svg>
            <svg class="breakout-corner-bottom" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 0v20H0C11.05 20 20 11.05 20 0z" fill="var(--bg-outer)" />
            </svg>
        </div>

        <div class="sd-hero-image-wrapper">
            ${isVideo
            ? `<video src="${imageUrl}" class="sd-hero-image" autoplay muted loop playsinline></video>`
            : `<img src="${imageUrl}" class="sd-hero-image" alt="Service Detail" style="object-fit: cover; width: 100%; height: 100%;" />`
        }
        </div>
    </div>
    `;
}
