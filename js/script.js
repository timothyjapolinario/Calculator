
let numbersAndOperators = Array.from(document.querySelector(".numbers-operators").childNodes);
let displayScreen = document.querySelector("#input-display");
let backspace = document.querySelector("#backspace");
let clear = document.querySelector("#clear");
let equal = document.querySelector(".equal")
let input = ""
let isLastInputOperator = false;

backspace.addEventListener('click', function(){
    input = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = input;
})
clear.addEventListener('click', function(){
    input = ""
    displayScreen.textContent = input;
})

numbersAndOperators.forEach(button=>{
    button.addEventListener('click',function(){
        console.log(button.className);
        console.log(isLastInputOperator);
        if(!(isLastInputOperator &&(button.className=="operators"))){
            input = button.textContent;
            displayScreen.textContent += input;
        }
        isLastInputOperator = button.className == "operators"? true : false;    
    })
})

function add(a,b){
    return (a+b);
}
function subtract(a,b){
    return (a-b);
}
function multiply(a,b){
    return (a*b);
}
function divide(a,b){
    return (a/b);
}

