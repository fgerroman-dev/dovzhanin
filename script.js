// Автоматически подставляем имя домена
document.addEventListener('DOMContentLoaded', () => {
    const hostname = window.location.hostname || "твой-домен.рф";
    document.getElementById('domain-display').innerText = hostname;
});

// Функция для кнопки и смайлика
function celebrate() {
    const emoji = document.getElementById('emoji');
    
    // Добавляем эффект пульсации
    emoji.classList.add('pulse');
    
    // Убираем класс через полсекунды, чтобы можно было нажать снова
    setTimeout(() => {
        emoji.classList.remove('pulse');
    }, 500);

    alert("Статус владельца подтвержден! 😈");
}
