/* iVector2D methods */

export function isEqualTo(vector0: iVector2D, vector1: iVector2D): boolean
{
    if(vector0.x === vector1.x && vector0.y === vector1.y)
        return true;
    else
        return false;
}

export function copy(vector: iVector2D)
{
    return {
        x: vector.x,
        y: vector.y
    };
}