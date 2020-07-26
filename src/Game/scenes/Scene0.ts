import Phaser from 'phaser';

let sceneConfig: Phaser.Types.Scenes.SettingsConfig =
{
    active: false,
    visible: false,
    key: 'Game',
};

class Snake
{
    private squares: Phaser.GameObjects.Rectangle[];
    constructor()
    {
        for(let i = 0; i < 3; i++)
        {
            this.squares[i] = new Phaser.GameObjects.Rectangle(new GameScene, 100, 100);
        }
    }
}

class GameScene extends Phaser.Scene
{
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

	constructor()
	{
		super(sceneConfig);
	}

	public create()
	{
        this.square = this.add.rectangle(window.innerWidth/2, window.innerHeight/2, 100, 100, 0xFFFFFF) as any;
        this.add.rectangle(0, 0, 200, 200, 0, 1);
        this.physics.add.existing(this.square);
        this.cameras.main.setBackgroundColor('#dedede');
	}

	public update()
	{
		const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        } else {
            this.square.body.setVelocityY(0);
        }
        
        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        } else {
            this.square.body.setVelocityX(0);
        }
	}
}

export default GameScene