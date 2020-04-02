const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#000";
canvas.width = 800;
canvas.height = 500;

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

function startPainting() {
    painting = true;
}
function stopPainting() {
    painting = false;
}

// function onMouseDown(e) {
//     const x = e.offsetX;
//     const y = e.offsetY;
//     painting = true;
// }
function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
// function onMouseUp(e) {
//     stopPainting();
// }
// function onMouseLeave(e) {
//     // painting = false;
//     stopPainting();
// }

function handleColorClick(e) {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(e) {
    const strokeSize = e.target.value;
    ctx.lineWidth = strokeSize;
}

function handleModeClick() {
    if(filling === true) { // fill mode
        filling = false;
        mode.innerText = "Fill";
    } else { // paint line mode
        filling = true;
        mode.innerText = "Paint";
        // ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(e) {
    console.log(e);
}

function handleSaveClick() {
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href= img
    link.download = "paintjs";
    link.click();
    console.log(link);
}

if(canvas) {
    // canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mousemove", onMouseMove);
    // canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseup", stopPainting);
    // canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(
    color => color.addEventListener("click", handleColorClick)
);

if(range) {
    range.addEventListener("change", handleRangeChange);
}
if(mode) {
    mode.addEventListener("click", handleModeClick);
}
if(save) {
    save.addEventListener("click", handleSaveClick);
}