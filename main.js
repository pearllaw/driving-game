class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }

  turn(direction) {
    this.direction = direction
    switch (this.direction) {
      case 'north':
        this.$img.classList.add('rotateNorth')
        this.$img.classList.remove('rotateEast', 'rotateSouth', 'rotateWest')
        break
      case 'east':
        this.$img.classList.add('rotateEast')
        this.$img.classList.remove('rotateNorth', 'rotateSouth', 'rotateWest')
        break
      case 'south':
        this.$img.classList.add('rotateSouth')
        this.$img.classList.remove('rotateEast', 'rotateNorth', 'rotateWest')
        break
      case 'west':
        this.$img.classList.add('rotateWest')
        this.$img.classList.remove('rotateEast', 'rotateSouth', 'rotateNorth')
    }
  }

  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      default:
        this.location[0] -= this.speed
    }
    this.$img.style.top = this.location[1] + 'px'
    this.$img.style.left = this.location[0] + 'px'
  }

  start() {
    this.interval = window.setInterval(function () {
      this.move()
    }.bind(this), 16);
  }

  stop() {
    window.clearInterval(this.interval)
  }

  window() {
    this.location[1] <= window.innerHeight + 'px'
    this.location[0] <= window.innerWidth + 'px'
  }
}

var pinkCar = document.createElement('img')
pinkCar.classList.add('pink-car')
pinkCar.setAttribute('src', 'race-car.png')
pinkCar.setAttribute('style', 'position: relative; top: 550px; left: 1150px; height: 6rem')
document.body.appendChild(pinkCar)

var mercedes = document.createElement('img')
mercedes.classList.add('silver-car')
mercedes.setAttribute('src', 'mercedes-car.png')
mercedes.setAttribute('style', 'position: relative; top: 85px; left: 100px; height: 4rem')
document.body.appendChild(mercedes)

var myCar = new Car(pinkCar, 2, 'north', [1150, 550])
var car2 = new Car(mercedes, 4, 'west', [100, 100])

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      myCar.turn('north')
      break
    case 'ArrowRight':
      myCar.turn('east')
      break
    case 'ArrowDown':
      myCar.turn('south')
      break
    case 'ArrowLeft':
      myCar.turn('west')
      break
  }
})

var carStarted = null
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 32:
      if (carStarted === null) {
        myCar.start()
        carStarted = true
      }
      else {
        myCar.stop()
        carStarted = null
      }
    }
})
