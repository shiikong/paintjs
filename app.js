const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
ctx.lineWidth = 2.5;
ctx.strokeStyle = "#000";

let painting = false;

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

if(canvas) {
    // canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mousemove", onMouseMove);
    // canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseup", stopPainting);
    // canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseleave", stopPainting);
}