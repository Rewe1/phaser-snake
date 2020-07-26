import SnakeBody from './SnakeBody';

class Snake
{
    scene: Phaser.Scene;
    graphics: Phaser.GameObjects.Graphics;
    bodyParts: SnakeBody[];
    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.bodyParts = [];
    }

    spawn() : void
    {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, 0x808080);
        this.graphics.fillStyle(0x303030);

        for(let i = 0; i < 3; i++)
        {
            this.bodyParts.push(new SnakeBody(this.graphics, i, 0));
            this.bodyParts[i].spawn();
        }
    }

    update() : void
    {

    }
}

export default Snake;