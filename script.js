const container = document.querySelector(".container");

for (let i = 0; i < 16; i ++) {
    let row = document.createElement("div");
    row.setAttribute("class","row");
    for (let j = 0; j < 16; j ++) {
        let square = document.createElement("div");
        square.setAttribute("class","square");
        row.append(square);
    }
    container.append(row);
}