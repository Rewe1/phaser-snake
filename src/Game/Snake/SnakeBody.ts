import Phaser from 'phaser';

class SnakeBody
{
    private graphics: Phaser.GameObjects.Graphics;
    private position: {x: number, y: number};
    private body: Phaser.GameObjects.Graphics[];
    constructor(graphics, x, y)
    {
        this.graphics = graphics;
        this.position = {x: x, y: y};
        this.body = [];
    }

    spawn()
    {
        this.body.push(this.graphics.strokeRect(window.leftPadding + this.position.x * window.cellSize,
                                             window.topPadding + this.position.y * window.cellSize,
                                             window.cellSize, window.cellSize));
        this.body.push(this.graphics.fillRect(window.leftPadding + this.position.x * window.cellSize,
                                              window.topPadding + this.position.y * window.cellSize,
                                              window.cellSize, window.cellSize));
    }

    setPosition(position: {x: number, y: number}) :void
    {
        //console.log('Setting position');
        this.body.map((value: Phaser.GameObjects.Graphics) =>
        {
            value.moveTo(position.x, position.y);
        });
        this.position = position;
    }

    getPosition(): {x: number, y: number}
    {
        return this.position;
    }
}

export default SnakeBody;