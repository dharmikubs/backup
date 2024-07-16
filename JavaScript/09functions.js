// function sayhello(name) {
//   console.log(`Hello my name is ${name}`);
// }
// sayhello("dharmik");

// function helloworld() {
//   return "hello";
// }
// const greetings = helloworld();
// console.log(greetings);
// console.log(helloworld());

let get_role = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} has full access`;
    case "sub-admin":
      return `${name} has access to edit and delete course`;
    case "user":
      return `${name} has access to content`;

    default:
      return `${name} has invalid role`;
  }
};

console.log(get_role("dharmik","admin"));
