// Задание 3: Функция с городом и температурой
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Пример вызова функции (можешь поменять значения)
showWeather("Медина", 38);
showWeather("Москва", 22);

const SPEED_OF_LIGHT = 299792458; // Скорость света в метрах в секунду

// Задание 4: Сравнение скорости с скоростью света
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Досветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

// Примеры вызова функции
checkSpeed(300000000); // Сверхсветовая
checkSpeed(200000000); // Досветовая
checkSpeed(SPEED_OF_LIGHT); // Скорость света

// Задание 5: Функция попытки покупки товара
const productName = "Увлажняющий крем";
const productPrice = 2750; // Цена в рублях или любой другой валюте

function attemptPurchase(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - currentBudget;
    console.log(`Вам не хватает ${difference}$. Пополните баланс.`);
  }
}

// Примеры вызова функции
attemptPurchase(3000); // Покупка успешна
attemptPurchase(2000); // Не хватает денег

// Задание 6: Создать 1 функцию по своему усмотрению
function calculateTotalCost(itemPrice, quantity) {
  return itemPrice * quantity;
}

// Пример вызова функции
console.log("Общая стоимость 2 кремов по 1000: ", calculateTotalCost(1000, 2));


// Задание 7: Создать 3 переменные по своему усмотрению
const websiteVersion = "1.0.0";
let userLoggedIn = true;
const maxItemsInCart = 10;

console.log(`Версия сайта: ${websiteVersion}, Пользователь авторизован: ${userLoggedIn}, Максимум товаров в корзине: ${maxItemsInCart}`)