const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function removeDuplicates() {
  const input = document.getElementById("inputText").value.split("\n");
  const unique = [...new Set(input)];
  document.getElementById("outputText").value = unique.join("\n");
}
