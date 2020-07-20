// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let size = document.getElementById("sizePicker");
let pixels = document.getElementById("pixelCanvas");

function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    // Create rows based on height
    const row = document.createElement("tr");
    pixels.appendChild(row);

    for (let y = 0; y < width; y++) {
      // Create columns based on width and add them to the rows
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
  }
}

// When size is submitted by the user, call makeGrid()

function listener (event) {
    event.preventDefault();
    let inputHeight = document.getElementById("inputHeight").value;
    let inputWidth = document.getElementById("inputWidth").value;

    makeGrid(inputHeight, inputWidth);
}
size.addEventListener("submit", listener);

// Event listener for grid squares

function pixelEvent (event) {
    let pickedColor = color.value;
    const clickedSquare = event.target;
    // Change background color of clicked square
    clickedSquare.style.backgroundColor = pickedColor;
}
pixels.addEventListener("mousedown", pixelEvent);
