const gridContainer = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");


function generateGrid()
{
    let htmlToAdd = "";
    let grid = prompt("grid size");
    let gridSize = grid*grid;

    let gridWidth = 270/grid;

    for (let i = 0; i < gridSize; i++)
    {
        htmlToAdd += `<div class="box" style="min-width: ${gridWidth}px; height: ${gridWidth}px"></div>`;
    }

    gridContainer.innerHTML = htmlToAdd;
}

generateBtn.addEventListener('click', generateGrid());