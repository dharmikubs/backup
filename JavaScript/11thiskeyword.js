var name = "dharmik";
const person = {
  name: "John",
  age: 30,
  // accessing name property by using this.name
  greet: function () {
    console.log("The name is" + " " + this.name);
    console.log(name)
  },
};
person.greet();