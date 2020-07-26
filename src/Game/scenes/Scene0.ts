import Phaser from 'phaser';
import Snake from '../Snake/Snake';
import Grid from '../Grid/Grid';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig =
{
    active: false,
    visible: false,
    key: 'Game',
};

class GameScene extends Phaser.Scene
{
	snake: Snake;
	grid: Grid;
	graphics: Phaser.GameObjects.Graphics;
	constructor()
	{
        super(sceneConfig);
	}
	
	public preload()
	{
		this.graphics = this.add.graphics();
		this.snake = new Snake(this.graphics);
		this.grid = new Grid(this.graphics);
	}
	
	public create()
	{
		this.grid.create();
        this.snake.spawn();
        this.cameras.main.setBackgroundColor('#dedede');
	}

	public update()
	{
	}
}

export default GameScene