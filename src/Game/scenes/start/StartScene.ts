import * as iVector2D_m from '../../utilities/Vector2D';

class StartScene extends Phaser.Scene
{
    startButton: Phaser.GameObjects.Rectangle;
    constructor()
    {
        super('Start');
    }

    create()
    {
		this.cameras.main.setBackgroundColor('#dedede');
        this.startButton = this.add.rectangle(window.innerWidth/2, window.innerHeight/2, 192, 64, 0x808080);
        this.startButton.setInteractive();
        this.startButton.on('pointerdown', () =>
        {
            this.scene.start('Game');
        });
        this.add.text(window.innerWidth/2 -192/2, window.innerHeight/2 -64/2, 'Start Game',
        {
            fontSize: 22,
            fixedWidth: 192,
            padding:
            {
                top: 64/2 - 22/2,
            },
            align: 'center',
            maxLines: 0,
        });
    }

    update()
    {
    }
}

export default StartScene;