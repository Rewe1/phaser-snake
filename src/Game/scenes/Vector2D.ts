class Vector2D
{
    position: iVector2D;
    constructor(position: iVector2D)
    {
        this.position = position;
    }

    isEqualTo(position: iVector2D): boolean
    {
        if(this.position.x === position.x && this.position.y === position.y)
            return true;
        else
            return false;
    }

    get(): iVector2D
    {
        return this.position;
    }

    set(position: iVector2D)
    {
        this.position = position;
    }
}

export default Vector2D;