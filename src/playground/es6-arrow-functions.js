// this keyword - no longer bound

const user = {
    name: 'Nolan',
    cities: ['Boston', 'Cambridge', 'Portsmouth'],
    printPlacesLived: function () {
        console.log(this.name);

        // workaround 
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        })
    },
};

const userArrow = {
    name: 'Nolan',
    cities: ['Boston', 'Cambridge', 'Portsmouth'],
    printPlacesLived: function () { // Cant use arrow bc itll use this as a global scope, not the local
        console.log(this.name);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    },
};

// New method syntax
const userArrowNewMethodSyntax = {
    name: 'Nolan',
    cities: ['Boston', 'Cambridge', 'Portsmouth'],
    printPlacesLived() {
        console.log(this.name);
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    },
};

// user.printPlacesLived();
// userArrow.printPlacesLived();
// console.log(userArrowNewMethodSyntax.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [1, 4, 12, 21],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());