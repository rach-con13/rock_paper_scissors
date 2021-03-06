let choiceFlex = document.querySelector('.choice_flex');
let selectedPhrase = document.querySelector('.selected_phrase');
import {Unit} from './unit.js';
export class Player extends Unit {
    constructor() {
       super();
    }
    selectChoice = (e) => {
  
        let choiceDIV = e.target.closest('.choice');
   
        
        
        let selectedChoice = this.choices.filter(choice => choiceDIV.dataset.name == choice.name)[0];
    
        this.selected = selectedChoice;
   
        
        let choices = Array.from(choiceFlex.children);
        choices.forEach(choice => {
            choice.dataset.name == this.selected.name ? choice.classList.add('selected_choice') : choice.classList.remove('selected_choice')
        })
        this.selectPhrase();
    }
    selectPhrase = () => {
        // let phrase = `You selected ${this.selected.name}`;
        let phrase = `<p class="move">${this.selected.name}</p><p class="unit">player</p>`
        selectedPhrase.style.display = 'block';
        selectedPhrase.innerHTML = phrase;
    }
}