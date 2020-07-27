class Berry
{
    scene: Phaser.Scene;
    position: {x: number, y: number}

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.scene = scene;
        this.position = {x: x, y: y};
    }
}

export default Berry;