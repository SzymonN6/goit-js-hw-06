const text = document.querySelector("#font-size-control");

text.addEventListener("input", function() {
    const size = text.value;
    document.querySelector("#text").style.fontSize = size + "px";
});