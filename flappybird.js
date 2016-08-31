var game = new Phaser.Game(300 ,500 , Phaser.AUTO, 'phaser', {preload: preload, create: create, update: update});

function preload() {

    game.load.spritesheet('fish','assets/flappy/bird.png',34,24);
    game.load.image('background', 'assets/flappy/background.png');
    game.load.spritesheet('pipes_up', 'assets/flappy/pipes.png',54, 320);
    game.load.spritesheet('pipes_down', 'assets/flappy/pipes.png',54,320,2);
    game.load.image('ground', 'assets/flappy/ground.png');
    game.load.image('logo', 'assets/flappy/title.png');
    game.load.image('start', 'assets/flappy/start-button.png');
    game.load.image('over', 'assets/flappy/gameover.png');
    game.load.image('scoreboard', 'assets/flappy/scoreboard.png');
};

function create(){

};

function update(){

};