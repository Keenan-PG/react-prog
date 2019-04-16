// arguments obj no longer bound with arrow funcs 

const add = function (a, b) {
    console.log(arguments);
    return a+b;
}
console.log(add(51,2));

const adrow = (a, b) => {
    // console.log(arguments); not defined
    return a+b;
}
console.log(adrow(51,2));

// this keyword no longer bound with arrow funcs

const user = {
    name: 'Keenan',
    cities: ['Bolton', 'Newcastle', 'Manchester'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
};
console.log(user.printPlacesLived());

// challenge

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyNumbers(number) {
        let multiplyBy = number;

        return this.numbers.map((num) => num * multiplyBy);
    }
    // numbers array
    // multiplyBy - single num
    // return array where numbers have been multiplied
}

console.log(multiplier.multiplyNumbers(3));