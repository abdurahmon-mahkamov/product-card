/* ================== УРОВЕНЬ 1: Подписка ================== */
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('email');

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // отменяем стандартную отправку

    // Проверка валидности email
    if (!emailInput.checkValidity() || emailInput.value.trim() === '') {
        emailInput.reportValidity(); // показываем подсказку браузера
        return;
    }

    // Вывод объекта в консоль
    const data = { email: emailInput.value };
    console.log(data);

    subscribeForm.reset();
});


/* ================== УРОВЕНЬ 2: Модалка ================== */
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const registerForm = document.getElementById('registerForm');

// Внешняя переменная user
let user = null;

// Открытие модалки
openModalBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
});

// Закрытие модалки (крестик)
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
});

// Закрытие по клику на затемнённый фон
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal-showed');
    }
});

// Обработка регистрации
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('passwordRepeat').value;

    // Проверка валидности формы
    if (!registerForm.checkValidity()) {
        registerForm.reportValidity();
        return;
    }

    // Проверка совпадения паролей
    if (password !== passwordRepeat) {
        alert('Пароли не совпадают! Регистрация отклонена.');
        return;
    }

    // Собираем данные формы
    const formData = new FormData(registerForm);
    const userData = Object.fromEntries(formData.entries());

    // Добавляем время создания
    userData.createdOn = new Date();

    // Присваиваем во внешнюю переменную
    user = userData;

    // Выводим в консоль
    console.log(user);

    // Закрываем модалку и сбрасываем форму
    modal.classList.remove('modal-showed');
    registerForm.reset();
});