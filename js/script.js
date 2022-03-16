
let numbers = Array.from(document.querySelectorAll(".numbers"));
let operators = Array.from(document.querySelectorAll(".operators"));
let displayScreen = document.querySelector("#input-display");
let backspace = document.querySelector("#backspace");
let clearButton = document.querySelector("#clear");
let equalButton = document.querySelector("#equal")
let textInput = displayScreen.textContent;
let operands = [];
let operandIndex = 0
let isLastInputOperator = false;
let selectedOperator;
let currentComputedValue;

backspace.addEventListener('click', function(){
    textInput = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = textInput;
})
clearButton.addEventListener('click', clear)
equalButton.addEventListener('click', function(){
    if(!isLastInputOperator){
        operate()
        console.log(currentComputedValue)
    }else{
        console.log("error: expression is ending with operator")
    }
})
numbers.forEach(button=>{
    button.addEventListener('click',function(){
        if(isLastInputOperator){
            isLastInputOperator = false;
            clear();
        }
        displayScreen.textContent += button.textContent;
    })
})
operators.forEach(operator=>{
    operator.addEventListener('click', function(){
        updateOperands()
        selectedOperator = operator.textContent;
        clear()
        displayScreen.textContent = operator.textContent;
        isLastInputOperator = true
        operandIndex = 1;
    })
})
function updateOperands(){
    if(!operands[operandIndex]){
        operands[operandIndex] = parseInt(displayScreen.textContent);
    }
}
function clear(){
    operands = [];
    textInput = ""
    currentComputedValue = null;
    displayScreen.textContent = textInput;
}
function operate(){
    updateOperands()
    operandIndex = 0;
    switch(selectedOperator){
        case "+":
            currentComputedValue = add(operands[0],operands[1]);
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
    console.log()
}



function add(a,b){
    console.log(`${a}, ${b}`)
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

