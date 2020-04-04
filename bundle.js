"use strict";

function soma(a, b) {
  return a + b;
} // se não passar valores pros parametros,
// ocorre erro NaN (not a number)


console.log(soma(1));
console.log(soma()); //colocando valores padrões nos parametros

function somaDefaultValues() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
}

console.log(somaDefaultValues()); //utilizando como arrow function

var somaArrowFunctionWithDefaultValues = function somaArrowFunctionWithDefaultValues() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};

console.log(somaArrowFunctionWithDefaultValues());
