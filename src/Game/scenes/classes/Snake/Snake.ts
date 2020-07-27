import SnakeBody from './SnakeBody';
import Direction from '../../enumDirection';

class Snake
{
    private graphics: Phaser.GameObjects.Graphics;
    private scene: Phaser.Scene;
    private bodyParts: SnakeBody[];
    private direction: Direction;
    private lastMove: Direction;
    private isAlive: boolean;
    constructor(scene: Phaser.Scene, graphics: Phaser.GameObjects.Graphics)
    {
        this.scene = scene;
        this.graphics = graphics;
        this.bodyParts = [];
        this.direction = Direction.left;
        this.isAlive = true;
    }

    setDirection(direction: Direction)
    {
        if( (this.lastMove === Direction.left && direction === Direction.right) ||
            (this.lastMove === Direction.right && direction === Direction.left) ||
            (this.lastMove === Direction.up && direction === Direction.down) ||
            (this.lastMove === Direction.down && direction === Direction.up))
            return;

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

        if(this.direction === Direction.up)
            currentPosition.y -= 1;
            else if(this.direction === Direction.left)
                currentPosition.x -= 1;
                else if(this.direction === Direction.down)
                currentPosition.y += 1;
                    else if(this.direction === Direction.right)
                        currentPosition.x += 1;

        if((currentPosition.x < 0 || currentPosition.x > window.gridSize_cells -1) || 
           (currentPosition.y < 0 || currentPosition.y > window.gridSize_cells -1))
            return false;

        this.bodyParts[this.bodyParts.length -1].setPosition(currentPosition);
        this.lastMove = this.direction;
        this.bodyParts.unshift(this.bodyParts.pop());

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
        this.isAlive = false;
    }

    update() : void
    {
        if(!this.isAlive)
            return;

        if(!this.move())
            this.die();

        if(!this.headChecker())
            this.die();
        
    }
}

export default Snake;