//Initial value
let INITIAL_VALUE = 12;

//Setting up variables
let board = document.querySelector(".board");
let resetBtn = document.getElementById("reset-btn");
let slider = document.getElementById("control-slider");
let sliderDisplay = document.getElementById("slider-display");

//Event listener for clearing board
resetBtn.addEventListener("click", resetBoard);

//Event listener while dragging
slider.addEventListener("input", updateBoardSeek);

//Event listener after release
slider.addEventListener("change", updateBoardRelease);

//Setting up controls with initial value
slider.value = INITIAL_VALUE;
sliderDisplay.innerHTML = INITIAL_VALUE;

//Creating cells with initial value
populateBoard(INITIAL_VALUE);


function mouseOverColorChange(e){
    e.target.style.backgroundColor = "black"
}

function resetBoard(){
    Array.from(board.children).forEach(cell => {        
        cell.style.backgroundColor = "white"
    });  
};

function updateBoardSeek(e){
    sliderDisplay.innerHTML = e.target.value;
}

function updateBoardRelease(e){
    while(board.firstChild){
        board.removeChild(board.lastChild);
    }
    populateBoard(e.target.value);
}

function populateBoard(n){
    for (let i = 0; i < (n*n); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseover", mouseOverColorChange)
        board.appendChild(cell); 
    }
    board.style.gridTemplateColumns=`repeat(${n}, 1fr)`
    board.style.gridTemplateRows=`repeat(${n}, 1fr)`
}
