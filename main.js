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
        this.location[1] += this.speed
        this.$img.setAttribute('top', '50px')
        break
      case 'south':
        this.location[1] -= this.speed
        this.$img.setAttribute('top', '-50px')
        break
      case 'east':
        this.location[0] += this.speed
        this.$img.setAttribute('left', '50px')
        break
      case 'west':
        this.location[0] -= this.speed
        this.$img.setAttribute('left', '-50px')
    }
  }

  start() {
    var intervalID = window.setInterval(move(), 16)
  }
}

var pinkCar = document.createElement('img')
pinkCar.classList.add('car-img')
pinkCar.setAttribute('src', 'race-car.png')
pinkCar.setAttribute('style', 'position: fixed; top: 100px; left: 100px; height: 10rem')
document.body.appendChild(pinkCar)

var myCar = new Car(pinkCar, 5, 'north', '[0, 0]')

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
