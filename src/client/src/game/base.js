class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = { x: 50, y: 50, width: 20, height: 20, speed: 5 };
    this.keys = {};
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.keys[e.key] = true);
    window.addEventListener('keyup', (e) => this.keys[e.key] = false);
    requestAnimationFrame(() => this.update());
  }

  update() {
    // Arrow keys
    if (this.keys['ArrowUp']) this.player.y -= this.player.speed;
    if (this.keys['ArrowDown']) this.player.y += this.player.speed;
    if (this.keys['ArrowLeft']) this.player.x -= this.player.speed;
    if (this.keys['ArrowRight']) this.player.x += this.player.speed;

    // WASD keys
    if (this.keys['w']) this.player.y -= this.player.speed;
    if (this.keys['s']) this.player.y += this.player.speed;
    if (this.keys['a']) this.player.x -= this.player.speed;
    if (this.keys['d']) this.player.x += this.player.speed;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPlayer();

    requestAnimationFrame(() => this.update());
  }

  drawPlayer() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }
}

export default Game;
