class Calculator{
    constructor(prevOperad, currentOprerand){
        this.prevOperad = prevOperad;
        this.currentOprerand = currentOprerand;
    }
    clear() {

    }

    delete() {

    }

    appendNumber() {

    }

    chooseOperation() {

    }

    compute() {

    }

    getDisplayNumber() {

    }

    updateDisplay() {

    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const oprerationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
//console.log(allClearButton);

const calulator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
    button.addEventListener("click", function(){
        console.log(button.innerText);
    })
})