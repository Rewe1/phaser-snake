import * as Renderer from '../../Renderer';
import * as iVector2D_m from '../../Vector2D';

class Berry
{
    private scene: Phaser.Scene;
    private position: iVector2D;
    private body: Phaser.GameObjects.Rectangle;
    private wasEaten: boolean;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.position = {x:0, y:0};
        this.wasEaten = false;
    }

    getPosition(): iVector2D
    {
        return iVector2D_m.copy(this.position);
    }

    beEaten()
    {
        this.body.setVisible(false);
        this.wasEaten = true;
    }

    isEaten(): boolean
    {
        return this.wasEaten;
    }

    getValidPosition(snakeBodyPositions: iVector2D[]): iVector2D
    {
        let pos = iVector2D_m.RVG();

        for(let i = 0; i < snakeBodyPositions.length; i++)
        {
            if(iVector2D_m.isEqualTo(pos, snakeBodyPositions[i]))
            {
                pos = iVector2D_m.RVG();
                i = -1;
            }
        }
        return pos;
    }

    setPosition(position: iVector2D)
    {
        this.position = position;
        Renderer.moveSquare(this.body, position);
    }

    respawn(snakeBodyPositions: iVector2D[])
    {
        this.setPosition(this.getValidPosition(snakeBodyPositions));
        this.body.setVisible(true);
        this.wasEaten = false;
    }

    spawn(snakeBodyPositions: iVector2D[])
    {
        this.position = this.getValidPosition(snakeBodyPositions);
        this.body = Renderer.createSquare(this.scene, this.position, 0xc03030, 2, 0x307030);
    }

    update(snakeBodyPositions: iVector2D[])
    {
		if(this.wasEaten)
            this.respawn(snakeBodyPositions);
    }
}

export default Berry;