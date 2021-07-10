const canvas = document.querySelector('#draw');
const colorInput = document.querySelector('.color');
const thickInput = document.querySelector('.thick');
const rainbowInput = document.querySelector('.rainbow');
const title = document.querySelector('h1');
const shadow = 8;

console.log(title);

const ctx = canvas.getContext('2d');
document.documentElement.style.setProperty('--colourvar', '#000000');
var colorVariable = window.getComputedStyle(document.documentElement).getPropertyValue(`--colourvar`);

ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = colorVariable;
ctx.lineWidth = thickInput.value;
ctx.fillStyle = "white";



let it = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let background = ctx.backgroundColor;

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

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function changeShadow(e){
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    
    let x=e.offsetX;
    let y = e.offsetY;
    if(this !== e.target){
        x = x + e.offsetLeft;
        y = y + e.offsetTop;
    }
    x = Math.round(( x/width * shadow) - (shadow/2));
    y = Math.round(( y/ height * shadow) - (shadow/2));

    title.style.textShadow = `${x}px ${y}px 1px rgba(255,0, 0, 1),
                              ${-x}px ${y}px 1px rgba(0, 255, 0, 1),
                              ${x}px ${-y}px 1px rgba(0, 0, 255, 1)`;


   // console.log(x,y);
}

canvas.addEventListener('mousemove',changeShadow);










