function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`; 
}

let colorChange = document.querySelector(".change-color");
let body = document.querySelector("body");
const spanColor = document.querySelector(".color");

const changeNameColor = () => {
  spanColor.textContent = `${getRandomHexColor()};`
}

colorChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
});





