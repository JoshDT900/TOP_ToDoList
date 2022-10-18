const car = {
    year: "1989",
    miles: "112,456",
    model: "Kia",
    color: "red"
}

Object.defineProperty(car, "carDetails", {
    get() {
        return `The Car's year is ${this.year}, the color is ${this.color}, and model is ${this.model}. This car has ${this.miles} miles on it.`
    },

    set(value) {
        [this.year, this.miles, this.model, this.color] = value.split(" ")
    }
});

alert(car.carDetails)