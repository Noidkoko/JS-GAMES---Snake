class Food {
    constructor() {
        this.size = SQUARE_SIZE;
        this.setRandomPosition()

    }  
    setRandomPosition() {
        this.x = Math.round(Math.random() * GAME_SIZE % ((GAME_SIZE / this.size) - 1));
        this.y = Math.round(Math.random() * GAME_SIZE % ((GAME_SIZE / this.size) - 1));
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}