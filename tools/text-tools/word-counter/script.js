const input = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

input.addEventListener("input", () => {
  const text = input.value.trim();
  wordCount.textContent = text === "" ? 0 : text.split(/\s+/).length;
  charCount.textContent = text.length;
});
