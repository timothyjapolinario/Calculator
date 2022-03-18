
let numbers = Array.from(document.querySelectorAll(".numbers"));
let operators = Array.from(document.querySelectorAll(".operators"));
let displayScreen = document.querySelector("#input-display");
let historyScreen = document.querySelector("#history-display");
let backspace = document.querySelector("#backspace");
let clearButton = document.querySelector("#clear");
let equalButton = document.querySelector("#equal")
let textInput = displayScreen.textContent;
let isLastInputOperator = false;
let selectedOperator;
let currentComputedValue;
let nextValue;
let isStarting = true;
backspace.addEventListener('click', function(){
    textInput = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = textInput;
    historyScreen.textContent = historyScreen.textContent.slice(0,-1);
})
clearButton.addEventListener('click', function(){
    clearDisplay();
    clear();
})
equalButton.addEventListener('click', function(){
    if(isLastInputOperator){
        console.log("error: last input operator")
    }else{
        operate();
        console.log(`currVal ${currentComputedValue}`);
        reset();
    }
})
function reset(){
    isLastInputOperator = false;
    nextValue = null;
}
numbers.forEach(button=>{
    button.addEventListener('click', function(){
        //if last input is not operator
        if(isLastInputOperator){
           clearDisplay(); 
           isLastInputOperator = false;
           console.log("cat")
        }
        displayScreen.textContent += button.textContent;
        historyScreen.textContent += button.textContent;
    })
})
operators.forEach(operator=>{
    operator.addEventListener('click', function(){
        selectedOperator = operator;
        //if there is no computedValue yet, get content
        if(isLastInputOperator){

            if(historyScreen.textContent.slice(0,-1).match(/[+ - ÷ ×]/)){
                historyScreen.textContent = historyScreen.textContent.slice(0,-1) + selectedOperator.textContent
                
            }
        }else{
            if(!currentComputedValue || nextValue == null){
                currentComputedValue = parseFloat(displayScreen.textContent);
            }else{
                operate()
                displayScreen.textContent = currentComputedValue;
            }
            historyScreen.textContent += operator.textContent;
            isLastInputOperator = true;
        }
    })
})



function clearDisplay(){
    displayScreen.textContent = ""
}
function clear(){
    historyScreen.textContent = "";
    isCleared = true;
    isStarting = true;
    displayScreen.textContent = 0;
    currentComputedValue = null;
    nextValue = null;
    isFinish = false;
    isLastInputOperator = true;
}
function operate(){
    nextValue = parseFloat(displayScreen.textContent);
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
    isLastInputOperator = true
    displayScreen.textContent = currentComputedValue;
    historyScreen.textContent = `${currentComputedValue}`
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

