// JS for Etch a Sketch Webpage

//setup default vars
let fillColor;
let colorStyle;
let penStyle;

initialize();

//set color picker event listener
const colorPicker = document.getElementById("select-color");
colorPicker.addEventListener("change", setColor);

//set up initial board
function initialize() {
    const initialPixel = 16;
    penStyle = "mouseover";
    fillColor = "rgb(0, 0, 0)";
    colorStyle = "solid";
    for (let i = 1; i <= (initialPixel * initialPixel); i ++) {
        addPixel();
    }
    addListeners(penStyle);
}

//add one pixel to board
function addPixel() {
    const artboard = document.querySelector(".artboard");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    //set bg color white
    pixel.style.backgroundColor = "rgb(255, 255, 255)";
    //add pixel into artboard
    artboard.appendChild(pixel);
}

//add listeners to all pixels
function addListeners(penStyle) {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener(`${penStyle}`, draw);
    });
}

//remove listeners from all pixels
function removeListeners(penStyle) {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.removeEventListener(`${penStyle}`, draw);
    })
}

function draw(e) {
    if (colorStyle == "solid") {
        e.target.style.backgroundColor = `${fillColor}`;
    } else if (colorStyle == "random") {
        e.target.style.backgroundColor = `${randomRgb()}`;
    } else {
        let currentColor = e.target.style.backgroundColor;
        e.target.style.backgroundColor = `${shade(currentColor)}`;
    }
}

//resize board
function resize() {
    //get new size
    let getValue = document.getElementById("size-value");
    let resizeNum = 0;
    //round decimals down to integers
    getValue.value = Math.floor(getValue.value);
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
    addListeners(penStyle);
}

//clear color from board
function eraseAll() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white'
    });
}

//decide which fill style to use
function setColorStyle(newStyle) {
    //Options: pick, random, shade
    colorStyle = newStyle;
}

//set pen style (pull value from HTML: btn)
function setPenStyle(newStyle) {
    //remove old listeners
    removeListeners(penStyle);
    penStyle = newStyle;
    //add new listeners
    addListeners(penStyle);
}

//function for random color style
function randomRgb() {
    //choose random r, b, and g vals from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    colorStyle = "random";
    return rgb;
}

//make squares 10% darker each pass
function shade(currentColor) {
    let newColor;
    currentColor = currentColor.replace(/[^\d,]/g, '').split(',');
   
    if (currentColor[0] >= 24 && currentColor[1] >= 24 && currentColor[2] >= 24) {
        newColor = `rgb(${currentColor[0] - 24}, ${currentColor[1] - 24}, ${currentColor[2] - 24})`;
        
    } else {
        newColor = "rgb(0, 0, 0)";
    }

    colorStyle = "shade";
    return newColor;
}

function setColor(e) {
    fillColor = e.target.value;
    colorStyle = "solid";
}

//



