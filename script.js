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
    var result = x/y;
    return result.toFixed(2);
}

var var1 = "";
var operator = "";
var var2 = "";

function operate(var1, operator, var2) {
    var returnVal;
    if (operator === "+"){
        returnVal = add(var1, var2);
    }
    else if (operator === "-"){
        returnVal = subtract(var1, var2);
    }
    else if (operator === "*"){
        returnVal = multiply(var1, var2);
    }
    else {
        returnVal = divide(var1, var2);
    }

    return returnVal;
}

var operator_exist = false;

const display = document.querySelector("div.display");
const num_buttons_list = document.querySelectorAll("button.number");
const operator_buttons_list = document.querySelectorAll("button.operator");

num_buttons_list.forEach(num => {
    num.addEventListener("click", function(){
        display.textContent = display.textContent + this.textContent;
        if (!operator_exist){
            var1 = var1 + this.textContent;
        }
        else {
            var2 = var2 + this.textContent;
        }
    })
})

operator_buttons_list.forEach(operator_node => {
    operator_node.addEventListener("click", function() {
        if(!operator_exist && !(this.textContent === "=")){
            display.textContent = display.textContent + this.textContent;
            operator_exist = true;
            operator = this.textContent;
        }
        else if (var2 !== ""){
            var result = operate(parseInt(var1),operator,parseInt(var2));
            if(this.textContent === "="){
                display.textContent = result.toString();
                operator_exist = false;
            }
            else {
                display.textContent = result.toString() + this.textContent;
                operator = this.textContent;
            }
            var1 = result.toString();
            var2 = "";
        }
    })
})




