import Phaser from 'phaser';

class SnakeBody
{
    private scene: Phaser.Scene;
    private position: {x: number, y: number};
    private body: Phaser.GameObjects.Rectangle;
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.scene = scene;
        this.position = {x: x, y: y};
    }

    spawn()
    {
        this.body = this.scene.add.rectangle(0, 0, window.cellSize, window.cellSize, 0x303030, 1);
        this.body.setPosition(this.position.x, this.position.y);
        this.body.setStrokeStyle(2, 0x808080);
    }

    setPosition(position: {x: number, y: number}) :void
    {
        this.body.setPosition(window.leftPadding + (position.x + 0.5) * window.cellSize,
                              window.topPadding + (position.y + 0.5) * window.cellSize);
        this.position = position;
    }

    getPosition(): {x: number, y: number}
    {
        return this.position;
    }
}

export default SnakeBody;