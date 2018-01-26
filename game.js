const canvas = document.getElementById('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx2d = canvas.getContext('2d')

let frames = 0
let fps = 0

function update () {
  player.update()
}

function draw () {
  frames++

  // draw background
  ctx2d.fillStyle = 'rgba(127, 127, 127, 0.4)'
  ctx2d.fillRect(0, 0, WIDTH, HEIGHT)

  // draw FPS
  ctx2d.fillStyle = 'black'
  ctx2d.fillText(fps, 10, 20)

  // draw player
  player.draw(ctx2d)

  window.requestAnimationFrame(draw)
}

setInterval(update, 1000 / 120)
window.requestAnimationFrame(draw)

setInterval(() => {
  fps = frames
  frames = 0
}, 1000)
