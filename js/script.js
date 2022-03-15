
let numbers = Array.from(document.querySelectorAll(".numbers, .operators"));
let displayScreen = document.querySelector("#input-display");
let backspace = document.querySelector("#backspace");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal")
let input = displayScreen.textContent;
let isLastInputOperator = false;
let currentComputedValue;

backspace.addEventListener('click', function(){
    input = displayScreen.textContent.slice(0,-1);
    displayScreen.textContent = input;
})
clear.addEventListener('click', function(){
    input = ""
    displayScreen.textContent = input;
})
equal.addEventListener('click', function(){
    operate()
    console.log(currentComputedValue)
})
numbers.forEach(button=>{
    button.addEventListener('click',function(){
        if(!(isLastInputOperator &&(button.className=="operators" ))){
            displayScreen.textContent += button.textContent;
            input += button.textContent;
        }
        isLastInputOperator = button.className == "operators"? true : false;    
    })
})

function operate(){
    for (var i = 0; i < input.length; i++) {
        if((!parseInt(input[i]))&& input[i] != 0){
            currentComputedValue = currentComputedValue? currentComputedValue: getFirstNumber(i);
            let secondNumber = getSecondNumber(i);
            switch(input[i]){
                case "+":
                    currentComputedValue = add(currentComputedValue,secondNumber);
                    break;
                case "-":
                    currentComputedValue = subtract(currentComputedValue,secondNumber);
                    break;
                case "×":
                    currentComputedValue = multiply(currentComputedValue,secondNumber);
                    break;
                case "÷":
                    currentComputedValue = divide(currentComputedValue,secondNumber);
                    break;
            }
        }
      }
}
function getFirstNumber(index){
    let number = "";
    index--;
    
    while(index >=0){
        if((!parseInt(input[index]))&& input[index] != 0){
            return parseInt(number);
        }
        number = input[index]+number;
        index--;
    }

    return parseInt(number);
}
function getSecondNumber(index){
    let number = "";
    index++;
    
    while(index < input.length){
        if((!parseInt(input[index]))&& input[index] != 0){
            return parseInt(number);
        }
        number += input[index];
        index++;
    }

    return parseInt(number);
}


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

