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

Car.prototype.ChangeToElectricMode = () => {
    console.log("Changing to Electric Mode")
}

const firstHybridCar = new Car("Mazda", "CX30", "Grey", 2024)

firstHybridCar.ChangeToElectricMode()






