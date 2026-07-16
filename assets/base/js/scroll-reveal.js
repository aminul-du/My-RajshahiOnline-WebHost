document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('[data-animate]');
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(function(el) { revealObserver.observe(el); });
});
