import {RPG} from '../rpg';
import * as Renderer from '../Renderer';
import Vector2D from '../Vector2D';

class Berry
{
    private scene: Phaser.Scene;
    private position: Vector2D;
    private body: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.position = new Vector2D(RPG());
    }

    getVector(): Vector2D
    {
        return this.position;
    }

    getPosition(): iVector2D
    {
        return this.position.get();
    }

    beEaten()
    {
        this.body.setVisible(false);
        this.respawn();
    }

    setPosition(position: iVector2D)
    {
        this.position.set(position);
        Renderer.moveSquare(this.body, position);
    }

    respawn()
    {
        this.setPosition(RPG());
        this.body.setVisible(true);
    }

    spawn()
    {
        this.body = Renderer.createSquare(this.scene, this.position.get(), 0xc05050, 2, 0x50c050);
    }
}

export default Berry;