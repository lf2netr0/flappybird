var game = new Phaser.Game(300 ,500 , Phaser.AUTO, 'phaser', {preload: preload, create: create, update: update});

function preload() {

    game.load.spritesheet('bird', 'flappy/bird.png', 34, 24);
    game.load.spritesheet('pipesUp', 'flappy/pipes.png', 54, 320);
    game.load.spritesheet('pipesDown', 'flappy/pipes.png', 54, 320, 2);
    game.load.image('background', 'flappy/background.png');
    game.load.image('ground', 'flappy/ground.png');
    game.load.image('logo', 'flappy/title.png');
    game.load.image('start', 'flappy/start-button.png');
    game.load.image('over', 'flappy/gameover.png');
    game.load.image('scoreboard', 'flappy/scoreboard.png');
};

var pipesUp = new Array();
var pipesDown = new Array();

function create(){
	background = game.add.tileSprite(0, 0, 300, 500, 'background');
	background.fixedToCamera = true;

	ground = game.add.tileSprite(0, 400, 335, 112, 'ground');
	ground.autoScroll(-200, 0);
	game.physics.enable(ground, Phaser.Physics.ARCADE);

	bird = game.add.sprite(125, 250, 'bird');
	game.physics.enable(bird, Phaser.Physics.ARCADE);
	bird.body.gravity.y = 1200;

	generatePipes();

	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

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
			}
		}
	}

};

function generatePipes(){

	for(var i = 0;i < 2;i++){

		var position = 180 * Math.random();
		var pipesup = game.add.sprite(300 + i*200, -270 + position, 'pipesUp');
		var pipesdown = game.add.sprite(300 + i*200, 190 + position, 'pipesDown', 1);
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

}