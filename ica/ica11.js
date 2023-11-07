const x=1;
const y=2;

if(x===y) {
    console.log("success");
}
else {
    console.log("fail, L");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () =>{
    canvas.width= document.documentElement.clientWidth;
    canvas.height= document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<100; i++) {
        ctx.beginPath();
        let red= random(255);
        let green= random(255);
        let blue = random(255);
        let color= "rgba("+red+","+green+","+blue+", 0.5)";
        ctx.fillStyle= color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(100),
            0, 
            2* Math.PI,
        );
        ctx.fill();
    }
}

function draw2() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<60; i++) {
        ctx.beginPath();
        let red= random(255);
        let green= random(255);
        let blue = random(255);
        let color= "rgba("+red+","+green+","+blue+", 0.75)";
        ctx.fillStyle= color;
        ctx.rect(
            random(canvas.width),
            random(canvas.height),
            random(200),
            random(200),
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw2);