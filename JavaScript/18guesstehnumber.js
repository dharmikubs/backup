let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while (inp != a) {
  score -= 1;
  inp = prompt("Enter the Number : ");
  if (inp == a) {
    console.log("Congradulation! You guess the correct number.");
    console.log(`You guess the actual number in ${100 - score} chances.`);
  } else if (inp > a && inp < 100) {
    console.log("your number is greater than the actual number.");
  } else if (inp < a && inp > 0) {
    console.log("your number is smaller than the actual number.");
  } else {
    console.log("Enter number between 1 to 100");
  }
}
