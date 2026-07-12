// Завдання - 1
// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector('body');
console.log(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.querySelector('#title');
console.log(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector('.list');
console.log(listElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const itemsElem = document.querySelectorAll('[data-topic]');
console.log(itemsElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstItemElem = document.querySelectorAll('[data-topic]')[0];
// або const firstItemElem = document.querySelector("[data-topic]");
console.log(firstItemElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastItemElem = itemsElem[itemsElem.length - 1];
// або
// const lastItemElem = listElem.lastElementChild;
console.log(lastItemElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const nextToTitle = titleElem.nextElementSibling;
console.log(nextToTitle);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const listTitles = document.querySelectorAll('h3');
console.log(listTitles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
listTitles.forEach(title => {
  title.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationElem = document.querySelector("[data-topic='navigation']");
console.log(navigationElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigationElem.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const p = navigationElem.querySelector('p');
p.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const currentElem = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentElem.style.backgroundColor = 'lightblue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedTitle = document.querySelector('.completed');
console.log(completedTitle);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const itemToRemove = completedTitle.closest('li');
// або completedTitle.parentElement.remove();
itemToRemove.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement('p');
newP.textContent = "Об'єктна модель документа (Document Object Model)";
titleElem.insertAdjacentElement('afterend', newP);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newItemToList = document.createElement('li');
const newTitle = document.createElement('h3');
const newParagraph = document.createElement('p');
newTitle.textContent = 'Властивість innerHTML';
newParagraph.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
newItemToList.append(newTitle);
newItemToList.append(newParagraph);
listElem.append(newItemToList);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markup = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
    </p>
  </li>
`;

listElem.insertAdjacentHTML('beforeend', markup);

// 20 - очисти список
// listElem.innerHTML = '';

// Завдання - 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const arrayOfNumbers = [];
const numberContainerMarkup = '<div class="number-container"></div>';
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 0; i <= 99; i++) {
  arrayOfNumbers.push(randomNumber());
}
bodyElem.insertAdjacentHTML('afterbegin', numberContainerMarkup);
console.log(arrayOfNumbers);
const markupNumbers = arrayOfNumbers
  .map(el => {
    return `<div class="number ${el % 2 === 0 ? 'even' : 'odd'}"> ${el} </div>`;
  })
  .join('');

const numberContainer = document.querySelector('.number-container');
numberContainer.insertAdjacentHTML('beforeend', markupNumbers);

// або
// bodyElem.insertAdjacentHTML(
//   'afterbegin',
//   '<div class="number-container"></div>'
// );
// const numberContainer = document.querySelector('.number-container');
// let markup = '';
// for (let i = 0; i < 100; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   markup += `<div class="number ${num % 2 === 0 ? 'even' : 'odd'}">${num}</div>`;
// }
// numberContainer.insertAdjacentHTML('beforeend', markup);

// Завдання - 3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector('.js-username-input');
// input.addEventListener('input', onInput);
// function onInput(event) {
//   if (event.target.value.length > 6) {
//     event.target.classList.add('success');
//     event.target.classList.remove('error');
//   } else {
//     event.target.classList.add('error');
//     event.target.classList.remove('success');
//   }
// }

// function onInput({ target }) {
//   const inputValue = target.value;
//   if (inputValue.length > 6) {
//     target.classList.add('success');
//     target.classList.remove('error');
//   } else {
//     target.classList.add('error');
//     target.classList.remove('success');
//   }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// input.addEventListener('focus', onFocus);
// function onFocus(event) {
//   if (event.target.value === '') {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid green';
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// input.addEventListener('blur', onBlur);
// function onBlur(event) {
//   if (event.target.value === '') {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid lime';
//   }
// }

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань дані з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у об'єкт і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('.js-contact-form');
const checkBoxElem = document.querySelector('.js-policy-checkbox');
const outputElem = document.querySelector('.js-username-output');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const userName = input.value.trim();
  const isChecked = checkBoxElem.checked;
  if (isChecked && userName) {
    const userObj = {
      userName: userName,
    };
    console.log(userObj);
  } else {
    alert('Заповніть поле та підтвердіть чекбокс');
  }
  form.reset();
  outputElem.textContent = 'Anonymous';
}

input.addEventListener('input', onInput);
function onInput(event) {
  const userName = event.target.value.trim();

  if (userName === '') {
    outputElem.textContent = 'Anonymous';
  } else {
    outputElem.textContent = userName;
  }
}

// Завдання - 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меншим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const decreaseSquare = document.querySelector('.js-decrease');
const increaseSquare = document.querySelector('.js-increase');
const square = document.querySelector('.box');

decreaseSquare.addEventListener('click', onDecrease);
function onDecrease() {
  const currentSize = parseInt(square.style.width || 50);
  const newSize = currentSize - 20;

  square.style.width = `${newSize}px`;
  square.style.height = `${newSize}px`;
}

increaseSquare.addEventListener('click', onIncrease);
function onIncrease() {
  const currentSize = parseInt(square.style.width || 50);
  const newSize = currentSize + 20;

  square.style.width = `${newSize}px`;
  square.style.height = `${newSize}px`;
}
