function Fruit() {
    this.x;
    this.y;
    this.countFruits = -1;

    this.statistics = function(x, y) {
        ctx.fillStyle ='#333';
        ctx.fillRect(100, 100, 100, 10);
        ctx.fillStyle ='#fff';
        ctx.fillText(" Total fruits: "+this.countFruits, 0, 10);
    }    

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
        this.countFruits++;
    }

    this.draw = function(snake) {
        if (snake.tail.some(tail=> tail.x === this.x && tail.y === this.y)) {
            this.pickLocation();
            this.draw(snake);
        }

        ctx.fillStyle = "#cf3";
        ctx.fillRect(this.x,this.y,scale, scale);
        this.statistics();
    }
}