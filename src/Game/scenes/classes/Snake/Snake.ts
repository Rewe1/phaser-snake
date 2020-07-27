import SnakeBody from './SnakeBody';
import Direction from '../../enumDirection';
import Berry from '../Berry';

class Snake
{
    private scene: Phaser.Scene;
    private bodyParts: SnakeBody[];
    private direction: Direction;
    private lastMove: Direction;
    private isAlive: boolean;
    private shouldGrow: boolean;
    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.bodyParts = [];
        this.direction = Direction.left;
        this.shouldGrow = false;
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
        for(let i = 0; i < 3; i++)
        {
            let position: iVector2D = 
            {
                x: Math.floor(window.gridSize_cells/2) + i, 
                y: Math.floor(window.gridSize_cells/2)
            }
            this.bodyParts.push(new SnakeBody(this.scene, position));
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

        if(this.shouldGrow)
        {
            console.log('Moving')
            this.bodyParts.unshift(new SnakeBody(this.scene, currentPosition));
            this.bodyParts[0].spawn();
            this.shouldGrow = false;
            console.log(this.bodyParts);
        }
        else
        {
            this.bodyParts[this.bodyParts.length -1].setPosition(currentPosition);
            this.lastMove = this.direction;
            this.bodyParts.unshift(this.bodyParts.pop());
        }

        return true;
    }

    getPosition(): {x: number, y: number}
    {
        return this.bodyParts[0].getPosition();
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

    eat(berry: Berry)
    {
        console.log('Ate');
        berry.beEaten();
        this.shouldGrow = true;
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