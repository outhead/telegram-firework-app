// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Уведомляем Telegram, что мини-приложение готово к отображению
tg.ready();

// Устанавливаем тему мини-приложения согласно настройкам пользователя
document.body.style.backgroundColor = tg.themeParams.bg_color || '#1e1e2e';
document.body.style.color = tg.themeParams.text_color || 'white';

// Настройка кнопки
const button = document.getElementById('fireworkButton');
if (tg.themeParams.button_color) {
    button.style.backgroundColor = tg.themeParams.button_color;
}
if (tg.themeParams.button_text_color) {
    button.style.color = tg.themeParams.button_text_color;
}

// Настройка и инициализация канваса для фейерверка
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Класс для создания частиц фейерверка
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.alpha = 1;
        this.size = Math.random() * 3 + 1;
        this.friction = 0.95;
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
        this.velocity.y += 0.08; // гравитация
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
        this.draw();
    }
}

// Массив для хранения всех частиц
let particles = [];

// Функция создания фейерверка
function createFirework(x, y) {
    // Массив возможных цветов для частиц
    const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ffffff'];
    
    // Создаем несколько сотен частиц для эффекта фейерверка
    const particleCount = 200;
    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
    
    // Вибрация для тактильной обратной связи (работает на мобильных устройствах)
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

// Функция анимации
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(particle => particle.alpha > 0);
    particles.forEach(particle => particle.update());
}

// Запускаем анимацию
animate();

// Обработчик нажатия на кнопку
button.addEventListener('click', () => {
    // Запускаем фейерверк в случайном месте вверху экрана
    const x = Math.random() * canvas.width;
    const y = canvas.height * 0.3;
    createFirework(x, y);
    
    // Оповещаем Telegram о нажатии (опционально)
    tg.HapticFeedback.impactOccurred('medium');
});

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Дополнительно: запускаем фейерверк при касании экрана
canvas.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
    tg.HapticFeedback.impactOccurred('medium');
}); 