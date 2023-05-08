export const display = document.getElementById("display");
export const context = display.getContext("2d");
export const fps = 60;
let gravity = 0;

const selectedGravity = document.getElementById("gravity");
selectedGravity.addEventListener("change", function() {
    gravity = +selectedGravity.options[selectedGravity.selectedIndex].value;
});
export {gravity};