(function() {
    const counters = document.querySelectorAll('[data-count]');
    let countersAnimated = false;
    function animateCounters() {
        if (countersAnimated) return;
        const scrollPos = window.scrollY + window.innerHeight * 0.8;
        counters.forEach(function(counter) {
            const rect = counter.getBoundingClientRect();
            const offset = rect.top + window.scrollY;
            if (scrollPos > offset) {
                const target = parseInt(counter.getAttribute('data-count'), 10);
                if (!isNaN(target) && target > 0) {
                    let current = 0;
                    const step = Math.ceil(target / 50);
                    const interval = setInterval(function() {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(interval);
                        }
                        counter.textContent = current;
                    }, 25);
                    countersAnimated = true;
                }
            }
        });
    }
    window.addEventListener('scroll', animateCounters);
    window.addEventListener('load', function() { setTimeout(animateCounters, 500); });
})();
