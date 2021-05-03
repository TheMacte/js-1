'use strict'
/*
Практикум. «Крестики-нолики»
Реализуем эту известную игру в браузере. По клику на ячейку в ней будет проставляться символ игрока, который в данный момент ходит. Игра идет по схеме Hot seat.
Самым интересным будет определять победителя. Это должно происходить после каждого хода — то есть в зависимости от события.
*/
let marker = 'X';
let xo = document.querySelectorAll('.xo');
let square = document.querySelector('#square');

const winCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function winChek(marker, e) {
  let winner = 0;
  winCombo.forEach((item, i) => {
    winner = 0;
    item.forEach((item, i) => {
      let itIs = document.getElementById(item);
      if (itIs.innerText == marker) {
        winner++;
      }
    });
    console.log(winner);
    if (winner == 3) {
      alert(`${marker} победил!`);
    }
  });
}

square.addEventListener("click", function(e) {
  let newElement = e.path[0];
  if (newElement.innerText == '') {
    newElement.innerText = marker;
    winChek(marker, e);
    marker = (marker == 'X') ? 'O' : 'X';
  }
  //console.log(e.path[0].id);
});
