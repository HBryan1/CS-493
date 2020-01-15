// JavaScript source code
let showText = document.getElementsByClassName("btn")[0];
showText.onclick = function () {
    document.getElementById("leadtext").innerText = "I love Coding";
}

let addMenu = document.getElementsByClassName("btn")[1];
addMenu.onclick = function () {
    let node = document.createElement("li");
    node.innerHTML = "<li class='nav-link'>New Menu</li>";
    node.style.color = "blue";
    document.getElementsByClassName("nav")[0].appendChild(node);
}

let removeMenu = document.getElementsByClassName("btn")[2];
removeMenu.onclick = function () {
    parentNode = document.getElementsByClassName("nav")[0];
    parentNode.removeChild(parentNode.lastChild);
}

let changeImage = document.getElementsByClassName("btn")[3];
changeImage.onclick = function () {
    document.getElementsByClassName("float-right").innerHTML = "<img class='float - right' src='img.jpg' style='width: 100px;'/>"
}

let showAlert = document.getElementsByClassName("btn")[4];
showAlert.onclick = function () {
    document.getElementById("alertbox").innerHTML = "<div class='alert alert-success'> Some Text </div>";
}