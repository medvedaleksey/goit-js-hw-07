/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/
let spanCounter = document.getElementById('value');
let counterValue = Number(spanCounter.innerHTML);

function increment() {
  counterValue += 1;
  spanCounter.innerHTML = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanCounter.innerHTML = counterValue;
}

let buttons = document.getElementsByTagName('button');
let decrementButton = buttons[0];
decrementButton.addEventListener('click', decrement);
let incrementButton = buttons[1];
incrementButton.addEventListener('click', increment);
