const gridContainer = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");
let boxes = document.querySelectorAll('.box');


let grid = 0;

generateBtn.addEventListener('click', generateGrid);

function generateGrid()
{
    let htmlToAdd = "";
    let grid = prompt("grid size");
    let gridSize = grid*grid;

    let gridWidth = 480/grid;

    for (let i = 1; i < gridSize; i++)
    {
        htmlToAdd += `<div class="box" style="min-width: ${gridWidth}px; height: ${gridWidth}px; margin: 0px; padding: 0px"></div>`;
    }

    gridContainer.innerHTML = htmlToAdd;

    boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "red";
        });
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseleave', (e) => {
        });
    }
}