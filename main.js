class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }

  turn(direction) {
    this.direction = direction
    var img = document.querySelector('.car-img')
    this.$img = img.classList.toggle('rotated')
  }
}

var pinkCar = document.createElement('img')
pinkCar.classList.add('car-img')
pinkCar.setAttribute('src', 'race-car.png')
pinkCar.setAttribute('style', 'height: 15rem')
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
