class UI
{
    private scene: Phaser.Scene;
    private scoreText: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;

        this.scoreText = this.createText(
            {
                x: window.isPortrait ? window.leftPadding : window.leftPadding + window.gridSize_px +16,
                y: window.isPortrait ? window.topPadding - 21 - 16 : window.topPadding,
            });
    }

    createText(position: iVector2D, text: string = '', size_px: string = '21px', font: string = 'sans-serif', color: number = 0x303030)
    {
        let textObj = this.scene.add.text(position.x, position.y, text, 
        {
            font: `${size_px} ${font}`, 
            fill: color
        });

        return textObj;
    }

    updateText(textObj: Phaser.GameObjects.Text, text: string)
	{
		textObj.setText(text);
    }
    
    updateScoreText(score: number)
    {
        this.scoreText.setText(`Score: ${score}`);
    }
}

export default UI;