// Задание 1 & 2: Импортируем массив продуктов
import { products } from './product.js';

// Задание 3: Функция-шаблон карточки (с сохранением оригинальной верстки)
const createCardTemplate = (product) => {
    const listItems = product.composition
        .map(item => `<li>${item}</li>`)
        .join('');

    return `
    <div class="card">
      <img class="card__img" src="${product.img}" alt="${product.title}">
      <div class="card__category">${product.category}</div>
      <h2 class="card__title">${product.title}</h2>
      <p class="card__desc">${product.desc}</p>
      <div class="card__composition-title">Состав:</div>
      <ul class="card__list">
        ${listItems}
      </ul>
      <div class="card__price-block">
        <span class="card__price-label">Цена</span>
        <span class="card__price-value">${product.price} &#8381;</span>
      </div>
    </div>
  `;
};

// Задание 4: Метод .reduce()
const productsMap = products.reduce((acc, product) => {
    acc[product.title] = product.desc;
    return acc;
}, {});

console.log("Объект [название: описание] через .reduce():", productsMap);


// Задание 5*: Логика запрашивания и рендеринга карточек

// Функция 1: Запрашивает и проверяет количество карточек
function getCardsCount() {
    const userInput = prompt("Сколько карточек отобразить? От 1 до 5");


    const count = Number(userInput);


    if (!isNaN(count) && count >= 1 && count <= 5 && Number.isInteger(count)) {
        return count;
    } else {
        alert("Ошибка! Пожалуйста, введите целое число от 1 до 5.");
        return null;
    }
}

// Функция 2: Отрисовывает полученное количество карточек
function renderCards(dataArray, count) {
    const container = document.querySelector('.cards__container');
    if (!container) return;


    container.innerHTML = '';


    const itemsToRender = dataArray.slice(0, count);


    const cardsHTML = itemsToRender.map(createCardTemplate).join('');
    container.innerHTML = cardsHTML;
}

// Запуск программы
const cardsCount = getCardsCount();

if (cardsCount !== null) {
    renderCards(products, cardsCount);
}
