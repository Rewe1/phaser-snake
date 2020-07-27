import {RPG} from '../rpg';
import * as Renderer from '../Renderer';

class Berry
{
    private scene: Phaser.Scene;
    private position: {x: number, y: number}
    private body: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.position = RPG();
    }

    getPosition(): {x: number, y: number}
    {
        return this.position;
    }

    beEaten()
    {
        this.body.setVisible(false);
        this.respawn();
    }

    setPosition(position: {x: number, y: number})
    {
        this.position = position;
        Renderer.moveSquare(this.body, position);
    }

    respawn()
    {
        this.setPosition(RPG());
        this.body.setVisible(true);
    }

    spawn()
    {
        this.body = Renderer.createSquare(this.scene, this.position, 0xc05050, 2, 0x50c050);
    }
}

export default Berry;