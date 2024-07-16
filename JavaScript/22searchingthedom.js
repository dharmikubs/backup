//id
let change_color_with_id = document.getElementById("card-head");

//className
let change_color_with_clasname = document.getElementsByClassName("card-head");

//Query Selector All
let change_color_with_queryall = document.querySelectorAll("card-head");
change_color_with_queryall[0].style.color = "blue";
change_color_with_queryall[1].style.color = "red";
change_color_with_queryall[2].style.color = "green";

//Query Selector
let change_color_with_query = document.querySelector("card-head");

//name
let change_color_by_name = document.getElementsByName("card-title");

//tag name
let change_color_by_tagname = document.getElementsByTagName("h5");
