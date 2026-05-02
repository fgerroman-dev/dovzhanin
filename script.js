const timeMessage = document.getElementById("time-message");
const year = document.getElementById("year");
const button = document.getElementById("welcome-btn");

const hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
  timeMessage.textContent = "Доброе утро! Добро пожаловать на мой сайт.";
} else if (hour >= 12 && hour < 18) {
  timeMessage.textContent = "Добрый день! Рад видеть вас на моём сайте.";
} else if (hour >= 18 && hour < 23) {
  timeMessage.textContent = "Добрый вечер! Спасибо, что посетили мой сайт.";
} else {
  timeMessage.textContent = "Доброй ночи! Спасибо за визит.";
}

year.textContent = new Date().getFullYear();

button.addEventListener("click", function () {
  alert("Здравствуйте! Вас приветствует Роман Довжанин.");
});