let display =document.getElementById('expression');
let currentexp="";

function atd(num){
    currentexp+=num;
    display.value=currentexp;
}
function calres(){
    try{
       display.value=eval(currentexp);
    }
    catch{
        display.value="error in exp";
        currentexp="";
    }
}
function clexp(){
    currentexp="";
    display.value="type new";
}
function bk(){
    display.value=currentexp.slice(0,-1);
}