// JavaScript source code

let avar = "5";
let listName = ['Kevin', 'Bryan', 'Sam', 'Theodore', 'Jordan'];
for (i = 1; i < 101; i=i*2) {
    //if (i % 5 == 0)
        console.log(i);
}
let names =" ";
for (i = 0; i < listName.length; i++) {
    if (i < 4) {
        names = names + listName[i] + ", ";
    }
    else {
        names = names + listName[i] ;
    }
}
console.log(names);

let limit = document.getElementsByClassName("box").length;
for (i = 0; i < limit; i++) {
    console.log(document.getElementsByClassName("box")[i].innerText);
}

function addTwo(x, y) {
    return x + y;
}

console.log(addTwo(5, 6));  


function changeColor() {
    document.getElementById("top").style = "color: red";
}
document.getElementById("top").onclick = changeColor;



let btn1 = document.getElementById("btnOne");
let count = 0;
btn1.onclick = incrementCount;

function incrementCount() {

    document.getElementById("paraOne").innerHTML = count;
    count++;
}

let colors = ["red", "orange", "green", "blue", "maroon", "yellow"];
let crl = document.getElementById("btnTwo");
let bgcrl = document.getElementById("btnThree");
let btn3 = document.getElementById("btnFour");
let btn4 = document.getElementById("btnFive");
let btn5 = document.getElementById("btnSix");
let c = 0;
crl.onclick = changeColor;
bgcrl.onclick = changeBackGroundColor;


function changeColor() {
    document.getElementById("paraTwo").style.color = colors[c];
    c = (c + 1) % 6;
}

function changeBackGroundColor() {
    document.getElementById("divBG").style.backgroundColor = colors[c];
    c = (c + 1) % 6;
}


btn3.onclick = function() {
    c = document.getElementById("txtNumber").value;
    
    let sum = 0;
    for (i = 0; i <= c; i++) {
        sum = sum + i;
    }
    document.getElementById("paraFour").innerText = sum;
}

let left;
let right;
btn4.onclick = function () {
    left = document.getElementById("numberOne").value;
    right = document.getElementById("numberTwo").value;

    document.getElementById("paraFive").innerHTML = left * right;
}

btn5.onclick = function () {
    let node = document.getElementById("listItem").value;
    let li = document.createElement("li");
    li.innerText = node;
    document.getElementById("shoppingList").appendChild(li);

}



let btn = [];
for (i = 0; i < document.getElementsByClassName("box").length; i++) {
    btn = document.getElementsByClassName("box")[i];
}

btn.onclick = function () {
    console.log(btn);
}