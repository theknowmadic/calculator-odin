const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete-btn');
const allClearButton = document.querySelector('.clear-btn');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
       }

clear() {
   this.currentOperand = ''
   this.previousOperand = ''
   this.operation = undefined
       }

updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperand;
       }


appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
       }

chooseOperation(operation) {
   if (this.currentOperand === '') return
   if (this.previousOperand !== '') {
   this.compute()
       }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
       }


}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

 numberButtons.forEach(button => {
  button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
  })
})

  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})






