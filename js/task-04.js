const minusButton = document.querySelector("button[data-action='decrement']");
const plusButton = document.querySelector("button[data-action='increment']");
const result = document.querySelector("#value");

let counterValue = 0;

function countPlus() {
    counterValue += 1;
    result.textContent = counterValue;
}

function countMinus() {
    counterValue -= 1;
    result.textContent = counterValue;
}

plusButton.addEventListener("click", countPlus);
minusButton.addEventListener("click", countMinus);