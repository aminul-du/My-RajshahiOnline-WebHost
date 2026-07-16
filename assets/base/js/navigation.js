(function() {
    const toggler = document.getElementById('navToggler');
    const nav = document.getElementById('mainNav');
    if (!toggler || !nav) return;
    toggler.addEventListener('click', function(e) {
        e.stopPropagation();
        const menu = nav.querySelector('ul');
        menu.classList.toggle('open');
        toggler.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            const menu = nav.querySelector('ul');
            menu.classList.remove('open');
            toggler.setAttribute('aria-expanded', 'false');
        });
    });
    const dropdownTriggers = nav.querySelectorAll('li > a[aria-haspopup]');
    dropdownTriggers.forEach(function(trigger) {
        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('dropdown-menu')) {
                    const isVisible = submenu.style.display === 'block';
                    submenu.style.display = isVisible ? 'none' : 'block';
                    this.setAttribute('aria-expanded', !isVisible);
                }
            }
        });
    });
})();
