// setTimeout(function () {
//   alert("inside set timeout");
// }, 3000);

// let settime = setTimeout(() => {
//   this.reqMaq(obj["fkmaqid"]);
// }, 2000);

// alert("hello outside timeout");
// let settime = setTimeout(() => {
//   alert("inside arrow function with timeout");
// }, 1500);

// clearTimeout(settime); //clear timeout

// const createsum = (a, b) => {
//   console.log("running");
//   console.log(a + b);
// };
// setTimeout(createsum, 5000, 1, 5);

const createsum = (a, b) => {
  console.log("running");
  console.log(a + b);
};
(createsum, 5000, 1, 5);
// clearInterval(settime);
