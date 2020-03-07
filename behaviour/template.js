  
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} do ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} have ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'program creating process'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'testing process'
  }
}

const dev = new Developer('John', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Lara', 90000)
console.log(tester.getPaid())
console.log(tester.work())