var display = document.getElementById("display");
var point = false, calculation = false;
var addition = false, subtraction = false, multiplication = false, division = false;
var operand1 = null, operand2 = null;


function putNum(num) {
    if(num !== ".") {
        display.value += num;
    }
    else if(num === "." && point === false) {
        if(display.value.length > 0) {
            display.value += num;
            point = true;
        }
        else {
            display.value = "0.";
            point = true;
        }
    }
}


function number(btn) {
    var key = document.getElementById(btn.id).innerHTML;

    if (!calculation) {
        putNum(key);
    }
    else {
        display.value = "";
        putNum(key);
        calculation = false;
    }
    
}

function clearValue() {
    point = false;
    calculation = false;
    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
}

function allClear() {
    display.value = "";
    clearValue();
    operand1 = null;
    operand2 = null;
}

function back() {
    display.value = display.value.replace((display.value.charAt(display.value.length -1)), "");
}

function add() {
    operand2 = parseFloat(display.value);
        if(operand1 !== null && !calculation) {
            if(addition) {
                display.value = operand1 += operand2;
            }
        }
        else if(operand1 === null) {
            display.value = operand1 = operand2;
        }
        clearValue();
        addition = true;
        calculation = true;    
}


function subtract() {
    operand2 = parseFloat(display.value);
        if(operand1 !== null && !calculation) {
            if(subtraction) {
                display.value = operand1 -= operand2;
            }
        }
        else if(operand1 === null) {
            display.value = operand1 = operand2;
        }
        clearValue();
        subtraction = true;
        calculation = true;  
}


function multiply() {
    operand2 = parseFloat(display.value);
        if(operand1 !== null && !calculation) {
            if(multiplication) {
                display.value = operand1 *= operand2;
            }
        }
        else if(operand1 === null) {
            display.value = operand1 = operand2;
        }
        clearValue();
        multiplication = true;
        calculation = true;  
}


function devide() {
    operand2 = parseFloat(display.value);
        if(operand1 !== null && !calculation) {
            if(division) {
                display.value = operand1 /= operand2;
            }
        }
        else if(operand1 === null) {
            display.value = operand1 = operand2;
        }
        clearValue();
        division = true;
        calculation = true;  
}


function equal() {
    if(!calculation) {

        operand2 = parseFloat(display.value);

        if(addition) {
            display.value = operand1 += operand2;
            addition = false;
            operand1 = null;
        }
        else if(subtraction) {
            display.value = operand1 -= operand2;
            subtraction = false;
            operand1 = null;
        }
        else if(multiplication) {
            display.value = operand1 *= operand2;
            multiplication = false;
            operand1 = null;
        }
        else if(division) {
            display.value = operand1 /= operand2;
            division = false;   
            operand1 = null;
        }

        calculation = true;
    }
}