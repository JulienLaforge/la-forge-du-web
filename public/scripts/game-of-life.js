const container = document.querySelector('#container');

let cellHeight = 8;
let cellWidth = 8;
let numberCellsRow = 101;

let numberCells = numberCellsRow * numberCellsRow;

let isLiving = "rgb(25, 25, 25)";
let isDead = "rgb(255, 255, 255)";

let cell = new Array();
let stateCell = new Array();
let newStateCell = new Array();

// +---------------------------------------------------------------------------------------------------+
// | Création d'une grille en pourcentage de cellules vivantes ou mortes selon une répartion aléatoire |
// +---------------------------------------------------------------------------------------------------+
function createCellsGrid(){
    let cellMargin = 1;
    let positionX = 0;
    let positionY = 0;

    for (let i = 0; i < numberCellsRow; i++) {
        cell[i] = new Array();
        positionX = (container.offsetWidth - (numberCellsRow * cellWidth + (numberCellsRow - 1) * cellMargin)) / 2;
        positionY += cellHeight + cellMargin;

        for (let j = 0; j < numberCellsRow; j++) {
            let cellElem = document.createElement('div');
            cellElem.className = "cell";

            cellElem.style.width = cellWidth + "px";
            cellElem.style.height = cellHeight + "px";
            cellElem.style.left = positionX + 'px';
            cellElem.style.top = positionY + 'px';

            container.appendChild(cellElem);
            positionX += cellWidth + cellMargin;

            if (Math.random() * 100 <= 50) cellElem.style.backgroundColor = isLiving;
            cell[i][j] = cellElem;
        }
    }
}

// +------------------------------------------------------------------+
// | Force les limites du conteneur à n'avoir que des cellules mortes |
// +------------------------------------------------------------------+
function limitContainer(){
    for (let i = 0 ; i < numberCellsRow; i++) {
        for (let j = 0; j < numberCellsRow; j++){
            cell[0][j].style.backgroundColor = isDead;
            cell[i][0].style.backgroundColor = isDead;
            cell[i][numberCellsRow-1].style.backgroundColor = isDead;
            cell[numberCellsRow-1][j].style.backgroundColor = isDead;
        }
    }
}

// +-------------------------------------------------------------+
// | Donne à chaque tour l'état mort ou vivant de chaque cellule |
// +-------------------------------------------------------------+
function checkStatusCells() {
    for (let i = 0 ; i < numberCellsRow; i++) {
        stateCell[i] = new Array;
        for (let j = 0; j < numberCellsRow; j++){
            if (cell[i][j].style.backgroundColor == isLiving){
                stateCell[i][j] = 1;
            }
            else {
                stateCell[i][j] = 0;
            }
        }
    }
}

// +-----------------------------------------------------------------------+
// | Affiche dans la console l'état des cellules : 0 = morte / 1 = vivante |
// +-----------------------------------------------------------------------+
function printStatus() {
    for (let i = 0 ; i < numberCellsRow; i++) {
        for (let j = 0; j < numberCellsRow; j++){
            console.log('stateCell[',i,'][',j,'] =', stateCell[i][j]);
        }
    }
}

// +---------------------------------------------------------------+
// | Calcule l'état de chaque cellule pour la prochaine génération |
// +---------------------------------------------------------------+
function checkLivingNextTurn() {
    for (let i = 1 ; i < numberCellsRow - 1; i++) {
        newStateCell[i] = new Array();
        for (let j = 1; j < numberCellsRow - 1; j++){
            let counter = 0;
            if (stateCell[i-1][j-1]==1) counter++;
            if (stateCell[i-1][j]==1) counter++;
            if (stateCell[i-1][j+1]==1) counter++;
            if (stateCell[i][j-1]==1) counter++;
            if (stateCell[i][j+1]==1) counter++;
            if (stateCell[i+1][j-1]==1) counter++;
            if (stateCell[i+1][j]==1) counter++;
            if (stateCell[i+1][j+1]==1) counter++;

            if (stateCell[i][j] == 0 && counter == 3 || stateCell[i][j] == 1 && counter == 2 || stateCell[i][j] == 1 && counter == 3) {
                newStateCell[i][j] = 1;
            } else {
                newStateCell[i][j] = 0;
            }
        }
    }
}

// +------------------------------------------------------+
// | Affiche sur l'écran le nouvel état de chaque cellule |
// +------------------------------------------------------+
function affectLife(){
    for (let i = 1 ; i < numberCellsRow - 1; i++) {
        for (let j = 1; j < numberCellsRow - 1; j++){
            if (newStateCell[i][j] == 1) {
                cell[i][j].style.backgroundColor = isLiving;
            }
            if (newStateCell[i][j] == 0){
                cell[i][j].style.backgroundColor = isDead;
            }
        }
    }
}

function loop(){
    setTimeout(function() {
        checkStatusCells();
        checkLivingNextTurn();
        affectLife();
        loop();
    }, 1000 / 15);
}

function init(){
    createCellsGrid();
    limitContainer();
    loop();
}

init();
