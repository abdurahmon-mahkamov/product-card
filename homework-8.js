// Задание 3: Объект с личными данными
const personalData = {
  firstName: "Абдурахмон",
  lastName: "Махкамов",
  email: "abdurahmon.m@example.com",
  job: "Ученик Frontend",
  position: "Студент",
  age: 15,
  country: "Россия",
  city: "Королёв",
  relationshipStatus: "Не женат"
};

// Проверяем, что объект создан
console.log("Задание 3 - Личные данные:", personalData);

// Задание 4: Объект с данными об автомобиле
const carData = {
  brand: " KAIYI",
  model: "X7 Kunlum",
  year: 2025,
  color: "чёрный",
  transmission: "Автомат"
};

// Добавляем объект personalData как владельца авто
carData.owner = personalData;

// Проверяем, что владелец добавлен
console.log("Задание 4 - Данные автомобиля:", carData);
console.log("Задание 4 - Владелец автомобиля:", carData.owner.firstName);



// Задание 5: Функция проверки и добавления "максимальной скорости"
function addMaxSpeed(carObject) {
  if (carObject.maxSpeed === undefined) { // Проверяем, нет ли свойства "maxSpeed"
    carObject.maxSpeed = 220; // Если нет, добавляем и задаем значение
    console.log(`Задание 5 - Добавлена максимальная скорость: ${carObject.maxSpeed} км/ч`);
  } else {
    console.log("Задание 5 - Максимальная скорость уже есть в объекте.");
  }
}

// Пример вызова функции
addMaxSpeed(carData); // Добавит скорость
addMaxSpeed(carData); // Ничего не сделает, т.к. скорость уже есть
console.log("Задание 5 - Объект после проверки:", carData);

// Задание 6: Функция вывода свойства объекта по имени
function getPropertyValue(obj, propertyName) {
  if (obj[propertyName] !== undefined) {
    console.log(`Задание 6 - Значение свойства "${propertyName}":`, obj[propertyName]);
  } else {
    console.log(`Задание 6 - Свойство "${propertyName}" не найдено в объекте.`);
  }
}

// Примеры вызова функции
getPropertyValue(personalData, "firstName"); // "Абдурахмон"
getPropertyValue(carData, "model");     // "Camry"
getPropertyValue(carData, "horsepower"); // Свойство не найдено

// Задание 7: Массив названий продуктов
const productNames = [
  "Увлажняющий мусс",
  "Увлажняющая маска",
  "Гель для умывания",
  "Подарочный набор №1",
  "Подарочный набор №5"
];

console.log("Задание 7 - Массив продуктов:", productNames);

// Задание 8: Массив объектов-книг
const bookList1 = [
  { title: "Алхимик", author: "Пауло Коэльо", year: 1988, coverColor: "Желтый", genre: "Притча" },
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, coverColor: "Зеленый", genre: "Роман" },
  { title: "Война и мир", author: "Лев Толстой", year: 1869, coverColor: "Синий", genre: "Эпопея" }
];

// Добавляем еще одну книгу в конец списка
bookList1.push({ title: "Гарри Поттер", author: "Джоан Роулинг", year: 1997, coverColor: "Красный", genre: "Фэнтези" });

console.log("Задание 8 - Обновленный список книг:", bookList1);

// Задание 9: Создаем второй массив книг для другой вселенной
const bookList2 = [
  { title: "Хоббит", author: "Дж.Р.Р. Толкин", year: 1937, coverColor: "Коричневый", genre: "Фэнтези" },
  { title: "Властелин Колец", author: "Дж.Р.Р. Толкин", year: 1954, coverColor: "Серый", genre: "Фэнтези" }
];

// Объединяем два массива в один с помощью оператора расширения (...)
const combinedBooks = [...bookList1, ...bookList2];

console.log("Задание 9 - Объединенный список книг:", combinedBooks);

// Задание 10: Функция с map для добавления свойства 'isRare'
function addIsRareProperty(booksArray) {
  const updatedBooks = booksArray.map(book => {
    // Создаем новый объект для каждой книги, чтобы не изменять оригинал напрямую
    return {
      ...book, // Копируем все существующие свойства книги
      isRare: book.year < 2000 // Если год раньше 2000, то считается редкой
    };
  });
  return updatedBooks;
}

// Применяем функцию к объединенному списку книг
const booksWithRareStatus = addIsRareProperty(combinedBooks);

console.log("Задание 10 - Книги с статусом isRare:", booksWithRareStatus);
