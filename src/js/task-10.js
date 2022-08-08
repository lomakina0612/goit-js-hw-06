// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
// return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
destroyButton.disabled = true;
let message = document.createElement("p");
message.style.color = "red";
controlsEl.append(message);

function createBoxes() {
  if (!inputEl.value) {
    message.innerText = "Enter value!"; 
    return;
  }
  const amount = Number(inputEl.value);
  destroyButton.disabled = false;
  message.innerText = ""; 

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxEl);
  }
  createButton.disabled = true;
}

function destroyBoxes() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
  destroyButton.disabled = true;
  createButton.disabled = false;
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
