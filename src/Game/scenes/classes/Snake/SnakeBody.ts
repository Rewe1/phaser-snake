import Phaser from 'phaser';
import * as Renderer from '../../Renderer';
import Vector2D from '../../Vector2D';

class SnakeBody
{
    private scene: Phaser.Scene;
    private body: Phaser.GameObjects.Rectangle;
    private position: Vector2D;

    constructor(scene: Phaser.Scene, position: iVector2D)
    {
        this.scene = scene;
        this.position = new Vector2D(position);
    }

    spawn()
    {
        this.body = Renderer.createSquare(this.scene, this.position.get(), 0x303030, 2, 0x808080);
    }

    setPosition(position: iVector2D) : boolean
    {
        this.position.set(position);
        Renderer.moveSquare(this.body, this.position.get());
        return true;
    }

    getVector(): Vector2D
    {
        return this.position;
    }

    getPosition(): iVector2D
    {
        return this.position.get();
    }
}

export default SnakeBody;