let promise_one = new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, 2000);
});

promise_one.then(() => {
  console.log("From first then of promise_one ");
});

promise_one.then(() => {
  console.log("From second then of promise_one ");
});
