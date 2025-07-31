const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function reverseText() {
  const input = document.getElementById("inputText").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("outputText").value = reversed;
}
