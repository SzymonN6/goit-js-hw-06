const input = document.querySelector("input");
const length = Number(input.getAttribute("data-length"));

function checkLength(event) {
    if (event.currentTarget.value.length === length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

input.addEventListener("blur", checkLength);