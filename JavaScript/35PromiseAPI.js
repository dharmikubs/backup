//Promise.all(); -- return all
//Promise.allSettled(); -- if there any rejction in promise then skip it and resolve other
// Promise.race(); -- 3 promise mathi je pela resolve thay e pela return krse
// Promise.any(); -- 3 promise mathi je pela resolve thay e pela return krse pn jo error k rejection hoy to skip krse e promise
//Promise.resolve() -- return resolved value
//Promise.reject() -- return rejected value

let promise_one = new Promise((res, rej) => {
  res("Promise_one Resolved");
});
let promise_two = new Promise((res, rej) => {
  res(new Error("Error"));
});
let promise_three = new Promise((res, rej) => {
  res("Promise_three Resolved");
});

// ------------------------------
// Promise.allSettled();
// let result = Promise.all([promise_one, promise_two, promise_three]);
// result.then((value) => {
//   console.log(value);
// });

// ------------------------------
// Promise.allSettled();
let result = Promise.allSettled([promise_one, promise_two, promise_three]);
result.then((value) => {
  console.log(value);
});
