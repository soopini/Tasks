const ball = document.getElementById("ball");
const btn = document.getElementById("animate-btn");

btn.addEventListener("click", function () {
  if (ball.classList.contains("bounce")) {
    ball.classList.remove("bounce");
  } else {
    ball.classList.add("bounce");
  }
});