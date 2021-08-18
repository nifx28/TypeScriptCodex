class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return "Hello, " + this.greeting
  }
}

let test = new Greeter("world!")
console.log(test.greet())
