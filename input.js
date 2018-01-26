const input = {
  keys: {},
  keyCodes: {
    space: 32,
    arrowLeft: 37,
    arrowRight: 39,
    a: 65,
    d: 68
  },
  onKeyDown (event) {
    input.keys[event.keyCode] = true
  },
  onKeyUp (event) {
    input.keys[event.keyCode] = false
  },
  isPressed (key) {
    return this.keys[key] ? true : false
  },
  leftPressed () {
    return this.isPressed(this.keyCodes.arrowLeft) ||
           this.isPressed(this.keyCodes.a)
  },
  rightPressed () {
    return this.isPressed(this.keyCodes.arrowRight) ||
           this.isPressed(this.keyCodes.d)
  },
  jumpPressed () {
    return this.isPressed(this.keyCodes.space)
  }
}

document.addEventListener('keydown', input.onKeyDown)
document.addEventListener('keyup', input.onKeyUp)
