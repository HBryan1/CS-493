document.addEventListener("DOMContentLoaded", init);

function init(){
    let inputVal = "";
    let input = document.getElementById("input");
    input.value = 0;
    let btn = document.getElementById("0");
    let btn1 = document.getElementById("1");
    let btn2 = document.getElementById("2");
    let btn3 = document.getElementById("3");
    let btn4 = document.getElementById("4");
    let btn5 = document.getElementById("5");
    let btn6 = document.getElementById("6");
    let btn7 = document.getElementById("7");
    let btn8 = document.getElementById("8");
    let btn9 = document.getElementById("9");
    let btn10 = document.getElementById("10");
    let btn11 = document.getElementById("11");
    let btn12 = document.getElementById("12");
    let btn13 = document.getElementById("13");
    let btn14 = document.getElementById("14");
    document.onclick = function(){
        console.log(inputVal);
    }
    btn.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "7";
        input.value = inputVal;
    }
    
    btn1.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "8";
        input.value = inputVal;
    }
    
    btn2.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "9";
        input.value = inputVal;
    }
    btn3.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        //inputVal += "9";
        //input.value += inputVal;
    }
    
    btn4.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "4";
        input.value = inputVal;
    }
    
    btn5.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "5";
        input.value = inputVal;
    }
    
    btn6.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "6";
        input.value = inputVal;
    }
    
    btn7.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        //inputVal += "8";
        //input.value += inputVal;
    }
    
    btn8.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "1";
        input.value = inputVal;
    }
    
    btn9.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "2";
        input.value = inputVal;
    }
    
    btn10.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "3";
        input.value = inputVal;
    }
    
    btn11.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        //inputVal += "8";
        //input.value += inputVal;
    }
    
    btn12.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += "0";
        input.value = inputVal;
    }
    
    btn13.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        inputVal += ".";
        input.value = inputVal;
    }
    
    btn14.onclick = function(){
        if(input.value == 0){
            input.value = " ";
        }
        //inputVal += "8";
        //input.value += inputVal;
    }
   
    
}