import * as Phaser from 'phaser';
import GameScene from './scenes/scene0';

window.gridSize_px = (Math.min(innerWidth, innerHeight)) -32;
window.gridSize_cells = 21;
window.cellSize = gridSize_px/ gridSize_cells;
window.leftPadding = (window.innerWidth - window.gridSize_px)/2;
window.topPadding = (window.innerHeight - window.gridSize_px)/2;
window.moveDelay = 100;
window.isPortrait = window.innerHeight > window.innerWidth ? true : false;

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