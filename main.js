class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var pinkCar = document.createElement('img')
pinkCar.setAttribute('src', 'race-car.png')
pinkCar.setAttribute('style', 'height: 20rem')
document.body.appendChild(pinkCar)

var myCar = new Car(pinkCar, 5, 'north', '[0, 0]')
