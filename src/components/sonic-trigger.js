export function SonicTrigger() {
    return `
    <div class="sonic-trigger-container">
        <!-- Main Circular Button -->
        <button class="sonic-btn" aria-label="Toggle Sound">
            <div class="sonic-waves">
                <div class="wave wave-1"></div>
                <div class="wave wave-2"></div>
                <div class="wave wave-3"></div>
            </div>
            <div class="sonic-core">
                <span class="sonic-text">SOUND ON</span>
            </div>
        </button>
        
        <!-- Interactive Visualizer Ring (Decorative) -->
        <svg class="sonic-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 4" opacity="0.3" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2" />
        </svg>
    </div>
    `;
}
