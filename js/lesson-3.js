// Завдання 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// 1
// const newNumbers = numbers.map(number => {
//   return (number *= number);
// });
// console.log(newNumbers);

// 2
// const getDoubleNumbers = array => {
//   return array.map(element => {
//     return element ** 2;
//   });
// };
// console.log(getDoubleNumbers(numbers));

// Завдання 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// 1
// const valueData = data.flatMap(element => {
//   return element.values;
// });
// console.log(valueData);

// 2
// const addValue = data => {
//   return data.flatMap(element => {
//     return element.values;
//   });
// };
// console.log(addValue(data));

// Завдання 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// 1
// const youngPeople = people.some(element => {
//   return element.age < 20;
// });
// console.log(youngPeople);

// 2
// const findAge = array => {
//   return array.some(element => {
//     return element.age < 20;
//   });
// };
// console.log(findAge(people));

// Завдання 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// 1
// const evenNumbers = numbers.every(number => number % 2 == 0);
// console.log(evenNumbers);
// 2
// const isNuumberEven = numbers => {
//   return numbers.every(number => {
//     return number % 2 == 0;
//   });
// };
// console.log(isNuumberEven(numbers));

// Завдання 5
// Знайдіть перше непарне число
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// 1
// const oddNumber = numbers.find(number => {
//   return number % 2 != 0;
// });
// console.log(oddNumber);
// 2
// const findOddnumber = numbers => {
//   return numbers.find(number => {
//     return number % 2 != 0;
//   });
// };
// console.log(findOddnumber(numbers));

// Завдання 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// 1
// const sortedArray = numbersArray.toSorted((firstNumber, secondNumber) => {
//   return firstNumber - secondNumber;
// });
// console.log(sortedArray);
// 2
// const sortArray = array => {
//   return array.toSorted((a, b) => {
//     return a - b;
//   });
// };
// console.log(sortArray(numbersArray));

// Завдання 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// 1
// const sortedStringArray = stringArray.toSorted((firstWord, secondWord) => {
//   return firstWord.localeCompare(secondWord);
// });
// console.log(sortedStringArray);
// 2
// const sortStringArray = array => {
//   return array.toSorted((a, b) => {
//     return a.localeCompare(b);
//   });
// };
// console.log(sortStringArray(stringArray));

// Завдання 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortedUsers = users.toSorted((a, b) => {
//   return a.age - b.age;
// });
// console.log(sortedUsers);

// const sortUserAge = array => {
//   return array.toSorted((a, b) => {
//     return a.age - b.age;
//   });
// };
// console.log(sortUserAge(users));

// Завдання 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const newUserArray = user.filter(person => {
//   return person.age > 20;
// });
// console.log(newUserArray);

// const createNewArray = user => {
//   return user.filter(person => {
//     return person.age > 20;
//   });
// };
// console.log(createNewArray(user));

// Завдання 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumOfElement = numbers.reduce((acc, element) => {
//   return acc + element;
// }, 0);
// console.log(sumOfElement);

// const addElements = numbers => {
//   return numbers.reduce((acc, element) => {
//     return (acc += element);
//   }, 0);
// };
// console.log(addElements(numbers));

// Додаткове
//  Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)
// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
// ];
// function getMostExpensiveMeatProduct(products) {
//   const meatProducts = products.filter(product => {
//     return product.category == 'meat';
//   });
//   const mostExpensiveMeat = meatProducts.reduce((acc, product) => {
//     if (product.price > acc.price) {
//       return product;
//     } else {
//       return acc;
//     }
//   });
//   return mostExpensiveMeat;
// }
// console.log(getMostExpensiveMeatProduct(products));

// Завдання 11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       console.error(`cannot divide by 0`);
//     } else {
//       this.value /= value;
//     }
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
// }
// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(value) {
//     this.#login = value;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(value) {
//     this.#email = value;
//   }
// }
// const client = new Client('loginClient', 'emailClient');
// console.log(client.login);
// console.log(client.email);
// client.login = 'newLogin';
// console.log(client.login);

// Завдання 13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       ...super.getDetails,
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const person = new Person('Ivan', 20, 'male', 'ivan@gmail.com');
// console.log(person);
// console.log(person.getDetails());
// const employee = new Employee('Ivan', 20, 'male', 'ivan@gmail.com', 1000, 'IT');
// console.log(employee);
// console.log(employee.getEmployeeDetails());

// function addToEnd(arr, value) {
//   arr.push(value);
//   return arr;
// }
// console.log(addToEnd([1, 2, 3], 4)); // [1, 2, 3, 4]

// function removeItem(arr, item) {
//   return arr.filter(elem => {
//     return elem !== item;
//   });
// }
// console.log(removeItem(['a', 'b', 'c'], 'b')); // ["a", "c"]

// function findMax(arr) {
//   if (arr.length === 0) return undefined;
//   let maxElem = arr[0];
//   for (const elem of arr) {
//     if (maxElem < elem) {
//       maxElem = elem;
//     }
//   }
//   return maxElem;
// }
// console.log(findMax([5, 10, 3])); // 10

// function getEvenNumbers(arr) {
//   return arr.filter(item => {
//     return item % 2 === 0;
//   });
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 6])); // [2, 4, 6]

// function includesItem(arr, item) {
//   return arr.includes(item);
// }
// console.log(includesItem(['a', 'b'], 'b'));

// function sum(arr) {
//   let totalSum = 0;
//   for (const elem of arr) {
//     totalSum += elem;
//   }
//   return totalSum;
// }
// console.log(sum([1, 2, 3]));

// function getUnique(arr) {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// }
// console.log(getUnique([1, 2, 2, 3, 3])); // [1, 2, 3]

// function double(arr) {
//   return arr.map(item => {
//     return (item *= 2);
//   });
// }
// console.log(double([1, 2, 3])); // [2, 4, 6]
