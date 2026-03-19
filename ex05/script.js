let slots = document.querySelectorAll(".card");

slots.forEach(function(slot) {
    slot.onclick = function() {
        slots.forEach(function(slot) {
            slot.classList.remove("activated");
        })

        this.classList.add("activated");
    }
})