const square = function(x) {
    return x*x;
}

console.log(square(2));

//arrows are always anonymous
const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(9));

// arrow func expression syntax

const sqArrow = (x) => x*x;

console.log(sqArrow(2));

// challenge 

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Keenan Golding'));