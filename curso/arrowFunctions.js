const arr = [1, 3, 5, 9];
console.log(arr);

//função anonima sem utilizar de arrow functions
const withoutArrowFunction = arr.map(function (item) {
  return item * 5;
});
console.log(withoutArrowFunction);

// fazendo como arrow function
const withArrowFunction = arr.map(item => item * 3);
console.log(withArrowFunction);
