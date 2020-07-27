import Phaser from 'phaser';

class SnakeBody
{
    private scene: Phaser.Scene;
    private body: Phaser.GameObjects.Rectangle;
    private position: {x: number, y: number};

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.scene = scene;
        this.position =
        {
            x: x,
            y: y
        };
    }

    spawn()
    {
        this.body = this.scene.add.rectangle(0, 0, window.cellSize, window.cellSize, 0x303030, 1);
        this.setPosition(this.position);
        this.body.setStrokeStyle(2, 0x808080);
    }

    setPosition(position: {x: number, y: number}) : boolean
    {
        console.log('Setting position');
        console.log(position);

        this.position = position;
        this.body.setPosition(window.leftPadding + (this.position.x + 0.5) * window.cellSize,
                              window.topPadding + (this.position.y + 0.5) * window.cellSize);
        return true;
    }

    getPosition(): {x: number, y: number}
    {
        return this.position;
    }
}

export default SnakeBody;