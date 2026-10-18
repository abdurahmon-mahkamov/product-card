/* ================== УРОВЕНЬ 1: Подписка ================== */
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('email');

if (subscribeForm && emailInput) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.checkValidity() || emailInput.value.trim() === '') {
      emailInput.reportValidity();
      return;
    }

    const data = { email: emailInput.value };
    console.log(data);

    subscribeForm.reset();
  });
}

/* ================== УРОВЕНЬ 2: Модалка ================== */
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const registerForm = document.getElementById('registerForm');

// Внешняя переменная user (глобальная, чтобы было видно в консоли)
window.user = null;

// Открытие модалки
if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
  });
}

// Закрытие модалки (крестик)
if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
  });
}

// Закрытие по клику на затемнённый фон
if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal-showed');
    }
  });
}

// Обработка регистрации
if (registerForm) {
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
    window.user = userData;

    // Выводим в консоль
    console.log(window.user);

    // Закрываем модалку и сбрасываем форму
    modal.classList.remove('modal-showed');
    registerForm.reset();
  });
}