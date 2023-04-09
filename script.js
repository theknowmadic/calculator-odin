const numberButtons = document.querySelectorAll('.btn.number');
const operationsButtons = document.querySelectorAll('.btn.operator');
const equalsButton = document.querySelector('.btn.equal');
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
}
