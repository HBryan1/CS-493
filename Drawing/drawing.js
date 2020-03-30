document.addEventListener("DOMContentLoaded", init);

function init(){
    let colors = "black";
    let lineSize = 1;
    let btnRed = document.getElementById("red");
    let btnGreen = document.getElementById("green");
    let btnBlue = document.getElementById("blue");
    let btnBlack = document.getElementById("black");
    let btnSm = document.getElementById("sm");
    let btnLg = document.getElementById("lg");
    let btnErase = document.getElementById("erase");

    btnErase.onclick = function (){ colors = "#f8f8f8"}
    btnSm.onclick = function (){ lineSize = 1}
    btnLg.onclick = function (){ lineSize = 6}
    btnRed.onclick = function (){ colors = "red"}
    btnGreen.onclick = function (){ colors = "green"}
    btnBlue.onclick = function (){ colors = "blue"}
    btnBlack.onclick = function (){ colors = "black"}

    let xpos;
    let ypos;
    let prevX = 0;
    let currX = 0;
    let prevY = 0;
    let currY = 0;

    context = document.getElementById("canvasID").getContext("2d");
    canvas = document.getElementById("canvasID");

    canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);

    function draw() {
        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.strokeStyle = colors;
        context.lineWidth = lineSize;
        context.stroke();
        context.closePath();
    }
    function findxy(res, e) {
            if (res == 'down') {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;

                flag = true;
                dot_flag = true;
                if (dot_flag) {
                    ctx.beginPath();
                    ctx.fillStyle = x;
                    ctx.fillRect(currX, currY, 2, 2);
                    ctx.closePath();
                    dot_flag = false;
                }
            }
            if (res == 'up' || res == "out") {
                flag = false;
            }
            if (res == 'move') {
                if (flag) {
                    prevX = currX;
                    prevY = currY;
                    currX = e.clientX - canvas.offsetLeft;
                    currY = e.clientY - canvas.offsetTop;
                    draw();
                }
            }
        }


}
