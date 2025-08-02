// function formatJSON() {
//   const input = document.getElementById("inputText").value;
//   try {
//     const parsed = JSON.parse(input);
//     const formatted = JSON.stringify(parsed, null, 2);
//     document.getElementById("outputText").value = formatted;
//   } catch (error) {
//     document.getElementById("outputText").value = "Invalid JSON format.";
//   }
// }

function formatJSON() {
  const input = document.getElementById("jsonInput").value;
  try {
    const obj = JSON.parse(input);
    const pretty = JSON.stringify(obj, null, 2);
    document.getElementById("jsonOutput").value = pretty;
  } catch {
    document.getElementById("jsonOutput").value = "Invalid JSON";
  }
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("jsonInput").value = event.target.result;
    formatJSON();
  };
  reader.readAsText(file);
}

function downloadFormattedJSON() {
  const content = document.getElementById("jsonOutput").value;
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "formatted.json";
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}
