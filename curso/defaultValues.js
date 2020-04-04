function soma(a, b) {
  return a + b;
}
// se não passar valores pros parametros,
// ocorre erro NaN (not a number)
console.log(soma(1));
console.log(soma());

//colocando valores padrões nos parametros
function somaDefaultValues(a = 3, b = 2) {
  return a + b;
}
console.log(somaDefaultValues());

//utilizando como arrow function
const somaArrowFunctionWithDefaultValues = (a = 0, b = 0)  => a + b;
console.log(somaArrowFunctionWithDefaultValues());

