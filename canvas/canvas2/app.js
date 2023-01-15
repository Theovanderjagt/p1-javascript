let canvas = document.getElementById("Canvas2");
let ctx = canvas.getContext("2d")
let images = ["character3.jpg"];
let x = 0;
let speed = 10;

img.onload = function(){
    ctx.drawImage(img, x, 0);
    
    let animation = setInterval(move, 10);

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, 0);
        x + speed;
        if (x > canvas.width) {
            clearInterval(animation);
        }
    }

}


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;