document.addEventListener("DOMContentLoaded", init);

function init() {
  let alert1 = "";
  let alert12 = "";
  let num = 0;
  let fname = document.getElementById("name");
  let lname = document.getElementById("last-name");
  let table = document.getElementById("table-body");
  let addBtn = document.getElementById("btn-add");
  let clearBtn = document.getElementById("btn-clear");
  addBtn.addEventListener("click", addNames);
  clearBtn.addEventListener("click", clearList);
  fname.addEventListener("focus", clearAlert);
  lname.addEventListener("focus", clearAlert)

  // function that clears alert using event focus
  function clearAlert(){
    document.getElementById("alertmsg").setAttribute("style", "display:none");
  }

  // fuction that adds names to list
  function addNames(){
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("last-name").value;
    let tableRow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let msg = document.getElementById("alertmsg");
    msg.setAttribute("class", "alert alert-primary");
    clearAlert();

    if(firstName.length == 0){
      msg.setAttribute("style", "display:block");
      alert1 = "Name box can not be empty ";
    }
    else if(firstName.length != 0){
      td2.innerText = firstName;
      alert1 = "";
    }

    if(lastName.length == 0){
      msg.setAttribute("style", "display:block");
      alert2 = "Last Name box can not be empty";
    }
    else if(lastName.length != 0){
      td3.innerText = lastName;
      alert2 = "";
    }
    msg.innerText = alert1 + alert2;
    if( (firstName.length != 0) && (lastName.length != 0) ){
      num++;
      td1.innerText = num;
      table.appendChild(tableRow);
      tableRow.appendChild(td1);
      tableRow.appendChild(td2);
      tableRow.appendChild(td3);
      document.getElementById("name").value = "";
      document.getElementById("last-name").value = "";
    }
    return num;
  }

  //function that clears all names
  function clearList() {
    count = num;
    for(i = 1; i <= count; i++){
      tr = table.querySelector("tr");
      table.removeChild(tr);
      num--;
    }
    return num;
  }

  // Text transformation
  let inputText = document.getElementById("txtInput");
  inputText.addEventListener("keydown", transformTo);

  function transformTo() {
      input = document.getElementById("txtInput").value;
      upperCase = document.getElementById("txtUC");
      lowerCase = document.getElementById("txtLC");
      redFont = document.getElementById("txtRed");
      cursiveFont = document.getElementById("txtCursive");
      upperCase.innerText = input.toUpperCase();
      lowerCase.innerText = input.toLowerCase();
      redFont.innerHTML = input.fontcolor("red");
      cursiveFont.innerHTML = input;
      cursiveFont.style.fontFamily = "cursive";
  }

}
