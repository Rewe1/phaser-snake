import * as Phaser from 'phaser';
import GameScene from './scenes/scene0';

window.gridSize_px = Math.min(innerWidth, innerHeight);
window.gridSize_cells = 10;
window.cellSize = gridSize_px/ gridSize_cells;

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