// arathmatic operators

let num_one = 10;
let num_two = 5;

console.log("Addition is :", num_one + num_two);
console.log("Substraction is :", num_one - num_two);
console.log("Multiplication is :", num_one * num_two);
console.log("Division is :", num_one / num_two);

console.log(num_one > num_two);

//Example
const listing_price = 399;
const selling_price = 199;
const discount_percentage =
  ((listing_price - selling_price) / listing_price) * 100;
console.log(Math.round(discount_percentage) + "% off");
