import {Player} from './player.js';
import {Computer} from './computer.js';
let winnerPhrase = document.querySelector('.winner_phrase');
class Game {
    constructor(rounds) {
        this.rounds = rounds;
        this.isOver = false;
        this.winner = null;
        this.player = new Player();
        this.computer = new Computer();

    }
    init = () => {
        this.reset();
    }
    reset = () => {
        this.rounds = rounds;
        this.isOver = false;
        this.winner = null;
    }
    selectWinner = () => {
        let playerChoice = this.player.selected;
        let computerChoice = this.computer.selected;
       
         if(playerChoice.win == computerChoice.name) {
            this.winner = 'player';
            winnerPhrase.innerHTML = `Player wins`;
        } else if(playerChoice.lose == computerChoice.name) {
            this.winner = 'computer';
            winnerPhrase.innerHTML = `Computer wins`;
        } else {
            this.winner = 'tie';
            winnerPhrase.innerHTML = 'Tie Game'
        }
      

      
    }
}
export let game = new Game(5);