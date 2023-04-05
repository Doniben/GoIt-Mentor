
class Car {
    constructor(make, model, color, year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    gearChange() {
        console.log("Gear changed")
    }

    accelerate() {
        console.log("Accelerating...")
    }
}

const firstCar = new Car("Toyota", "Yaris", "Red", 2023)

console.log(firstCar.make)
firstCar.gearChange()
firstCar.accelerate()