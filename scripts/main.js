

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const speed = 50;
const rows = canvas.width / scale;
const cols = canvas.height / scale;

(function() {
    snake = new Snake();
    fruit = new Fruit();
    score = new Score();

    fruit.pickLocation();
    
    let loop = window.setInterval(()=> {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        fruit.draw(snake);
        snake.run();

        if (snake.bumped) {
            alert('Game over');
            ctx.clearRect(0,0, canvas.width, canvas.height);
            clearInterval(loop);
        }

        if(snake.eat(fruit)) {
            fruit.pickLocation();
            score.add();
        }
    }, speed);
}());

window.addEventListener('keydown', (evt=> {
    const direction = evt.key.replace('Arrow', '').toUpperCase();
    snake.changeDirection(direction);
}));