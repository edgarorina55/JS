// temperature class (conversion methods)
    // convert celsius to kelvin and fahrenheit


class Temperature {
    constructor(Celsius) {
        this.Celsius = Celsius;
    }
    toKelvin() {
        return this.Celsius + 273.15;
    }
    toFahrenheit() {
        return (this.Celsius * 9/5) + 32;
    }
}

const temp = new Temperature(25);
console.log(temp.toKelvin());   
console.log(temp.toFahrenheit());
