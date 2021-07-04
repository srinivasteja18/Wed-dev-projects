const canvas = document.querySelector('#draw');
const colorInput = document.querySelector('.color');
const thickInput = document.querySelector('.thick');
const rainbowInput = document.querySelector('.rainbow');
const ctx = canvas.getContext('2d');
document.documentElement.style.setProperty('--colourvar', '#000000');
var colorVariable = window.getComputedStyle(document.documentElement).getPropertyValue(`--colourvar`);
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = colorVariable;
ctx.lineWidth = thickInput.value;

let it = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function drawColors(e) {
    if (rainbowInput.checked == true) {
        ctx.strokeStyle = `hsl(${hue},100%,50%)`;
        hue++;
    } else {
        hue=0;
        ctx.strokeStyle = colorVariable;
    }
    ctx.lineWidth = thickInput.value;
    if (it == false) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}

canvas.addEventListener('mousedown', (e) => {
    it = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => it = false);
canvas.addEventListener('mouseout', () => it = false);
canvas.addEventListener('mousemove', drawColors);

function updateColor() {
    colorVariable = this.value;
}
colorInput.addEventListener('change', updateColor);
thickInput.addEventListener('change', drawColors);

