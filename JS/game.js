import {Player} from './player.js';

class Game {
    constructor(rounds) {
        this.rounds = rounds;
        this.isOver = false;
        this.winner = null;
        this.player = new Player();

    }
    init = () => {
        this.reset();
    }
    reset = () => {
        this.rounds = rounds;
        this.isOver = false;
        this.winner = null;

    }
}
export let game = new Game(5);