export function initDropdownBlur() {
    // Using CSS :has() for primary interaction now as it's more performant.
    // This JS is a fallback/support for browsers or complex states.

    const navItemWrappers = document.querySelectorAll('.nav-item-wrapper.group');
    const body = document.body;

    // Mobile Menu Logic
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.floating-nav');
    const html = document.documentElement;

    if (mobileToggle) {
        // Clone to remove old listeners if re-initializing
        const newToggle = mobileToggle.cloneNode(true);
        mobileToggle.parentNode.replaceChild(newToggle, mobileToggle);

        newToggle.addEventListener('click', () => {
            navbar.classList.toggle('mobile-menu-active');

            // Lock body scroll when menu is open (both html & body for iOS Safari)
            if (navbar.classList.contains('mobile-menu-active')) {
                html.style.overflow = 'hidden';
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.width = '100%';
                body.style.top = `-${window.scrollY}px`;
            } else {
                const scrollY = body.style.top;
                html.style.overflow = '';
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });

        // Close menu when clicking a mobile link
        const mobileLinks = document.querySelectorAll('.mobile-nav-item');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                const scrollY = body.style.top;
                navbar.classList.remove('mobile-menu-active');
                html.style.overflow = '';
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            });
        });
    }

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
