// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном проекте здесь был бы код отправки на сервер
        formMessage.textContent = 'Сообщение отправлено! (это демо, данные никуда не отправляются)';
        formMessage.style.color = '#4CAF50';
        
        // Очистка формы через 3 секунды
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = '';
        }, 3000);
    });
}

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Наблюдаем за секциями
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Добавляем простой эффект для навыков
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const levelBar = this.querySelector('.level-bar');
        if(levelBar) {
            const width = levelBar.style.width;
            levelBar.style.transition = 'width 0.5s ease';
            levelBar.style.width = width;
        }
    });
});

// Изменение цвета навигации при скролле
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Таймер для имитации "в сети"
setInterval(() => {
    const indicator = document.querySelector('.status-indicator');
    if(indicator) {
        indicator.style.backgroundColor = indicator.style.backgroundColor === 'rgb(76, 175, 80)' ? '#ff9800' : '#4CAF50';
    }
}, 3000);