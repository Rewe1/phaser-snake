import Phaser from 'phaser';
import Snake from '../Snake/Snake';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig =
{
    active: false,
    visible: false,
    key: 'Game',
};

class GameScene extends Phaser.Scene
{
    snake: Snake;
	constructor()
	{
        super(sceneConfig);
        
        this.snake = new Snake(this);
	}

	public create()
	{
        this.snake.spawn();
        this.cameras.main.setBackgroundColor('#dedede');
	}

	public update()
	{
	}
}

export default GameScene