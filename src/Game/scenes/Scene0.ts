import Phaser from 'phaser';
import Snake from './classes/Snake/Snake';
import Berry from './classes/Berry';
import Grid from './classes/Grid/Grid';
import Direction from './enumDirection';
import * as iVector2D_m from './Vector2D';
import UI from './classes/UI';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig =
{
    active: true,
    visible: false,
    key: 'Game',
};

class GameScene extends Phaser.Scene
{
	snake: Snake;
	berry: Berry;
	grid: Grid;
	graphics: Phaser.GameObjects.Graphics;
	timer: Phaser.Time.TimerEvent;
	shouldPause: boolean;
	isPaused: boolean;
	cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
	keyW: Phaser.Input.Keyboard.Key;
	keyA: Phaser.Input.Keyboard.Key;
	keyS: Phaser.Input.Keyboard.Key;
	keyD: Phaser.Input.Keyboard.Key;
	keyP: Phaser.Input.Keyboard.Key;
	keyR: Phaser.Input.Keyboard.Key;
	score: number;
	userInterface: UI;
	constructor()
	{
		super(sceneConfig);

		this.shouldPause = false;
		this.score = 0;
	}
	
	public preload()
	{
		this.graphics = this.add.graphics();
		this.userInterface = new UI(this);
		this.snake = new Snake(this);
		this.berry = new Berry(this);
		this.grid = new Grid(this.graphics);
	}
	
	public create()
	{
		this.userInterface.updateScoreText(this.score);
		this.grid.create();
		this.snake.spawn();
		this.berry.spawn(this.snake.getBodyPositions());
		this.cameras.main.setBackgroundColor('#dedede');
		this.timer = this.time.addEvent({delay: window.moveDelay, loop: true, callback: () => this.gameUpdate()});
		
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.cursorKeys = this.input.keyboard.createCursorKeys();
	}

	gameUpdate()
	{
		this.isPaused = this.shouldPause;

		if(this.isPaused)
			return;

		this.snake.update();
		if(iVector2D_m.isEqualTo(this.snake.getPosition(), this.berry.getPosition()))
		{
			this.snake.eat(this.berry);
			this.score++;
			this.userInterface.updateScoreText(this.score);
		}
		this.berry.update(this.snake.getBodyPositions());

	}
	
	public update()
	{
		if(this.keyW.isDown || this.cursorKeys.up.isDown)
			this.snake.setDirection(Direction.up);
		if(this.keyA.isDown || this.cursorKeys.left.isDown)
			this.snake.setDirection(Direction.left);
		if(this.keyS.isDown || this.cursorKeys.down.isDown)
			this.snake.setDirection(Direction.down);
		if(this.keyD.isDown || this.cursorKeys.right.isDown)
			this.snake.setDirection(Direction.right);
	}
}

export default GameScene