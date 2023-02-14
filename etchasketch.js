// JS for Etch a Sketch Webpage

function initialize() {
    const initialPixel = 16;
    for (let i = 1; i <= (initialPixel * initialPixel); i ++) {
        addPixel();
    }
}

function addPixel() {
    const artboard = document.querySelector(".artboard");
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    //add pixel into artboard
    artboard.appendChild(pixel);

}

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
}

function erase() {
    const artboard = document.querySelector(".artboard");
    const pixels = document.querySelectorAll(".pixel");
    pixels.style.background = 'white';
}

initialize();