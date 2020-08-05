export function createSquare(scene: Phaser.Scene, position: {x: number, y: number}, fillColor: number, borderWidth:number = 0, borderColor: number = 0)
{
    let square = scene.add.rectangle(0, 0, window.cellSize, window.cellSize, fillColor, 1);
    square.setVisible(false);
    
    if(borderWidth)
    square.setStrokeStyle(borderWidth, borderColor);
    
    moveSquare(square, position);
    square.setVisible(true);
    return square;
}

export function moveSquare(square: Phaser.GameObjects.Rectangle, position: {x: number, y: number})
{
    square.setPosition( window.leftPadding + (position.x + 0.5) * window.cellSize,
                        window.topPadding + (position.y + 0.5) * window.cellSize);
}