let fuction1 = () => {
  let name = "dharmik";
  const insidefunction = () => {
    console.log(name);
    let a = 8;
    function2(a);
  };
  insidefunction();
};
fuction1();

function function2(data) {
  console.log(data);
}
