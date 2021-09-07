// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
let fontSizeRange = document.getElementById('font-size-control');
let textSpan = document.getElementById('text');
function changeFontSize() {
  textSpan.setAttribute('style', `font-size: ${fontSizeRange.value}px`);
}
fontSizeRange.addEventListener('input', changeFontSize);
