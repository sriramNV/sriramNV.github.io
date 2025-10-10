export function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');

    if (!menuToggle || !navbar) return;

    const toggleMenu = () => {
        const isOpen = navbar.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });

    // Close menu when the user presses the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navbar.classList.contains('is-open')) {
            toggleMenu();
        }
    });
}