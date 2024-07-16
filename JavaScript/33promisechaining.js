let answer = new Promise(function (res, rej) {
  return res("first task completed");
});

let task2 = answer.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("second task completed");
  });
});

let task3 = task2.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("third task completed");
  });
});

let task4 = task3.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("fourth task completed");
  });
});

task4.then(function (data) {
  console.log(data);
});

// let answer = new Promise(function (res, rej) {
//   return res("first task completed");
// });

// let prmise2 = answer.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("second task completed");
//   });
// });

// prmise2.then(function (data) {
//   console.log(data);
// });
