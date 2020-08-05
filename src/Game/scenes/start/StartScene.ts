class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('Start');
    }

    create()
    {
        this.add.text(16, 16, 'Start Scene started...');
    }

    update()
    {
        if(window.shouldStart)
            this.scene.start('Game');
    }
}

export default StartScene;