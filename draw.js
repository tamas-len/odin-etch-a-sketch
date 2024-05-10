let gridSize = 16*16;

const gridContainer = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");


function generateGrid(grid)
{
    let htmlToAdd = "";

    for (let i = 0; i < grid; i++)
    {
        htmlToAdd += '<div class="box"></div>';
    }

    gridContainer.innerHTML = htmlToAdd;
}

generateBtn.addEventListener('click', generateGrid(gridSize));