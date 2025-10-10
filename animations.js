export function initAnimations() {
    const sectionsToAnimate = document.querySelectorAll('main section:not(.hero)');

    if (!sectionsToAnimate.length) return;

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15
    });

    sectionsToAnimate.forEach(section => {
        section.classList.add('section-anim');
        animationObserver.observe(section);
    });
}