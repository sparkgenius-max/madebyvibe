export function initDropdownBlur() {
    // Using CSS :has() for primary interaction now as it's more performant.
    // This JS is a fallback/support for browsers or complex states.
    
    const navItemWrappers = document.querySelectorAll('.nav-item-wrapper.group');
    const body = document.body;

    if (navItemWrappers.length === 0) {
        // Retry once if DOM wasn't ready (though main.js calls this after render)
        setTimeout(initDropdownBlur, 500);
        return;
    }

    navItemWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', () => {
            body.classList.add('dropdown-active');
        });

        wrapper.addEventListener('mouseleave', () => {
            body.classList.remove('dropdown-active');
        });
    });
}
