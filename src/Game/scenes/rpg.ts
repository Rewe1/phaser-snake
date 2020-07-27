/* Random Position Generator */

export function RPG(): {x: number, y: number}
{
    let position =
    {
        x: Math.floor((Math.random()) * window.gridSize_cells),
        y: Math.floor((Math.random()) * window.gridSize_cells)
    }

    return position;
}