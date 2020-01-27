function Snake() {
    this.x = 0;
    this.y = 0;
    this.prevDirection = "RIGHT";
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.statistics = function(x, y) {
        ctx.fillStyle ='#333';
        ctx.fillRect(0, 0, 100, 10);
        ctx.fillStyle ='#fff';
        ctx.fillText(" (" +x + " - " + y + ") ", 0, 10);
    }
    
    this.draw = function() {
        this.tail.forEach(tail=> this.drawItem(tail.x, tail.y));
        this.drawItem(this.x, this.y);
    }

    this.drawItem = function(x, y) {
        ctx.fillStyle ='#fff';
        ctx.fillRect(x, y, scale, scale);
        // this.statistics(x, y);
    }

    this.run = function() {
        this.setTail();
        this.setSnakePosition();
        this.draw();
        // this.bumped = this.crossBorder() || this.tailBumped();
        this.bumped = this.tailBumped();
    }

    this.setSnakePosition = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.tailBumped = function() {
        this.tail.forEach((tail, index)=> {
            if(index && (this.tail[0].x === tail.x && this.tail[0].y === tail.y)) {
                console.log("Bateu....", index, this.tail);
            }
        });
    }

    this.crossBorder = function() {
        return this.x > canvas.width || this.y > canvas.height || this.x < 0 || this.y < 0;
    }

    this.setTail = function() {
        for(let i = 0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { 
            x: this.x, 
            y: this.y 
        };
    }

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y ===fruit.y) {
            this.total++;
            return true;
        }
    }

    this.changeDirection = function(direction) {
        
        if (this.prevDirection === direction) return;

        switch(direction) {
            case "UP":
                if (this.prevDirection === "DOWN") return;
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
            break;
            case "DOWN":
                if (this.prevDirection === "UP") return;
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
            break;
            case "LEFT":
                if (this.prevDirection === "RIGHT") return;
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
            break;
            case "RIGHT":
                if (this.prevDirection === "LEFT") return;

                this.xSpeed = scale * 1;
                this.ySpeed = 0;
            break;
        }
        this.prevDirection = direction;
    }
}