let key = prompt("Enter key");
let value = prompt("Enter Value");
localStorage.setItem(key, value); //set key value pair at local storage or also can update or override the content
// console.log(`the value of ${key} is ${localStorage.getItem(key)}`);
// localStorage.clear(); //clears the LocalStorage
// if (key == "color") {
//   localStorage.removeItem(key);
// }
// localStorage.length(); //returns the length of available data in local storage
// localStorage.key(1); //returns the index of keys available in local storage

//key and value must be in strings
