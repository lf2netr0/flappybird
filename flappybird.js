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

var pipesUp = new Array();
var pipesDown = new Array();
var score = 0;

function create(){
    background = game.add.tileSprite(0, 0, 300, 500, 'background');

    ground = game.add.tileSprite(0, 400, 335, 112, 'ground');
    ground.autoScroll(-200, 0);
    game.physics.enable(ground, Phaser.Physics.ARCADE);

    bird = game.add.sprite(125, 250, 'bird');
    game.physics.enable(bird, Phaser.Physics.ARCADE);
    bird.body.gravity.y = 1200;

    generatePipes();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    logo = game.add.sprite(60, 100, 'logo');
    button = game.add.button(100, 250, 'start', startGame);
    gamePause();

};

function update(){

    game.physics.arcade.overlap(bird,  pipesUp, dead, null, this);
    game.physics.arcade.overlap(bird,  pipesDown, dead, null, this);
    game.physics.arcade.overlap(bird,  ground, dead, null, this);

    if(bird.alive){
        if (jumpButton.isDown || game.input.activePointer.leftButton.isDown)
        {
            bird.body.velocity.y = -350;
        }

        for(var i = 0;i < 2;i++){
            if(pipesUp[i].body.x < -100){
                var position = 180 * Math.random();
                pipesUp[i].body.x = 300;
                pipesUp[i].body.y = -270 + position;
                pipesDown[i].body.x = 300;
                pipesDown[i].body.y = 190 + position;
                score += 1;
            }
        }
    }

};

function generatePipes(){

    for(var i = 0;i < 2;i++){

        var position = 180 * Math.random();
        var pipesup = game.add.sprite(300 + i*200, -270 + position, 'pipes');
        var pipesdown = game.add.sprite(300 + i*200, 190 + position, 'pipes', 1);
        game.physics.enable(pipesup, Phaser.Physics.ARCADE);
        game.physics.enable(pipesdown, Phaser.Physics.ARCADE);
        pipesup.body.velocity.x = -100;
        pipesdown.body.velocity.x = -100;

        pipesUp.push(pipesup);
        pipesDown.push(pipesdown);

    }
    

}

function dead(){

    bird.destroy();
    over = game.add.sprite(55, 100, 'over');
    over.bringToTop();
    scoreboard = game.add.sprite(35, 150, 'scoreboard');
    var style = { font: 'bold 50pt Arial', fill: 'white', align: 'left'};
    var text = game.add.text(175, 190, score, style);
    if (score >= 10 && score < 20){
        medals = game.add.sprite(63, 193, 'medals');
    }
    else if(score >=20){
        medals = game.add.sprite(63, 193, 'medals', 1);
    }

}   

function gamePause() {

    game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;

}

function startGame(){

    logo.kill();
    button.kill();
    gamePause();

}