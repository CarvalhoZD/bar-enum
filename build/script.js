"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Drinks_1 = require("./Drinks");
var showMenu_1 = require("./showMenu");
var Cliente_1 = require("./Cliente");
var prompt = PromptSync();
var cliente = new Cliente_1.Cliente(prompt('Digite seu nome: '), prompt('Digite sua idade: '));
console.table(cliente);
var i = 0;
var nDrinks = [];
do {
    var select = (0, showMenu_1.showMenu)();
    if (select == Drinks_1.Drinks.drink1) {
        console.log('\nVocê escolheu Batidade de Variáveis!\n\n');
    }
    i++;
    nDrinks[i];
} while (i < 2);
{
}
cliente.getDrink();
//console.log(cliente.getDrink);
