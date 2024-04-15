/********************************Task 7********************************/
class Car {
    constructor(make, model, year, color, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    accelerate(value) {
        this.maxSpeed += value;
    }

    decelerate(value) {
        this.maxSpeed = (this.maxSpeed - value >= 0) ? this.maxSpeed - value : 0;
    }    

    getInfo() {
        return `${this.make} ${this.model} (${this.year}), Color: ${this.color}, Speed: ${this.maxSpeed}`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const myCar = new Car("Toyota", "Camry", 2018, "Black", 200);



/*****************************OUTPUTS*****************************/
console.log("Task 7")
console.log(myCar.getInfo());
console.log("speed + 50")
myCar.accelerate(50);
console.log(myCar.getInfo());
console.log("speed - 20") 
myCar.decelerate(20);
console.log(myCar.getInfo()); 
console.log("Age of the car:", myCar.getAge()); 