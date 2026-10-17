export class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isEngineOn = false;
    }

    startEngine() {
        this.isEngineOn = true;
        console.log(`${this.brand} ${this.model}: Двигатель запущен`);
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

export class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
        this.chargeLevel = 100;
    }

    chargeBattery() {
        this.chargeLevel = 100;
        console.log(`${this.brand} ${this.model}: Батарея заряжена`);
    }

    startEngine() {
        super.startEngine();
        console.log(`${this.brand} ${this.model}: Электромотор работает`);
    }
}