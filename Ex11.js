let showText = document.getElementsByClassName("btn")[0];
showText.onclick = function () {
    document.getElementById("leadtext").innerText = "I love Coding";
}

let addMenu = document.getElementsByClassName("btn")[1];
addMenu.onclick = function () {
    let node = document.createElement("li");
    node.innerHTML = "<a class='nav-link'>New Menu</a>";
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
      document.getElementsByClassName("float-right").src ="images/linkedin.png";
}

let showAlert = document.getElementsByClassName("btn")[4];
showAlert.onclick = function () {
  if( document.getElementById("alertbox").innerHTML == ""){
    document.getElementById("alertbox").innerHTML = "<div class='alert alert-success'> Some Text </div>";
    showAlert.innerText = "Remove Alert";
  }
  else{
    document.getElementById("alertbox").innerHTML = "";
    showAlert.innerText = "Show Alert";
  }
}

let add = document.getElementById("btn-new-task");
add.onclick = function() {
  let task = document.getElementById("new-task").value;
  let node = document.createElement("li");
  node.innerHTML = "<input type='checkbox'> <label> </label><button class='delete'>X</button>";
  document.getElementById("todo-tasks").appendChild(node);
}
let removeList = document.getElementsByClassName("delete");
removeList.onclick = function(){
  
}
