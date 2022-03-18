
let numbers = Array.from(document.querySelectorAll(".numbers"));
let operators = Array.from(document.querySelectorAll(".operators"));
let displayScreen = document.querySelector("#input-display");
let historyScreen = document.querySelector("#history-display");
let backspace = document.querySelector("#backspace");
let clearButton = document.querySelector("#clear");
let equalButton = document.querySelector("#equal")
let textInput = displayScreen.textContent;
let isLastInputOperator = true;
let selectedOperator;
let currentComputedValue;
let nextValue;
let isCleared = false;
console.log(typeof(operands));

backspace.addEventListener('click', function(){
    textInput = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = textInput;
    historyScreen.textContent = historyScreen.textContent.slice(0,-1);
})
clearButton.addEventListener('click', reset)
equalButton.addEventListener('click', function(){
    if(!isLastInputOperator){
        operate()
        console.log(`computedValue: ${currentComputedValue}`)
    }else{
        console.log("error: expression is ending with operator")
    }
})

numbers.forEach(button=>{
    button.addEventListener('click',function(){
        if(isLastInputOperator){
            isLastInputOperator = false;
            clearDisplay();
        }
        if(isCleared){
            clearDisplay();
            isCleared = false
        }
        displayScreen.textContent += button.textContent;
        historyScreen.textContent += button.textContent;
    })
})
operators.forEach(operator=>{
    operator.addEventListener('click', function(){
        if(currentComputedValue){
            operate()
        }
        if(!currentComputedValue){
            currentComputedValue = parseInt(displayScreen.textContent)
        }else{
            nextValue = parseInt(displayScreen.textContent)
        }
        selectedOperator = operator;
        historyScreen.textContent += selectedOperator.textContent;
        clearDisplay()
        displayScreen.textContent = selectedOperator.textContent;
        isLastInputOperator = true;
        console.log(`${currentComputedValue}, ${nextValue}`);
    })
})

function clearDisplay(){
    displayScreen.textContent = ""
}
function reset(){
    clearDisplay();
    historyScreen.textContent = "";
    isCleared = true;
    displayScreen.textContent = 0;
    currentComputedValue = null;
    nextValue = null;
}
function operate(){
    nextValue = parseInt(displayScreen.textContent);
    switch(selectedOperator.textContent){
        case "+":
            currentComputedValue = add(currentComputedValue , nextValue);
            break;
        case "-":
            currentComputedValue = subtract(currentComputedValue , nextValue);
            break;
        case "×":
            currentComputedValue = multiply(currentComputedValue , nextValue);
            break;
        case "÷":
            currentComputedValue = divide(currentComputedValue , nextValue);
            break;
    }
}



function add(a,b){
    console.log(`${a} + ${b}`)
    return (a+b);
}
function subtract(a,b){
    console.log(`${a} - ${b}`)
    return (a-b);
}
function multiply(a,b){
    console.log(`${a} x ${b}`)
    return (a*b);
}
function divide(a,b){
    console.log(`${a} / ${b}`)
    return (a/b);
}

