let answer = new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 10);
  if (number < 5) {
    return resolve();
  } else {
    return reject();
  }
});
answer
  .then(function () {
    console.log("Number is below");
  })
  .catch(function () {
    console.log("Number is above");
  });
