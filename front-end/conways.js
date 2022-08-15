// Old Grid credit here: https://codepen.io/rachsmith/pen/ZObMOP
// New Grid credit: https://github.com/dnieh/pixel-grid/blob/master/pixelGrid.js
// Newer Grid credit: https://medium.com/@arhillis/pixel-art-maker-an-html5-canvas-tutorial-part-1-setting-up-the-canvas-fd71c868cc13

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const width = 400;
const height = 400;
var pixels = [];

/*
    Draws a grid of pixels;
    Creates a 2D array called pixels, which stores the x position, y position, width, height, and fill color at each index.
    Uses the .fillRect() method to draw a rectangle at each coordinate in the pixel array
    .fillRect(x position, y position, width, height)
*/
drawGrid = () => {
    for (var y = 0; y < height / 20; y++) {
        for (var x = 0; x < width / 20; x++) {
            pixels.push([x * 15, y * 15, 8, 8, 'green', false]);
        }
    }

    for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.fillStyle = pixels[i][4];
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }
}

// Reveal/hide single pixel 
// This is broken
singlePixel = () => {
    let z = Math.floor((Math.random() * 20));
    console.log(z);

    if (pixels[z][5] === false) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(pixels[z][0], pixels[z][1], pixels[z][2], pixels[z][3]);
        pixels[z][5] = true;
    }
    else {
        ctx.fillStyle = '#add8e6';
        ctx.fillRect(pixels[z][0], pixels[z][1], pixels[z][2], pixels[z][3]);
        pixels[z][5] = false;
    }
}

drawGrid();
singlePixel();