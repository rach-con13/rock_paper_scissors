let choiceFlex = document.querySelector('.choice_flex');
let selectedPhrase = document.querySelector('.selected_phrase');
export class Player {
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.selected = null;  // selected choice between 3 options
        this.choices = ['rock','paper','scissors']
    }
    selectChoice = (e) => {
        let rand = Math.floor(Math.random()*this.choices.length);
        let choice = this.choices[rand];
        let choiceDIV = e.target.closest('.choice');
        let name = choiceDIV.dataset.name;
        this.selected = choiceDIV;
     
        
        let choices = Array.from(choiceFlex.children);
        choices.forEach(choice => {
            choice.dataset.name == this.selected.dataset.name ? choice.classList.add('selected_choice') : choice.classList.remove('selected_choice')
        })
        this.selectPhrase();
    }
    selectPhrase = () => {
        let phrase = `You selected ${this.selected.dataset.name}`;
        selectedPhrase.style.display = 'block';
        selectedPhrase.innerHTML = phrase;
    }
}