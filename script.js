


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
  this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
    this.previousOperandTextElement.innerText =
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}` 
      } else {
        this.previousOperandTextElement.innerText = ''
      } 
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


compute() {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
      default:
      return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
        }

delete() {
  this.currentOperand = this.currentOperand.toString().slice(0, -1)
}


}


const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete-btn');
const allClearButton = document.querySelector('.clear-btn');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

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



equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})



allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})


deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

