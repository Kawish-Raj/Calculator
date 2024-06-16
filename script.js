function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x/y;
}

var var1, operator, var2;

function operate(var1, operator, var2) {
    var returnVal;
    if (operator === "add"){
        returnVal = add(var1, var2);
    }
    else if (operator === "subtract"){
        returnVal = subtract(var1, var2);
    }
    else if (operator === "multiply"){
        returnVal = multiply(var1, var2);
    }
    else {
        returnVal = divide(var1, var2);
    }
}