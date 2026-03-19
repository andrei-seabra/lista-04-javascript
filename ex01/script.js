let btn = document.querySelector("#btn");

let heading = document.querySelector("#heading");
let subheading = document.querySelector("#subheading");

let switched = false;

btn.onclick = function() {
    switched = !switched;

    if (switched) {
        heading.textContent = "Evolua";
        subheading.textContent = "Pense melhor";
    } else {
        heading.textContent = "Aprenda";
        subheading.textContent = "Cresça sempre";
    }
}