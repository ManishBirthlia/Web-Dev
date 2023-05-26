var numbers = [3, 56, 2, 48, 5];

// [Map]--> Create a new array by doing something with each item in an array.

// --------------------------- 1st way --------------------------
// function multi(x){
//   return x*2;
// }
// console.log(new_numbers);

// var new_numbers=numbers.map(multi);
// --------------------------- 2nd way --------------------------
// var new_numbers=numbers.map((x)=>{
//   return x*2;
// });
// console.log(new_numbers);

// --------------------------- 3rd way --------------------------
// var new_numbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(new_numbers);

// [Filter]--> Create a new array by keeping the items that return true.

// var new_numbers=numbers.filter((x)=>{
//   return x>10;
// });
// console.log(new_numbers);

// [Reduce]--> Accumulate a value by doing something to each item in an array.

// console.log(
//   numbers.reduce((a,x) => {
//     return a+x;
//   })
// );

// [Find]--> find the first item that matches from an array.

// var find = numbers.find((x) => {
//   return x >= 5;
// });
// console.log(find);

// [FindIndex]--> find the index of the first item that matches.

// var index = numbers.findIndex((x) => {
//   return x === 5;
// });
// console.log(index);
