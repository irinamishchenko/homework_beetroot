// Minimum

let car = {
    manufacturer: 'Renault',
    model: 'Duster',
    "production year": 2019,
    "average speed": 80,
    "fuel capacity": 50,
    "fuel consumption": 7, 
    drivers: ["Harry Potter", "Jack Sparrow", "James Bond"],
    showInfo: function () {
        return `Manufacturer: ${this.manufacturer},
        model: ${this.model},
        production year: ${this["production year"]} year,
        average speed: ${this["average speed"]} km per hour,
        fuel capacity: ${this["fuel capacity"]} liters,
        fuel consumption: ${this["fuel consumption"]} liters per 100 km,
        drivers: ${this.drivers}`
    },
    addDriver: function(driver) {
        this.drivers.push(driver)
    },
    isInDrivers: function(driver) {
        return this.drivers.includes(driver);
    },
    showTimeAndFuel: function(distance) {
        let time = distance / this["average speed"];
        let timeWithStops = time + Math.floor(time / 4);
        let fuelQuantity = Math.ceil(this["fuel consumption"] / 100 * distance);
        return `You need ${timeWithStops} hours and ${fuelQuantity} liters of fuel`;
    }
}

// Norm

let time = {
    hours: 13,
    minutes: 25,
    seconds: 48,
    showTime: function() {
        return `${this.hours}:${this.minutes}:${this.seconds}`
    },
    changeSeconds: function(seconds) { 
        let newSeconds = this.seconds + seconds;
        if(newSeconds >= 60){
            while (newSeconds >= 60) {
                newSeconds = newSeconds - 60;
                this.minutes += 1;
                this.seconds = newSeconds;
            }
        } else {
            this.seconds += seconds;
        }
    },
    changeMinutes: function(minutes) {
        let newMinutes = this.minutes + minutes;
        if(newMinutes >= 60){
            while (newMinutes >= 60) {
                newMinutes = newMinutes - 60;
                this.hours += 1;
                this.minutes = newMinutes;
            }
        } else {
            this.minutes += minutes;
        }
    },
    changeHours: function(hours) {
        let newHours = this.hours + hours;
        if(newHours >= 24) {
            this.hours = newHours - 24;
        } else {
            this.hours = newHours;
        }
    }
}

// Maximum

let firstNumber = {
    numerator: 5,
    denominator: 50,
    makeDecimal: function() {
        let decimal = this.numerator / this.denominator;
        return decimal;
    }
};

let secondNumber = {
    numerator: 3,
    denominator: 10,
    makeDecimal: function() {
        let decimal = this.numerator / this.denominator;
        return decimal;
    }
}

let mathOperations = {
    addition: function(firstNumber, secondNumber) {
        let sum = firstNumber + secondNumber;
        return sum;
    },
    subtraction: function(firstNumber, secondNumber) {
        let difference;
        if (firstNumber >= secondNumber) {
            difference = firstNumber - secondNumber;
        } else {
            difference = secondNumber - firstNumber;
        }
        return difference;
    },
    multiplication: function(firstNumber, secondNumber) {
        let product = firstNumber * secondNumber;
        return product;
    },
    division: function(firstNumber, secondNumber) {
        let quotient = firstNumber / secondNumber;
        return quotient;
    },
    reduction: function(firstNumber, secondNumber) {
        let firstDeviders = [];
        let secondDeviders = [];
        let commonDeviders = [];
        let maxDevider;

        for(i = 0; i <= firstNumber; i++) {
            if(firstNumber % i === 0) {
                firstDeviders.push(i);
            }
        }

        for(j = 0; j <= secondNumber; j++) {
            if(secondNumber % j === 0) {
                secondDeviders.push(j);
            }
        }

        for (firstDevider of firstDeviders) {
            for(secondDevider of secondDeviders) {
                if (firstDevider === secondDevider) {
                    commonDeviders.push(firstDevider);
                }
            }
        }
        maxDevider = Math.max.apply(null, commonDeviders);
        return (firstNumber / maxDevider) / (secondNumber / maxDevider);
    }
}
