import Phaser from 'phaser';
import Snake from './classes/Snake/Snake';
import Berry from './classes/Berry';
import Grid from './classes/Grid/Grid';
import Direction from './enumDirection';
import * as iVector2D_m from './Vector2D';

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
	keyW: Phaser.Input.Keyboard.Key;
	keyA: Phaser.Input.Keyboard.Key;
	keyS: Phaser.Input.Keyboard.Key;
	keyD: Phaser.Input.Keyboard.Key;
	constructor()
	{
		super(sceneConfig);

		this.shouldPause = false;
	}
	
	public preload()
	{
		this.graphics = this.add.graphics();
		this.snake = new Snake(this);
		this.berry = new Berry(this);
		this.grid = new Grid(this.graphics);
	}
	
	public create()
	{
		this.grid.create();
		this.snake.spawn();
		this.berry.spawn(this.snake.getBodyPositions());
		this.cameras.main.setBackgroundColor('#dedede');
		this.timer = this.time.addEvent({delay: window.moveDelay, loop: true, callback: () => this.gameUpdate()});
	}

	gameUpdate()
	{
		if(this.shouldPause)
			return;

		this.snake.update();
		if(iVector2D_m.isEqualTo(this.snake.getPosition(), this.berry.getPosition()))
		{
			this.snake.eat(this.berry);
		}
		this.berry.update(this.snake.getBodyPositions());

	}
	
	public update()
	{
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		if(this.keyW.isDown)
			this.snake.setDirection(Direction.up);
		if(this.keyA.isDown)
			this.snake.setDirection(Direction.left);
		if(this.keyS.isDown)
			this.snake.setDirection(Direction.down);
		if(this.keyD.isDown)
			this.snake.setDirection(Direction.right);
	}
}

export default GameScene