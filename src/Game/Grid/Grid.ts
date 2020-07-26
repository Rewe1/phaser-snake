import Phaser from 'phaser';

class Grid
{
    graphics: Phaser.GameObjects.Graphics
    constructor(graphics: Phaser.GameObjects.Graphics)
    {
        this.graphics = graphics;
    }

    create()
    {
        this.graphics.lineStyle(2, 0x808080);
        this.graphics.fillStyle(0x303030);

        

        for(let y = 0; y < window.gridSize_cells; y++)
        {
            for(let x = 0; x < window.gridSize_cells; x++)
            {
                this.graphics.strokeRect(window.leftPadding + x * window.cellSize, window.topPadding + y * window.cellSize, window.cellSize, window.cellSize);
            }
        }
    }
}

export default Grid;