// 1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

function dayOfweek(date) {
  switch (date) {
    case 1:
      return "Понеділок";

    case 2:
      return "Вівторок";

    case 3:
      return "Середа";

    case 4:
      return "Четверг";

    case 5:
      return "П'ятниця";

    case 6:
      return "Субота";

    case 7:
      return "Неділя";

    default:
      return "Невірно задані данні";
  }
}

console.log(dayOfweek(1));
console.log("-----------end-----------");

// 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'

function formatString(string) {
  let splitedString = string.split("_");

  for (var i = 0; i < splitedString.length; i++) {
    splitedString[i] =
      splitedString[i].charAt(0).toUpperCase() + splitedString[i].slice(1);
  }

  return splitedString.join("");
}

console.log(formatString("var_text_hello"));
console.log("-----------end-----------");

// 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.

function fillArray(arr) {
  for (let i = 0; i < 10; i++) {
    arr.push("x");
  }

  return arr;
}

let array = [];

console.log(fillArray(array));
console.log("-----------end-----------");

// 4. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!
function printOne() {
  console.log(1);
}

function printTwo() {
  console.log(2);
}

let a = 0;
let ggg = a > 0 ? printOne() : printTwo();
console.log("-----------end-----------");

// 5. Функція ggg1 приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. Поверніть результатом функції ggg суму 3 та 4

function ggg1(func1, funct2) {
  return func1() + funct2();
}

const func1 = function () {
  return 3;
};
const func2 = function () {
  return 4;
};

console.log(ggg1(func1, func2));
console.log("-----------end-----------");

// 6. Написати функцію яка порівнює два масиви, якщо вони ідентичні тоді повертаємо true інакше false

function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(compareArrays([11, 22, 33], [11, 20, 33]));
console.log("-----------end-----------");

// 7. Написати функцію яка розбиває масив на підмасиви  за заданим розміром. Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

console.log(chunk([1, 2, 3, 4, 5, 6], 3));
