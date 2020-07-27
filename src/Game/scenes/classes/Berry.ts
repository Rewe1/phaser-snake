import {RPG} from '../rpg';
import * as Renderer from '../Renderer';
import * as iVector2D_m from '../Vector2D';

class Berry
{
    private scene: Phaser.Scene;
    private position: iVector2D;
    private body: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.position = RPG();
    }

    getPosition(): iVector2D
    {
        return iVector2D_m.copy(this.position);
    }

    beEaten()
    {
        this.body.setVisible(false);
        this.respawn();
    }

    setPosition(position: iVector2D)
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