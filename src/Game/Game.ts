import * as Phaser from 'phaser';
import StartScene from './scenes/start/StartScene';
import GameScene from './scenes/gameScene/GameScene';

window.gridSize_px = (Math.min(innerWidth, innerHeight)) -32;
window.gridSize_cells = 21;
window.cellSize = gridSize_px/ gridSize_cells;
window.leftPadding = (window.innerWidth - window.gridSize_px)/2;
window.topPadding = (window.innerHeight - window.gridSize_px)/2;
window.moveDelay = 200;
window.isPortrait = window.innerHeight > window.innerWidth ? true : false;
window.shouldStart = false;

const gameConfig: Phaser.Types.Core.GameConfig =
{
	title: 'Sample',

	type: Phaser.AUTO,

	scale:
	{
		width: window.innerWidth,
		height: window.innerHeight,
	},

	physics: 
	{
		default: 'arcade',
		arcade:
		{
			debug: true,
		},
	},

	scene: [StartScene, GameScene],

	backgroundColor: '#000000',
};

class SnakeGame extends Phaser.Game
{
	constructor()
	{
		super(gameConfig);
	}
	
	preload()
	{
	}

	create()
	{
	}

	update()
	{
	}
}

const game = new SnakeGame();
export default game;