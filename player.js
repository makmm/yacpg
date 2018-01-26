
let player = {
  width: 20,
  height: 20,
  color: '#000',
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,
  isJumping: false,
  afterMovement () {
    if (this.speedX > 0) {
      this.speedX -= 0.075
      if (this.speedX < 0) {
        this.speedX = 0
      }
    } else {
      this.speedX += 0.075
      if (this.speedX > 0) {
        this.speedX = 0
      }
    }
  },
  update () {
    const isTouchingFloor = (this.y >= (HEIGHT - this.height))

    // Gravity
    if (!isTouchingFloor) {
      this.speedY += (1.5 / 12)
    } else {
      this.speedY = 0
    }

    // Movement
    if (input.leftPressed()) {
      this.speedX = -3
    } else {
      this.afterMovement()
    }

    if (input.rightPressed()) {
      this.speedX = 3
    } else {
      this.afterMovement()
    }

    if (input.leftPressed() &&
        input.rightPressed()) {
          this.speedX = 0
        }


    // Gravity
    if (isTouchingFloor) {
      this.y = (HEIGHT - this.height)
    }

    // JUMP
    if (input.isPressed(input.keyCodes.space) &&
        isTouchingFloor &&
        !this.isJumping) {
      this.speedY = -5
      this.isJumping = true
    }

    // Apply changes
    this.x += this.speedX
    this.y += this.speedY

    if (isTouchingFloor &&
        this.isJumping) {
      this.isJumping = false
    }

    // Borders
    if (this.x >= (WIDTH - this.width)) {
      this.x = (WIDTH - this.width)
    } else if (this.x <= 0) {
      this.x = 0
    }

  },
  draw (ctx2d) {
    ctx2d.fillStyle = this.color
    ctx2d.fillRect(this.x, this.y, this.width, this.height)
  }
}
