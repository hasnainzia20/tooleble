const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function convertToUppercase() {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = input.toUpperCase();
}
