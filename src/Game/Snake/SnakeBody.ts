import Phaser from 'phaser';

class SnakeBody
{
    graphics: Phaser.GameObjects.Graphics;
    position: {x: number, y: number};
    constructor(graphics, x, y)
    {
        this.graphics = graphics;
        this.position = {x: x, y: y};
    }

    spawn()
    {
        this.graphics.strokeRect(window.leftPadding + this.position.x * cellSize, window.topPadding + this.position.y * cellSize, cellSize, cellSize)
    }

    move(position: {x: number, y: number}) :void
    {
        this.position = position;
    }
}

export default SnakeBody;