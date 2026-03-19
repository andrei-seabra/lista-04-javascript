let incrementButton = document.querySelector("#increment-button")
let decrementButton = document.querySelector("#decrement-button")

let countLabel = document.querySelector("#count")

let count = 0;

function updateCountLabel() {
    countLabel.textContent = count;
}

incrementButton.onclick = function() {
    count++;

    updateCountLabel();
}

decrementButton.onclick = function() {
    if (count == 0) {
        return;
    }

    count--;

    updateCountLabel();
}