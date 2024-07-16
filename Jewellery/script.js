window.addEventListener("scroll", function (e) {
  let nav = document.getElementById("nav1");

  console.log(window.scrollY);
  if (window.scrollY > 15) {
    // nav.classList.add("shadow");
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});
