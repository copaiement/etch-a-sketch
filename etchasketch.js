// JS for Etch a Sketch Webpage

//setup default vars
let fillColor;
let colorStyle;
let penStyle;

initialize();

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

let slider = document.getElementById("sliderRange");
let output = document.getElementById("slider-label");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value when dragged and send to resize
slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;

    //clear board
    const artboard = document.querySelector(".artboard");
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        artboard.removeChild(pixel);
    });


    //add elements for each resize num
    for (let i = 1; i <= (this.value * this.value); i ++) {
        addPixel();
    }

    //set .artboard grid column qty for resizeNum
    artboard.style.gridTemplateColumns = `repeat(${this.value}, minmax(0, 1fr))`;

    //add event listeners for new pixels
    addListeners(penStyle);

}

//



