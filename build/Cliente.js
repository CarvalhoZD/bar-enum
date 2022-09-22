"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(name, age) {
        this.name = name;
        this.age = age;
    }
    Cliente.prototype.getI = function (nome) {
        this.name;
        console.log("O bar dos Devs agradece a sua presença, espero que não tenha travado");
    };
    return Cliente;
}());
exports.Cliente = Cliente;
