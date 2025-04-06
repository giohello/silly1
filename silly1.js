const input = document.getElementById("dynamic-input");
const shape = document.getElementById("shape");
const shapeText = document.getElementById("shape-text");

function updateText() {
  const text = input.value;
  shapeText.textContent = text;
  shapeText.style.whiteSpace = "normal";

  let min = 10;
  let max = 500;
  let fontSize;

  while (min <= max) {
    fontSize = Math.floor((min + max) / 2);
    shapeText.style.fontSize = fontSize + "px";

    if (
      shapeText.scrollHeight > shape.offsetHeight ||
      shapeText.scrollWidth > shape.offsetWidth
    ) {
      max = fontSize - 1;
    } else {
      min = fontSize + 1;
    }
  }

  shapeText.style.fontSize = (min - 1) + "px";
}

// Debounce to improve performance on fast typing
let debounceTimer;
input.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updateText, 100);
});

console.log("1")