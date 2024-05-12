const gridContainer = document.querySelector(".grid");
const generateBtn = document.querySelector("#generate");
let boxes = document.querySelectorAll('.box');

const greenBtn = document.querySelector('#green');
const yellwoBtn = document.querySelector('#yellow');
const blackBtn = document.querySelector('#black');
const whiteBtn = document.querySelector('#white');
const blueBtn = document.querySelector('#blue');
const redBtn = document.querySelector('#red');

let color = "red";

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
            e.target.style.backgroundColor = color;
        });
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseleave', (e) => {
        });
    }
}

greenBtn.addEventListener('click', () => {color = 'green'});
yellwoBtn.addEventListener('click', () => {color = 'yellow'});
blackBtn.addEventListener('click', () => {color = 'black'});
whiteBtn.addEventListener('click', () => {color = 'white'});
blueBtn.addEventListener('click', () => {color = 'blue'});
redBtn.addEventListener('click', () => {color = 'red'});