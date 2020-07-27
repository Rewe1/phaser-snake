import Phaser from 'phaser';
import Snake from './classes/Snake/Snake';
import Berry from './classes/Berry';
import Grid from './classes/Grid/Grid';
import Direction from './enumDirection';
import { Dir } from 'fs';

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
	keys: object;
	keyW: Phaser.Input.Keyboard.Key;
	keyA: Phaser.Input.Keyboard.Key;
	keyS: Phaser.Input.Keyboard.Key;
	keyD: Phaser.Input.Keyboard.Key;
	constructor()
	{
        super(sceneConfig);
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
		this.berry.spawn();
		this.cameras.main.setBackgroundColor('#dedede');
		this.timer = this.time.addEvent({delay: window.moveDelay, loop: true, callback: () => this.snake.update()});
	}
	
	public update()
	{
		this.keys = this.input.keyboard.addKeys(
			{ 
				'up': Phaser.Input.Keyboard.KeyCodes.W,
				'right': Phaser.Input.Keyboard.KeyCodes.D,
				'left': Phaser.Input.Keyboard.KeyCodes.A,
				'down': Phaser.Input.Keyboard.KeyCodes.S,
			});

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

		if(this.berry.getVector().isEqualTo(this.snake.getPosition()))
		{
			this.snake.eat(this.berry);
		}
	}
}

export default GameScene