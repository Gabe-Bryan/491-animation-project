class Lunk{
    static FRAME_TIME = [15, 10, 20, 10];
    static FRAMES = [
        {x:  311, y: 139},
        {x:  355, y: 139},
        {x:  333, y: 139},
        {x:  395, y: 139},
    ];/*
    static FRAMES = [
        {x: 283, y: 170},
        {x: 314, y: 170},
        {x: 383, y: 170},
        {x: 383, y: 170},
    ]*/

    constructor(game, x, y){
        Object.assign(this, {game, x, y});
        this.game = game;
        this.x = x;
        this.y = y;
        this.currentFrame = 0;
        this.currentFTime = Lunk.FRAME_TIME[0];
        this.setupFrames();
    }

    update(){
        this.currentFTime--;
        if(this.currentFTime <= 0){
            this.currentFrame = this.currentFrame + 1 >= Lunk.FRAMES.length ? 0 : this.currentFrame + 1;
            this.currentFTime = Lunk.FRAME_TIME[this.currentFrame];
        }
    }

    draw(ctx){
        ctx.imageSmoothingEnabled = false;
        let frame = Lunk.FRAMES[this.currentFrame];
        ctx.drawImage(this.spriteSheet, frame.x, frame.y, 16, 20, this.x, this.y, 160, 200);
        ctx.restore();
    }

    setupFrames() {
        this.spriteSheet = ASSET_MANAGER.getAsset("./link-2.png");

    }
}