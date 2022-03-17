
let numbers = Array.from(document.querySelectorAll(".numbers"));
let operators = Array.from(document.querySelectorAll(".operators"));
let displayScreen = document.querySelector("#input-display");
let backspace = document.querySelector("#backspace");
let clearButton = document.querySelector("#clear");
let equalButton = document.querySelector("#equal")
let textInput = displayScreen.textContent;
let operands = [];
let operandIndex = 0
let isLastInputOperator = true;
let selectedOperator;
let currentComputedValue;
let nextValue;
console.log(typeof(operands));

backspace.addEventListener('click', function(){
    textInput = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = textInput;
})
clearButton.addEventListener('click', reset)
equalButton.addEventListener('click', function(){
    if(!isLastInputOperator){
        operate()
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
        displayScreen.textContent += button.textContent;
    })
})
operators.forEach(operator=>{
    operator.addEventListener('click', function(){
        selectedOperator = operator.textContent;
        if(!currentComputedValue){
            currentComputedValue = parseInt(displayScreen.textContent)
        }else{
            nextValue = parseInt(displayScreen.textContent)
        }
        clearDisplay()
        displayScreen.textContent = selectedOperator;
        isLastInputOperator = true;
    })
})

function clearDisplay(){
    displayScreen.textContent = ""
}
function reset(){
    clearDisplay();
    currentComputedValue = null;
}
function operate(){
    nextValue = displayScreen.textContent;
    console.log(`${currentComputedValue}, ${nextValue}`)
    switch(selectedOperator.textContent){
        case "+":
            currentComputedValue = add(currentComputedValue , nextValue);
            break;
        case "-":
            currentComputedValue = subtract(operands[0],operands[1]);
            break;
        case "×":
            currentComputedValue = multiply(operands[0],operands[1]);
            break;
        case "÷":
            currentComputedValue = divide(operands[0],operands[1]);
            break;
    }
}



function add(a,b){
    console.log(`${a} + ${b}`)
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

