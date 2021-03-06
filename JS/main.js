let choiceFlex = document.querySelector('.choice_flex');
import {game} from './game.js';

choiceFlex.addEventListener('click',(e) => {
    game.player.selectChoice(e);
    game.computer.selectChoice();
    game.selectWinner();
})
