// console.log(document.cookie); //to print cookies
// document.cookie = "name=dharmik"; //to add cookies in browser
//if we add cookie and add ";" in key it will not input value so to overcome this issue we have two methods in js
// 1)encodeURIComponent()
// 2)decodeURIComponent()
let key_cookie = prompt("Enter Cookie Key");
let value_cookie = prompt("Enter Cookie Value");
document.cookie = `${encodeURIComponent(key_cookie)}=${encodeURIComponent(
  value_cookie
)}`;
console.log(encodeURIComponent(document.cookie));
