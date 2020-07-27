import Phaser from 'phaser';
import * as Renderer from '../../Renderer';

class SnakeBody
{
    private scene: Phaser.Scene;
    private body: Phaser.GameObjects.Rectangle;
    private position: {x: number, y: number};

    constructor(scene: Phaser.Scene, position: {x: number, y: number})
    {
        this.scene = scene;
        this.position = position;
    }

    spawn()
    {
        this.body = Renderer.createSquare(this.scene, this.position, 0x303030, 2, 0x808080);
    }

    setPosition(position: {x: number, y: number}) : boolean
    {
        this.position = position;
        Renderer.moveSquare(this.body, this.position);
        return true;
    }

    getPosition(): {x: number, y: number}
    {
        return this.position;
    }
}

export default SnakeBody;