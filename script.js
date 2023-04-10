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


getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
      } else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
      }
        if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
      } else {
      return integerDisplay
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
    case 'x':
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
           
roundNumber (number){
  return Math.round(number * 1000) / 1000;
        }


addDecimal () {
  this.currentOperand += '.';
         }
}


const decimalButton = document.querySelector('.decimal')
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

decimalButton.addEventListener('click', button => {
  calculator.addDecimal()
  calculator.updateDisplay()
})
