var game = new Phaser.Game(300 ,500 , Phaser.AUTO, 'phaser', {preload: preload, create: create, update: update});

function preload() {

    game.load.crossOrigin = "anonymous";
    game.load.spritesheet('bird', 'http://s.ntustcoding.club/flappybird/bird.png', 34, 24);
    game.load.spritesheet('pipes', 'http://s.ntustcoding.club/flappybird/pipes.png', 54, 320);
    game.load.spritesheet('medals', 'http://s.ntustcoding.club/flappybird/medals.png', 44, 46);
    game.load.image('background', 'http://s.ntustcoding.club/flappybird/background.png');
    game.load.image('ground', 'http://s.ntustcoding.club/flappybird/ground.png');
    game.load.image('logo', 'http://s.ntustcoding.club/flappybird/title.png');
    game.load.image('start', 'http://s.ntustcoding.club/flappybird/start-button.png');
    game.load.image('over', 'http://s.ntustcoding.club/flappybird/gameover.png');
    game.load.image('scoreboard', 'http://s.ntustcoding.club/flappybird/scoreboard.png');

};

function create(){

};

function update(){

};