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
  brand: "KAIYI",
  model: "X7 Kunlum",
  year: 2025,
  color: "чёрный",
  transmission: "Автомат",
};

// Добавляем объект personalData как владельца авто
carData.owner = personalData;

// Проверяем, что владелец добавлен
console.log("Задание 4 - Данные автомобиля:", carData);
console.log("Задание 4 - Владелец автомобиля:", carData.owner.firstName);


// Задание 5: Функция проверки и добавления "максимальной скорости"
function addMaxSpeed(carObject) {
  if (carObject.maxSpeed === undefined) {
    carObject.maxSpeed = 220;
    console.log(`Задание 5 - Добавлена максимальная скорость: ${carObject.maxSpeed} км/ч`); // Исправлено: добавлены обратные кавычки
  } else {
    console.log("Задание 5 - Максимальная скорость уже есть в объекте.");
  }
}

// Пример вызова функции
addMaxSpeed(carData);
addMaxSpeed(carData);
console.log("Задание 5 - Объект после проверки:", carData);

// Задание 6: Функция вывода свойства объекта по имени
function getPropertyValue(obj, propertyName) {
  if (obj[propertyName] !== undefined) {
    console.log(`Задание 6 - Значение свойства "${propertyName}":`, obj[propertyName]); // Исправлено: добавлены обратные кавычки
  } else {
    console.log(`Задание 6 - Свойство "${propertyName}" не найдено в объекте.`); // Исправлено: добавлены обратные кавычки
  }
}

// Примеры вызова функции
getPropertyValue(personalData, "firstName");
getPropertyValue(carData, "model");
getPropertyValue(carData, "horsepower");

// Задание 7: Массив названий продуктов
const productNames = [
  "Увлажняющий мусс",
  "Увлажняющая маска",
  "Гель для умывания",
  "Подарочный набор №1",
  "Подарочный набор №5"
];

console.log("Задание 7 - Массив продуктов:", productNames);

// Задание 8: Массив объектов-книг (исправлено форматирование)
const bookList1 = [
  { 
    title: "Алхимик", 
    author: "Пауло Коэльо", 
    year: 1988, 
    coverColor: "Желтый", 
    genre: "Притча" 
  },
  { 
    title: "Мастер и Маргарита", 
    author: "Михаил Булгаков", 
    year: 1967, 
    coverColor: "Зеленый", 
    genre: "Роман" 
  },
  { 
    title: "Война и мир", 
    author: "Лев Толстой", 
    year: 1869, 
    coverColor: "Синий", 
    genre: "Эпопея" 
  }
];

// Добавляем еще одну книгу в конец списка (исправлено форматирование)
bookList1.push({ 
  title: "Гарри Поттер", 
  author: "Джоан Роулинг", 
  year: 1997, 
  coverColor: "Красный", 
  genre: "Фэнтези" 
});

console.log("Задание 8 - Обновленный список книг:", bookList1);

// Задание 9: Создаем второй массив книг для другой вселенной (исправлено форматирование)
const bookList2 = [
  { 
    title: "Хоббит", 
    author: "Дж.Р.Р. Толкин", 
    year: 1937, 
    coverColor: "Коричневый", 
    genre: "Фэнтези" 
  },
  { 
    title: "Властелин Колец", 
    author: "Дж.Р.Р. Толкин", 
    year: 1954, 
    coverColor: "Серый", 
    genre: "Фэнтези" 
  }
];

// Объединяем два массива в один с помощью оператора расширения (...)
const combinedBooks = [...bookList1, ...bookList2];

console.log("Задание 9 - Объединенный список книг:", combinedBooks);

// Задание 10: Функция с map для добавления свойства 'isRare'
function addIsRareProperty(booksArray) {
  const updatedBooks = booksArray.map(book => {
    return {
      ...book,
      isRare: book.year < 2000
    };
  });
  return updatedBooks;
}

// Применяем функцию к объединенному списку книг
const booksWithRareStatus = addIsRareProperty(combinedBooks);

console.log("Задание 10 - Книги с статусом isRare:", booksWithRareStatus);