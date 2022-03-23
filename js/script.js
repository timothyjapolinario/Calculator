
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
let isEqualPressed = false
backspace.addEventListener('click', function(){
    textInput = displayScreen.textContent.slice(0,-1);
    if(!historyScreen.textContent.slice(-1).match(/[\+ \- \× \÷]/g)){
        displayScreen.textContent = textInput?textInput:0;
    }
    historyScreen.textContent = historyScreen.textContent.slice(0,-1);
    
})
clearButton.addEventListener('click', function(){
    clearDisplay();
    clear();
})
equalButton.addEventListener('click', function(){
    if(isLastInputOperator){}else{
        operate();
        isEqualPressed = true;
        isLastInputOperator = false;
    }
})
numbers.forEach(button=>{
    button.addEventListener('click', function(e){
        //if last input is not operator
        if(isLastInputOperator){
           clearDisplay(); 
           isLastInputOperator = false;
        }
        if(button.textContent == "."){
            if(!displayScreen.textContent.includes(".")){
                displayScreen.textContent += button.textContent;
                historyScreen.textContent += button.textContent;
            }
            return;
        }
        if(displayScreen.textContent.length < 20){
            if(displayScreen.textContent == "0"){
                clearDisplay();
            }
            displayScreen.textContent += button.textContent;
            historyScreen.textContent += button.textContent;
        }
        button.prevent
        isEqualPressed = false
    })
})
operators.forEach(operator=>{
    operator.addEventListener('click', function(){
        //Replace the current selected operator
        if(historyScreen.textContent.slice(-1).match(/[\+ \- \× \÷]/g)){
            selectedOperator = operator;
            historyScreen.textContent = historyScreen.textContent.slice(0,-1) + operator.textContent;
            return;
        }
        //Chain operator
        if((historyScreen.textContent.match(/[\+ \- \× \÷]/g) || []).length > 0){
            operate();
        }
        selectedOperator = operator;
        historyScreen.textContent += operator.textContent;
        
        //if there is no computedValue yet, get content
        if(!currentComputedValue || nextValue == null){
            currentComputedValue = parseFloat(displayScreen.textContent);
        }else{
            displayScreen.textContent = currentComputedValue;
        }
        isLastInputOperator = true;
        isEqualPressed = false;
    })
})



function clearDisplay(){
    displayScreen.textContent = ""
}
function clear(){
    historyScreen.textContent = "";
    isCleared = true;
    displayScreen.textContent = 0;
    currentComputedValue = null;
    selectedOperator = null;    
    nextValue = null;
    isFinish = false;
    isLastInputOperator = true;
}
function operate(){
    if(!isEqualPressed){
        nextValue = parseFloat(displayScreen.textContent);
    }
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

