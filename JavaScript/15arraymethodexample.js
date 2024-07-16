let array = ["dharmik", "jay", "kishan", "abhi"];
let input_name = prompt("Enter Your Name here you want to delete");

let indexofarray = array.indexOf(input_name);
if (indexofarray > -1) {
  array.splice(indexofarray, 1);
  console.log(array);
} else {
  alert("invalid value provided");
}
