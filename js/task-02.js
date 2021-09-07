// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

let htmlListIngredients = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  let element = document.createElement('li');
  element.innerHTML = ingredient;
  htmlListIngredients.append(element);
}
