// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.theme-toggle .toggle-track');
    if (!toggle) return;
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        toggle.classList.add('active');
    }
    toggle.addEventListener('click', function() {
        const isDark = root.getAttribute('data-theme') === 'dark';
        if (isDark) {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            this.classList.remove('active');
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            this.classList.add('active');
        }
    });
});
