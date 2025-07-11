document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.createElement('a');
backToTopButton.classList.add('fixed',
 'bottom-5',
 'right-5',
 'bg-blue-500',
 'hover:bg-blue-700',
 'text-white',
 'font-bold',
 'py-2',
 'px-4',
 'rounded-full',
 'hidden');
backToTopButton.href = '#home';
backToTopButton.innerHTML = '&uarr;';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});