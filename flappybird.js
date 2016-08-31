var game = new Phaser.Game(300 ,500 , Phaser.AUTO, 'phaser', {preload: preload, create: create, update: update});

function preload() {

    game.load.spritesheet('fish', 'flappy/bird.png', 34, 24);
    game.load.spritesheet('pipesUp', 'flappy/pipes.png', 54, 320);
    game.load.spritesheet('pipesDown', 'flappy/pipes.png', 54, 320, 2);
    game.load.image('background', 'flappy/background.png');
    game.load.image('ground', 'flappy/ground.png');
    game.load.image('logo', 'flappy/title.png');
    game.load.image('start', 'flappy/start-button.png');
    game.load.image('over', 'flappy/gameover.png');
    game.load.image('scoreboard', 'flappy/scoreboard.png');
};

function create(){

};

function update(){

};