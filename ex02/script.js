let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

btn.onclick = function() {
    box.classList.toggle("c1");
    box.classList.toggle("c4");
}