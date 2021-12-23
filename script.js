//select input and declare variables for height and width
let selectedHeight = document.querySelector('#input-height');
let selectedWidth = document.querySelector('#input-width');

//select input and declare variable for color
let selectedColor = document.querySelector('#color-picker');

//select and declare variable for table element
let gridContainer = document.querySelector('#pixel-canvas');

/**
  * @desc change color of cell while event delegating 
  * @param str $selectedColor - chosen color from color picker
*/
function changeColor(event) {
    if (event.target.nodeName.toLowerCase() === 'td') {
        event.target.style.backgroundColor = selectedColor.value;
    } 
}

/**
  * @desc create a grid of squares 
  * @param int $selectedWidth - number of squares representing the width of the grid
  * @param int $selectedHeight - number of squares representing the height of the grid
*/
function makeGrid(event) {

    //prevent the page from reloading after user submits
    event.preventDefault();

    //clear canvas if previous grid exists
    gridContainer.innerHTML = '';

    //nested for-loops through input values to add rows and cells
    for (let r=0; r<selectedHeight.value; r++) {
        let row = gridContainer.insertRow();
        for (let c=0; c<selectedWidth.value; c++) {
            let cell = row.insertCell();
        }  
    }
}

//paint cell when user clicks on it
gridContainer.addEventListener('click', changeColor);

// when size and color inputs are submitted by the user, call makeGrid() function
const userSubmits = document.querySelector('#size-picker');
userSubmits.addEventListener('submit', makeGrid);
