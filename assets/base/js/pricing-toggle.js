// Pricing Toggle (Monthly/Annual)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.pricing-toggle .toggle-group button');
    if (!toggleBtns.length) return;
    const prices = document.querySelectorAll('.pricing-card .price');
    const notes = document.querySelectorAll('.price-note');

    const monthlyPrices = { starter: '2.99', business: '9.99', professional: '19.99', enterprise: '39.99' };
    const annualPrices = { starter: '2.49', business: '8.33', professional: '16.66', enterprise: '33.33' };

    let currentMode = 'monthly';

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMode = this.dataset.mode;

            prices.forEach((priceEl, index) => {
                const plan = ['starter', 'business', 'professional', 'enterprise'][index];
                const amount = currentMode === 'monthly' ? monthlyPrices[plan] : annualPrices[plan];
                priceEl.innerHTML = `$${amount} <span>/mo</span>`;
            });

            notes.forEach(note => {
                note.textContent = currentMode === 'monthly' ? 'Billed monthly' : 'Billed annually (save 15%)';
            });
        });
    });
});
