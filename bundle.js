"use strict";

var arr = [1, 3, 5, 6, 7, 9];
console.log(arr); // a extensão map serve para percorremos um array
// criamos uma funcao que soma o valor do indice com o indice

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //soma todos os valores do array

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // retorna somente os numero que passam na condição da função

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //retorna o item que passa na condição criada no método

var find = arr.find(function (item) {
  return item === 23;
});
console.log(find);
