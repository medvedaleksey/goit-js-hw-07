// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const categories = document.getElementById('categories').getElementsByClassName('item');

console.log(`В разделе есть ${categories.length} категории`);

for (category of categories) {
  let categoryName = category.getElementsByTagName('h2')[0].textContent;
  let elementsOfCategory = category.getElementsByTagName('li');
  console.log(`Категория: ${categoryName}`);
  console.log(`Категория: ${elementsOfCategory.length}`);
}
