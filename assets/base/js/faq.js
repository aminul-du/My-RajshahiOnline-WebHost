document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            document.querySelectorAll('.faq-answer').forEach(function(el) {
                el.classList.remove('open');
                el.style.maxHeight = '0';
            });
            document.querySelectorAll('.faq-question').forEach(function(el) {
                el.classList.remove('active');
            });
            if (!isOpen) {
                answer.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });
    const firstFaq = document.querySelector('.faq-question');
    if (firstFaq) {
        firstFaq.classList.add('active');
        const firstAnswer = firstFaq.nextElementSibling;
        if (firstAnswer) {
            firstAnswer.classList.add('open');
            firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        }
    }
});
