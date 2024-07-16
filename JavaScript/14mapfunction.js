let array = [];
let num = Number.parseInt(prompt("Enter Value"));
for (i = 1; i <= num; i++) {
  array.push(i);
}
let factorial = (value1, value2) => {
  return value1 * value2;  
};
let reduce_data = array.reduce(factorial);

console.log(`factorial of ${num} is : ${reduce_data}`);

// let maping = array.map((value)=>{
//   return value + 2
// })
// console.log(maping);

// let filter_data = array.filter((values) => {
//   return values > 4;
// });
// console.log(filter_data);
