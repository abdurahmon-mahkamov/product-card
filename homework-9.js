// homework-9.js
// Импорт константы socialMediaComments из comments.js (Задание 6)
import { socialMediaComments } from './comments.js';

// ===========================================
// Уровень 1: Работа с базовыми методами массивов
// ===========================================

// Задание 2: Массив чисел и его фильтрация
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers); // Результат: [5, 6, 7, 8, 9, 10]

console.log("Задание 2 - Исходный массив:", numbers);
console.log("Задание 2 - Отфильтрованный массив (начинается с 5):", filteredNumbers);

// Задание 3: Массив строк и проверка наличия сущности
const products = ["Увлажняющий мусс", "Увлажняющая маска", "Гель для умывания", "Подарочный набор №1"];
const searchItem = "Гель для умывания";
const isItemFound = products.includes(searchItem);

console.log("Задание 3 - Массив продуктов:", products);
console.log(`Задание 3 - Сущность "${searchItem}" найдена в массиве:`, isItemFound); // ИСПРАВЛЕНО: добавлены обратные кавычки

// Задание 4: Функция для "переворачивания" массива
function reverseArray(arr) {
  const reversedArr = [...arr].reverse(); // Делаем копию, чтобы не менять исходный массив
  return reversedArr;
}

const reversedNumbers = reverseArray(numbers);
const reversedProducts = reverseArray(products);

console.log("Задание 4 - Исходный массив чисел:", numbers);
console.log("Задание 4 - Перевернутый массив чисел:", reversedNumbers);
console.log("Задание 4 - Исходный массив продуктов:", products);
console.log("Задание 4 - Перевернутый массив продуктов:", reversedProducts);

// ===========================================
// Уровень 2: Работа с внешними данными и import/export
// ===========================================

// Задание 7: Вывести в консоль массив комментариев, в почте которых есть ".com"
const commentsWithComEmail = socialMediaComments.filter(comment => {
  return comment.email.endsWith('.com');
});

console.log("Задание 7 - Комментарии с почтой .com:", commentsWithComEmail);

// Задание 8: Изменение postId в зависимости от id пользователя
const updatedComments = socialMediaComments.map(comment => {
  return {
    ...comment, // Копируем все текущие свойства
    postId: comment.id <= 5 ? 2 : 1 // Условная операция (тернарный оператор)
  };
});

console.log("Задание 8 - Обновленный массив комментариев с postId:", updatedComments);

// Задание 9: Объекты только из айди и имени
const idAndNameComments = socialMediaComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log("Задание 9 - Комментарии только с id и name:", idAndNameComments);

// Задание 10: Добавление свойства 'isInvalid' по длине сообщения
const commentsWithInvalidStatus = socialMediaComments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log("Задание 10 - Комментарии с статусом isInvalid:", commentsWithInvalidStatus);


// ===========================================
// Уровень 3: Продвинутые методы массивов (reduce, toString, join)
// ===========================================

// Задание 11: Вывод массива почтовых адресов (reduce и map)
// С помощью map
const emailsMap = socialMediaComments.map(comment => comment.email);
console.log("Задание 11 - Почты с помощью map:", emailsMap);

// С помощью reduce
const emailsReduce = socialMediaComments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []); // Начинаем с пустого массива
console.log("Задание 11 - Почты с помощью reduce:", emailsReduce);

// Задание 12: Приведение массива почт к строковому типу
const emailsString = emailsMap.join(', '); // Разделитель ', '
console.log("Задание 12 - Почты в виде строки (join):", emailsString);

const emailsToString = emailsMap.toString();
console.log("Задание 12 - Почты в виде строки (toString):", emailsToString);