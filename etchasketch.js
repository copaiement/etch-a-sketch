// JS for Etch a Sketch Webpage

//setup default vars
let fillColor;
let colorStyle;
let penStyle = "click";

//set up initial board
function initialize() {
    const initialPixel = 16;
    for (let i = 1; i <= (initialPixel * initialPixel); i ++) {
        addPixel();
    }
    fillColor = "black";
    colorStyle = "black";
    penStyle = "click";
    addListeners(penStyle);
}

//add pixel to board
function addPixel() {
    const artboard = document.querySelector(".artboard");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    //set bg color white
    pixel.style.backgroundColor = "white";
    //add pixel into artboard
    artboard.appendChild(pixel);
}

//add listeners to all pixels
function addListeners() {
    const pixels = document.querySelectorAll(".pixel");
    //look for mouse interaction to change color
    pixels.forEach(pixel => {
        pixel.addEventListener(`${penStyle}`, () => {
            //fillColor = randomRgb();
            console.log(fillColor);
            console.log(penStyle);
            
            //change color of pixel
            pixel.style.backgroundColor = `${fillColor}`;
        });
    });
}

function drawTest(pixel) {
    //fillColor = randomRgb();
    console.log(fillColor);
    console.log(penStyle);
    
    //change color of pixel
    pixel.style.backgroundColor = `${fillColor}`;
}

// ADD REJECTION FOR DECIMALS
//resize board
function resize() {
    //get new size
    let getValue = document.getElementById("value");
    let resizeNum = 0;
    //reject bad inputs
    if (getValue.value <= 0 || getValue.value > 100) {
        const msg = document.getElementById("msg");
        msg.textContent = "Enter a number from 1 to 100.";
        getValue.value = '';
    } else {
        //clear board
        const artboard = document.querySelector(".artboard");
        const pixels = document.querySelectorAll(".pixel");
        pixels.forEach(pixel => {
            artboard.removeChild(pixel);
        });
        //clear error message
        msg.textContent = "";
        resizeNum = getValue.value;
        getValue.value = '';
    }
    //add elements for each resize num
    for (let i = 1; i <= (resizeNum * resizeNum); i ++) {
        addPixel();
    }

    //set .artboard grid column qty for resizeNum
    const artboard = document.querySelector(".artboard");
    artboard.style.gridTemplateColumns = `repeat(${resizeNum}, minmax(0, 1fr))`;

    //add event listeners for new pixels
    addListeners();
}

//clear color from board
function erase() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white'
    });
}

//decide which fill style to use
function setColorStyle(colorStyle) {
    //Options: pick, random, shade
    return colorStyle;
}

//set pen style (pull value from HTML: btn)
function setPenStyle(penStyle) {
    //options: click, mouseover
    console.log(penStyle);
    return penStyle; 
}

function randomRgb() {
    //choose random r, b, and g vals from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

initialize();
// draw();

/*
//old drawing code:
function addListeners() {
    const pixels = document.querySelectorAll(".pixel");
    //look for mouse interaction to change color
    pixels.forEach(pixel => {

        pixel.addEventListener(`${penStyle}`, () => {
            
            fillColor = randomRgb();
            console.log(fillColor);
            console.log(penStyle);
            
            //change color of pixel
            pixel.style.backgroundColor = `${fillColor}`;


        });
    });
}
*/