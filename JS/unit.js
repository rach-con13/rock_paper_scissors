export class Unit {
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.selected = null;  // selected choice between 3 options
        this.choices = [{
            name:'rock',
            lose:'paper',
            win:'scissors'
        },{
            name:'paper',
            lose:'scissors',
            win:'rock'
        },{
            name:"scissors",
            lose:'rock',
            win:'paper'
        }]
    }
 
}