// script.js

// Menü açma ve kapama
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Yavaş kaydırma etkisi
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Skill bar animasyonu
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.progress-line');
    skillBars.forEach(bar => {
        const value = bar.querySelector('span').getAttribute('data-skill');
        bar.style.width = value;
    });
});

// Text Animation
const textAnimations = document.querySelectorAll('.text-animation');
textAnimations.forEach(text => {
    // Eğer text elementinin içinde zaten <span> varsa, işlemi tekrar yapma
    if (text.querySelector('span')) return;

    const textContent = text.innerHTML;
    text.innerHTML = textContent.split(' ').map(word => `<span>${word}</span>`).join(' ');
});
