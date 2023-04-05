class Car {
    constructor(make, model, color, year) {
        this.make = make;
        this.model = model;
        this._color = color;
        this.year = year;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        if (value === 'pink') {
            throw new Error('Cannot set pink cars');
        }

        this._color = value
    }

    gearChange() {
        console.log("Gear changed")
    }

    accelerate() {
        console.log("Accelerating...")
    }
}

const firstCar = new Car("Toyota", "Yaris", "Red", 2023)

firstCar.color = "pink"

console.log(firstCar.color)
