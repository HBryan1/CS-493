document.addEventListener("DOMContentLoaded", init);

function init(){
    let xpos;
    let ypos;
    let prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
    context = document.getElementById("canvasID").getContext("2d");
    canvas = document.getElementById("canvasID");
    context.beginPath();
    context.strokeRect(50, 35, 50, 50);
    
    context.beginPath();
    context.fillRect(125, 35, 50, 50);
    
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 5;
    context.rect(200, 35, 50, 50);
    context.fill();
    context.stroke();
    
    function draw() {
        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.strokeStyle = "blue";
        context.lineWidth = 5;
        context.stroke();
        context.closePath();
    }
    
    canvas.onclick = function(e){
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        
        draw();
        return xpos;
    }
    
}