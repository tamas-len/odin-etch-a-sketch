const gridContainer = document.querySelector(".container");
const generateBtn = document.querySelector("#generate");
let boxes = document.querySelectorAll('.box');

document.querySelector('#green').addEventListener('click', () => {color = 'green'});
document.querySelector('#yellow').addEventListener('click', () => {color = 'yellow'});
document.querySelector('#black').addEventListener('click', () => {color = 'black'});
document.querySelector('#white').addEventListener('click', () => {color = 'white'});
document.querySelector('#blue').addEventListener('click', () => {color = 'blue'});
document.querySelector('#red').addEventListener('click', () => {color = 'red'});

let color = "red";

let grid = 0;

generateBtn.addEventListener('click', generateGrid);

function generateGrid()
{
    let htmlToAdd = "";
    let grid = prompt("grid size");
    if(grid > 100)
    {
        while(grid > 100)
        {
            grid = prompt("too large, give me a number less than 100");
        }
    }
    let gridSize = grid*grid;

    let gridWidth = 100/grid;

    for (let i = 0; i < gridSize; i++)
    {
        htmlToAdd += `<div class="box" style="width: ${gridWidth}%; height: ${gridWidth}%; margin: 0px; padding: 0px"></div>`;
    }

    gridContainer.innerHTML = htmlToAdd;

    boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = color;
        });
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseleave', (e) => {
        });
    }
}