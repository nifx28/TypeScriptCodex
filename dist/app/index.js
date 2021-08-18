"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = exports.greeter = exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
function greeter(func) {
    var greeter = new Greeter("world!");
    func(greeter.constructor.name + ": " + greeter.greet());
}
exports.greeter = greeter;
function print(message) {
    console.log(message);
}
exports.print = print;
greeter(print);
