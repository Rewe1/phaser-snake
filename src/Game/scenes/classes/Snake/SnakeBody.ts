import Phaser from 'phaser';
import * as Renderer from '../../Renderer';
import * as iVector2D_m from '../../Vector2D';

class SnakeBody
{
    private scene: Phaser.Scene;
    private body: Phaser.GameObjects.Rectangle;
    private position: iVector2D;

    constructor(scene: Phaser.Scene, position: iVector2D)
    {
        this.scene = scene;
        this.position = position;
    }

    spawn()
    {
        this.body = Renderer.createSquare(this.scene, this.position, 0x303030, 2, 0x808080);
    }

    setPosition(position: iVector2D)
    {
        this.position = position;
        Renderer.moveSquare(this.body, this.position);
    }

    getPosition(): iVector2D
    {
        return iVector2D_m.copy(this.position);
    }
}

export default SnakeBody;