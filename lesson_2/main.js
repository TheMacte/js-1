'use strict'
//1. Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - сначала к а прибавляется 1, потом это значение присваивается с.
d = b++; alert(d);           // 1 - сначла d присваивается b (1), а потом к b прибавляется 1.
c = (2 + ++a); alert(c);     // 5 - а уже равно 2 (4-я строка кода), потом а увеличивается на единицу (а = 3), и затем к 2 прибавляется а (3), итого 5.
d = (2 + b++); alert(d);     // 4 - b уже рано 2 (5-я строка кода), затем к 2 приавляется b (2), только после этого b увеличивается на 1 (b=3)
alert(a);                    // 3 - a уже равно 3 (6-я строка кода)
alert(b);                    // 3 - b уже равно 3 (7-я строка кода)

//2. Чему будет равен x? - x = 5, сперва а умножает себя на 2 (а=4), потом прибавляется 1.
var a = 2;
var x = 1 + (a *= 2);
//console.log(x);

//3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
var a = 3;
var b = -2;

if (a >= 0 && b >= 0) { // если a и b положительные, вывести их разность;
  console.log(a - b);
} else if (a < 0 && b < 0) { // если а и b отрицательные, вывести их произведение;
  console.log(a * b);
} else if ( (a < 0 && b >= 0) || (a >= 0 && b < 0) ) { // если а и b разных знаков, вывести их сумму; Ноль можно считать положительным числом.
  console.log(a + b);
}

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = 10;

switch (a >=0 && a <= 15) {
  case a<=0:
    console.log(0);
  case a<=1:
    console.log(1);
  case a<=2:
    console.log(2);
  case a<=3:
    console.log(3);
  case a<=4:
    console.log(4);
  case a<=5:
    console.log(5);
  case a<=6:
    console.log(6);
  case a<=7:
    console.log(7);
  case a<=8:
    console.log(8);
  case a<=9:
    console.log(9);
  case a<=10:
    console.log(10);
  case a<=11:
    console.log(11);
  case a<=12:
    console.log(12);
  case a<=13:
    console.log(13);
  case a<=14:
    console.log(14);
  case a<=15:
    console.log(15);
}

//5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function mySum(a,b) {
  return a + b;
}

function myMlt(a,b) {
  return a * b;
}

function myDif(a,b) {
  return a / b;
}

function myMin(a,b) {
  return a - b;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case '+':
      return mySum(arg1,arg2);
    case '-':
      return myMin(arg1,arg2);
    case '*':
      return myMlt(arg1,arg2);
    case '/':
      return myDif(arg1,arg2);
  }
}

//7. * Сравнить null и 0. Объяснить результат.
  console.log((null == 0)); // null и 0 являются разными типаи данных. 0 - это тип Number, null - это тип null

//8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
function power(val, pow){
  if (pow == 0) {
    return 1;
  } else if (pow == 1){
    return val;
  }
  return (val * power(val, pow - 1));
}

console.log(power(3, 3));
