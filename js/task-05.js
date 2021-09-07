// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputField = document.getElementById('name-input');
let outputField = document.getElementById('name-output');
function inputName() {
  let name = inputField.value;
  if (name) {
    outputField.innerHTML = name;
  } else {
    outputField.innerHTML = 'незнакомец';
  }
}
inputField.addEventListener('input', inputName);
