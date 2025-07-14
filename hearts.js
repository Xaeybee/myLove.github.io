const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  const size = Math.random() * 20 + 10;
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + size,
    size: size,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#87CEFA';
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.2) createHeart();
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
    if (heart.y + heart.size < 0) hearts.splice(index, 1);
  });
  requestAnimationFrame(animate);
}

animate();
