//DOM selectors
const numBtn = document.querySelectorAll(`[data-number]`);
const operatorBtn = document.querySelectorAll(`[data-operator]`);
const clearButton = document.getElementById('del');
const allClearButton = document.getElementById('clear');

//Set eventlisteners

//Calculation
function add (add1,add2) {
    let addition = add1 + add2;
    return addition;
};

function subtract (sub1,sub2) {
    let subtraction = sub1 - sub2;
    return subtraction;
};

function sum(sumArr) {
    let total = 0;
    for (let i=0;i<sumArr.length;i++){
        total += sumArr[i];
    }
    return total;
};

function multiply(multiplyArr) {
    let product = 1;
    for (let i=0;i<multiplyArr.length;i++){
        product = product * multiplyArr[i];
    } 
    return product;
};

function divide(num1,num2){
    return num1/num2;
}

function power(lower,indices) {
    let exponential = lower ** indices;
    return exponential;
};

function factorial(num) {
    if (num === 0 || num ===1){
        return 1;
    } 
    for (let i=num-1;i>=1;i--){
        num = num * i;
    }
    return num;
};

function operate(num1,num2,operator){
    if(operator=="+"){
        return add(num1,num2);
    } else if (operator=="-"){
        return subtract(num1,num2);
    } else if (operator=="X"){
        return multiply(num1,num2);
    } else if (operator=="/" ){
        return divide(num1,num2);
    } 
}
