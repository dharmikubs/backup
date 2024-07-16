//Base Class -- Parnet class
class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run = () => {
    console.log(`${this.name} is running`);
  };
}

//extended Class - child class
class Monkey extends Animal {
  eatingBanana = () => {
    console.log(`${this.name} is eating banana`);
  };
}
let m = new Monkey("Chimpangie", "black");
m.eatingBanana();
m.run();
