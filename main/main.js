// Change color of text when a button is clicked
const btn = document.getElementById("btn");
const heading = document.getElementById("heading");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandNumber()];
  }
  heading.style.color = hex;
});

function getRandNumber() {
  return Math.floor(Math.random() * colors.length);
}
