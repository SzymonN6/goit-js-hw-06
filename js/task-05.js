const inp = document.querySelector("#name-input");
const outp = document.querySelector("#name-output");

inp.addEventListener("input", (ev) => {
    outp.textContent = ev.currentTarget.value;
    if (outp.textContent.trim === "") {
        outp.textContent = "Anonymous"
    }
});