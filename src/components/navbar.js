export function Navbar() {
    return `
    <nav class="floating-nav">
        <a href="#" class="nav-logo">Vibe.</a>

        <div class="nav-pill">
            <div class="nav-links">
                <a href="#" class="nav-item active">Home</a>
                <a href="#" class="nav-item">Work</a>
                <a href="#" class="nav-item">Studio</a>
                <a href="#" class="nav-item">Contact</a>
            </div>
        </div>

        <button class="icon-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </nav>
  `;
}
