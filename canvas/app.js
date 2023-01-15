window.addEventListener("load", function (){
const canvas = document.querrySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
})
let painting = false;

function startPosition(){
    painting = true
    console.log("im painting")
    draw(e);
};

function finishedPosition(){
    painting = false;
    ctx.beginPath()
    console.log("im done painting")
};

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);

function draw() {
    };
canvas.addEventListener("mousemove", draw);

function draw(e) {
   if (!painting) return;
    console.log(e);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.clientX, e.clientY)
};

//test2

