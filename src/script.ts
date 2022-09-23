import PromptSync = require('prompt-sync')
import { Drinks } from './Drinks';
import { Menu } from "./Menu"
import { showMenu } from "./showMenu"
import { Cliente } from "./Cliente"

const prompt = PromptSync();

const cliente = new Cliente(prompt('Digite seu nome: '),prompt('Digite sua idade: '))

console.table(cliente);

let i = 0

let nDrinks = []

do {

const select = showMenu()

if (select == Drinks.drink1) {
    console.log('\nVocê escolheu Batidade de Variáveis!\n\n');
}
if (select == Drinks.drink2) {
    console.log('\nVocê escolheu Lagoa TypeS!\n\n');
}
if (select == Drinks.drink3) {
    console.log('\nVocê escolheu Gin Const!\n\n');
}
if (select == Drinks.drink4) {
    console.log('\nVocê escolheu Console.Vinho!\n\n');
}





i++
nDrinks [i]

} while (i < 2){
    
}


cliente.endInteraction();
