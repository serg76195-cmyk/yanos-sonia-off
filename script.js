// script.js

// Загружаем сохранённый режим при старте
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('sonyaMode');
    if (savedMode) {
        setMode(savedMode);
    }
});

// Функция установки режима
function setMode(color) {
    document.body.dataset.mode = color;
    localStorage.setItem('sonyaMode', color);
}

// Навешиваем обработчики на кнопки
document.querySelectorAll('.mode-btn').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        setMode(color);
    });
});
