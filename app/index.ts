export class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return "Hello, " + this.greeting
  }
}

export function greeter(func: (msg: string) => void) {
  let greeter = new Greeter("world!")
  func(`${greeter.constructor.name}: ${greeter.greet()}`)
}

export function print(message: string) {
  console.log(message)
}

greeter(print)
