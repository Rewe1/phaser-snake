import SnakeBody from './SnakeBody';

class Snake
{
    graphics: Phaser.GameObjects.Graphics;
    bodyParts: SnakeBody[];
    constructor(graphics: Phaser.GameObjects.Graphics)
    {
        this.graphics = graphics;
        this.bodyParts = [];
    }

    spawn() : void
    {
        this.graphics.lineStyle(2, 0x333);
        this.graphics.fillStyle(0x303030);

        for(let i = 0; i < 3; i++)
        {
            this.bodyParts.push(new SnakeBody(this.graphics, Math.floor(window.gridSize_cells/2) + i, Math.floor(window.gridSize_cells/2)));
            this.bodyParts[i].spawn();
        }
    }

    update() : void
    {

    }
}

export default Snake;