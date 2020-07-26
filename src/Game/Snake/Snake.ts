import SnakeBody from './SnakeBody';

class Snake
{
    private graphics: Phaser.GameObjects.Graphics;
    private scene: Phaser.Scene;
    private bodyParts: SnakeBody[];
    private direction: number;
    constructor(scene: Phaser.Scene, graphics: Phaser.GameObjects.Graphics)
    {
        this.scene = scene;
        this.graphics = graphics;
        this.bodyParts = [];
        this.direction = window.LEFT_DIRECTION;
    }

    setDirection(direction: number)
    {
        this.direction = direction;
    }

    spawn() : void
    {
        this.graphics.lineStyle(2, 0x808080);
        this.graphics.fillStyle(0x303030);

        for(let i = 0; i < 3; i++)
        {
            this.bodyParts.push(new SnakeBody(this.scene, Math.floor(window.gridSize_cells/2) + i, Math.floor(window.gridSize_cells/2)));
            this.bodyParts[i].spawn();
        }
    }

    private move() : boolean
    {
        let currentPosition = this.bodyParts[0].getPosition();

        if(this.direction === window.TOP_DIRECTION)
            currentPosition.y -= 1;
        else if(this.direction === window.RIGHT_DIRECTION)
            currentPosition.x += 1;
        else if(this.direction === window.BOTTOM_DIRECTION)
            currentPosition.y += 1;
        else if(this.direction === window.LEFT_DIRECTION)
            currentPosition.x -= 1;

        if((currentPosition.x < 0 || currentPosition.x > window.gridSize_cells -1) || 
           (currentPosition.y < 0 || currentPosition.y > window.gridSize_cells -1))
            return false;

        this.bodyParts[this.bodyParts.length -1].setPosition(currentPosition);

        return true;
    }

    private headChecker() : boolean
    {
        this.bodyParts.map((part, i) =>
        {
            let headPosition = this.bodyParts[0].getPosition();
            if(i !== 0)
            {
                if(headPosition === this.bodyParts[i].getPosition())
                    return false;
            }
        })
        return true;
    }

    private die()
    {
        // Die
    }

    update() : void
    {
        if(!this.move())
            this.die();

        if(!this.headChecker())
            this.die();
        
    }
}

export default Snake;