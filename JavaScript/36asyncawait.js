async function getdata() {
  let data = await fetch("https://fakestoreapi.com/products/1");
  let userdata = await data.json();
  console.log(userdata);
}
getdata();

// function getdata() {
//   fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }
// getdata();

// let fetch_data = async () => {
//   try {
//     const url = await fetch("https://fakestoreapi.com/products/1");
//     const user_data = await url.json();
//     console.log(user_data);
//   } catch (eroor) {
//     eroor = console.log(new Error("Something went wrong"));
//   }
// };
// fetch_data();

let fetch_data = async () => {
  let url = await fetch("https://fakestoreapi.com/products");
  let data = await url.json();
  console.log(data);
};
fetch_data();
