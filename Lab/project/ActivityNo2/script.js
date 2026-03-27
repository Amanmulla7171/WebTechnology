let countValue = 0;

let count = document.querySelector("#count");
let increaseBtn = document.querySelector("#increase");
let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");

// Increase
increaseBtn.addEventListener("click", function () {
    countValue++;
    count.innerText = countValue;
});

// Decrease
decreaseBtn.addEventListener("click", function () {
    countValue--;
    count.innerText = countValue;
});

// Reset
resetBtn.addEventListener("click", function () {
    countValue = 0;
    count.innerText = countValue;
});