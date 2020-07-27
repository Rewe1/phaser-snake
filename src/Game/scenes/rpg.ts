/* Random Position Generator */

export function RPG(): iVector2D
{
    let position =
    {
        x: Math.floor((Math.random()) * window.gridSize_cells),
        y: Math.floor((Math.random()) * window.gridSize_cells)
    }

    return position;
}