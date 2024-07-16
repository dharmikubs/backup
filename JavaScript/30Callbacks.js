let simple_func = (name, callback_func) => {
  console.log("hello from simple function0");
  callback_func();
};
function callback_func() {
  console.log("I am callback function");
}
console.log(simple_func("dharmik", callback_func));
