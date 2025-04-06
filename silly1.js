function updateText() {
    const input = document.getElementById("dynamic-input");
    const text = input.value;
    const shape = document.getElementById("shape");
    const shapeText = document.getElementById("shape-text");

    shapeText.textContent = text;

    let fontSize = 1000;
    shapeText.style.fontSize = fontSize + "px";
    shapeText.style.whiteSpace = "normal";

    while (shapeText.scrollHeight > shape.offsetHeight || shapeText.scrollWidth > shape.offsetWidth) {
        fontSize -= 1;
        shapeText.style.fontSize = fontSize + "px";
    }
}