// Selecting elements using DOM

let heading = document.getElementById("heading");
let paragraph = document.querySelector(".para");
let button = document.querySelector("#btn");

// Change text using DOM
button.addEventListener("click", function () {
    heading.innerText = "Text Changed Successfully!";
    paragraph.style.color = "blue";
});