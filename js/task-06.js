/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/
let validationInput = document.getElementById('validation-input');
function validateInput() {
  let attribute;
  if (validationInput.value.length == validationInput.getAttribute('data-length')) {
    attribute = 'border-color: #4caf50;';
  } else {
    attribute = 'border-color: #f44336;';
  }
  validationInput.setAttribute('style', `border: 3px solid #bdbdbd; ${attribute}`);
}
validationInput.addEventListener('blur', validateInput);
