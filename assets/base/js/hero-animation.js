// Animated Hero Particles
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.enterprise-hero');
    if (!hero) return;
    const container = document.createElement('div');
    container.className = 'hero-particles';
    hero.appendChild(container);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(particle);
    }
});
