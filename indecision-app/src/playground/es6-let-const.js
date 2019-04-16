var nameVar = "keenan";
nameVar = "Keenan G"
console.log('nameVar', nameVar);

let nameLet = "Naneek";
nameLet = "G naneeK" // can't redefine same let, can reassign
console.log('nameLet', nameLet);

const nameConst = "NanKee";
// nameConst = "Keenan"; - can't do this
console.log('nameCost', nameConst);

// scoping 

// function scope 

// function getPetName() {
//     let petName = "hello";
//     return petName;
// }

// console.log(petName); - petname not defined. same with var, const 

// block scoping - var not block scoped 

var fullName = 'Keenan Golding';

if (fullName) {
    var firstName = fullName.split(' ');
    console.log(firstName);
}

console.log(firstName);