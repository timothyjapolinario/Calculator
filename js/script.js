
let numbersAndOperators = Array.from(document.querySelector(".numbers-operators").childNodes);
let displayScreen = document.querySelector("#input-display");
console.log(displayScreen);

numbersAndOperators.forEach(button=>{
    button.addEventListener('click',function(){
        displayScreen.textContent += button.textContent
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

