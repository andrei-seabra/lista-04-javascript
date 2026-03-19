let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

let switched = false;

btn.onclick = function() {
    box.classList.toggle("c1");
    box.classList.toggle("c4");
}