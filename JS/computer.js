import {Unit} from './unit.js';
let computerPhrase = document.querySelector('.computer_phrase');
export class Computer extends Unit {
    constructor() {
        super();
    }
    selectChoice = () => {
        let rand = Math.floor(Math.random()*this.choices.length);
        let choice = this.choices[rand];
        this.selected = choice;
        console.log(choice);
        this.selectPhrase();

    }
    selectPhrase = () => {
        computerPhrase.innerHTML = `<p class="move">${this.selected.name}</p><p class="unit">computer</p>`;
        computerPhrase.style.display = 'block';
    }
}