const add = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

const subtract = (num1, num2) => {
    const difference = num1 - num2
    return difference
}

const divide = (num1, num2) => {
    const quotient = num1 / num2
    return quotient
}

const multiply = (num1, num2) => {
    const product = num1 * num2
    return product
}

const square = (num) => {
    const squared = num * num
    return squared
}

const calcAdd = add(4, 6)
console.log(calcAdd)

const calcSubtract = subtract(29, 5)
console.log(calcSubtract)

const calcDivide = divide(24, 4)
console.log(calcDivide)

const calcMultiply = multiply(4, 2)
console.log(calcMultiply)

const calcSquare = square(8)
console.log(calcSquare)

