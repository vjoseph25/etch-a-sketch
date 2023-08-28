const container = document.querySelector(".container");

function getRandomColor() {
    return Math.floor(Math.random()*256);
}

function addColor(event) {
    let red = getRandomColor();
    let green = getRandomColor();
    let blue = getRandomColor();
    let colorString = "rgb(" + red + "," + green + "," + blue + ")";
    event.target.setAttribute("style", "background-color:" + colorString);
}

function getNumberSquares() {
    let validNum = false;
    while (!validNum) {
        let numSquares = prompt("How many squares should each side of the grid have?" + 
        " Please enter a number between 1 and 100");
        numSquares = parseInt(numSquares);
        if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
            alert("Your input was not valid. Please input a number between 1 and 100");
        } else {
            validNum = true;
            drawGrid(numSquares);
        }
    }
}

function drawGrid(size) {
    let oldRows = document.querySelectorAll(".row");
    oldRows.forEach((row) => row.remove());
    for (let i = 0; i < size; i ++) {
        let row = document.createElement("div");
        row.setAttribute("class","row");
        for (let j = 0; j < size; j ++) {
            let square = document.createElement("div");
            square.setAttribute("class","square");
            square.addEventListener("mouseover", addColor);
            row.append(square);
        }
        container.append(row);
    }
}


let button = document.querySelector(".buttonClass");
button.addEventListener("click", getNumberSquares);
drawGrid(16);