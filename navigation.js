export function initNavObserver() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('main section');

    if (!navLinks.length || !sections.length) return;

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });
}