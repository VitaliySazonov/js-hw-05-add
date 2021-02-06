// Створити простенький калькулятор за допомогою класу.
// Цей клас буде мати такі методи:
// 1. Метод що запитує в користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арифметичної операції на екран в
// форматі <code> `Результат операції ${value}`</code>
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає
// аргументом колбек в якому описаний новий метод)
// Передати в метод №7 колбек ф-ю що підносить числа в степінь
// Написати всі методи і перевірити чи вони працюють

const power = function() {
  return this.n1 **= this.n2
}

class Calculator {
  constructor(num_1 = 0, num_2 = 0) {
    this.n1 = num_1
    this.n2 = num_2
  }
  
  getNumbers(n1 = 0, n2 = 0) {
    this.n1 = n1
    this.n2 = n2
  }
  
  add() {
    return this.n1 + this.n2
  }
  
  sub() {
    return this.n1 - this.n2
  }
  
  multiple() {
    return this.n1 * this.n2
  }
  
  division() {
    return this.n1 / this.n2
  }
  
  result(callback) {
    let value = callback.call(this)
    return console.log(`Результат операції ${value}`)
  }
}

let newCalc = new Calculator()
newCalc.getNumbers(5, 2)
newCalc.result(newCalc.add)
newCalc.result(newCalc.sub)
newCalc.result(newCalc.multiple)
newCalc.result(newCalc.division)
newCalc.result(power)
