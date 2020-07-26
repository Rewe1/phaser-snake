import * as Phaser from 'phaser';
import GameScene from './scenes/scene0';

window.gridSize_px = (Math.min(innerWidth, innerHeight)) -32;
window.gridSize_cells = 21;
window.cellSize = gridSize_px/ gridSize_cells;
window.leftPadding = (window.innerWidth - window.gridSize_px)/2;
window.topPadding = (window.innerHeight - window.gridSize_px)/2;
window.TOP_DIRECTION = 0;
window.RIGHT_DIRECTION = 1;
window.BOTTOM_DIRECTION = 2;
window.LEFT_DIRECTION = 3;

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

	scene: GameScene,

	backgroundColor: '#000000',
};

const game = new Phaser.Game(gameConfig);

function preload ()
{
	this.add.image();
}

function create ()
{
}

function update ()
{
}

export default game;