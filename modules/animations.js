export function initAnimations() {
    // Animate sections
    const sections = document.querySelectorAll('.section-anim');
    // Animate individual project cards
    const cards = document.querySelectorAll('.card-anim');

    if (!sections.length && !cards.length) return;

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation a bit before it's fully in view
    });

    sections.forEach(section => {
        animationObserver.observe(section);
    });

    cards.forEach(card => {
        animationObserver.observe(card);
    });
}