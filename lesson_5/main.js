'use strict'
//1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
function chessFn() {
  let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Буквы для столбцов
  let board = document.querySelector('#chess');
  let color = 0; // счётчик для выбора цвета клетки
  let nums = document.createElement("div");
  let row = document.createElement("div");
  let black = document.createElement("div");
  let white = document.createElement("div");

  function extraStr(){
    row = document.createElement("div"); // сама строка
    row.className = "row";
    board.appendChild(row);

    nums = document.createElement("div"); // первая ячейка
    nums.className = "nums";
    row.appendChild(nums);

    for (var g = 0; g < 8; g++) { // Поле
      nums = document.createElement("div");
      nums.className = "nums";
      nums.innerHTML = abc[g];
      row.appendChild(nums);
    }
    nums = document.createElement("div"); // последняя ячейка
    nums.className = "nums";
    row.appendChild(nums);
  }

  for (let i = 0; i <= 8; i++) { //генерация строк
    if (i == 0) { // первая строка
      extraStr();
      continue;
    }

    row = document.createElement("div"); // строка
    row.className = "row";
    board.appendChild(row);
    for (let n = 0; n < 8; n++) {

      if (n == 0) { // первая ячейка
        nums = document.createElement("div");
        nums.className = "nums";
        nums.innerHTML = i;
        row.appendChild(nums);
      }

      if (color == 0) {
        black = document.createElement("div");
        black.className = "black";
        row.appendChild(black);
        color = 1;
      } else {
        white = document.createElement("div");
        white.className = "white";
        row.appendChild(white);
        color = 0;
      }
    }
    nums = document.createElement("div"); // Последняя ячейка
    nums.className = "nums";
    nums.innerHTML = i;
    row.appendChild(nums);
    color = (color == 0) ? color = 1 : color = 0;
  }
  extraStr();
}

//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
class Item{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

class Bascket{
  constructor(... items){
    this.mySum = 0;
    this.cnt = 0
    for (let variable in items) {
      this.mySum += (items[variable].price);
      this.cnt += 1;
    }
  }
}

let item3 = new Item ('Хлеб', 10);
let item4 = new Item ('Вода', 17);

let b = new Bascket(item3, item4);

let basket = document.getElementById('basket');
if (b.mySum > 0){
  basket.innerHTML = 'В корзине: ' + b.cnt + ' товаров на сумму ' + b.mySum + ' рублей' ;
} else {
  basket.innerHTML = 'Корзина пуста';
}
