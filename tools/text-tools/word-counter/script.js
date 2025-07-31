const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const input = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

input.addEventListener("input", () => {
  const text = input.value.trim();
  wordCount.textContent = text === "" ? 0 : text.split(/\s+/).length;
  charCount.textContent = text.length;
});
