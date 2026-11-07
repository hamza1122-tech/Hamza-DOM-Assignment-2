// Task no 1
let heading = document.getElementById("welcom");
heading.textContent = "DOM element selected by ID";

// Task no 2
let paras = document.getElementsByTagName("p");
paras[0].textContent = "Fist paragraph update";

// Task no 3
let btn = document.getElementsByClassName("btn");
btn[1].innerHTML = "click me";

// Task no 4
let head = document.querySelector("#heading");
head.style.color = "blue";

// Task no 5
let itemlist = document.querySelectorAll(".list");
itemlist.forEach(function (item) {
  item.style.color = "green";
});

// Task no 6
let paragraph = document.querySelector(".paragraph");
paragraph.style.fontSize = "20px";
paragraph.style.color = "red";
paragraph.style.backgroundColor = "pink";
