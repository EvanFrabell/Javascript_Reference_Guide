// STRICT MODE
'use strict';


// empty variable
let emptyVariable;
console.log(typeof emptyVariable);

// DECLARING VARIABLES
let age = 20;
age = 32;

// immutable
const weddingDate = 1968;
// weddingDate = 1985; 

// Don't use var past JS6


// OPERATORS
let currentYear = 2021;
const elvisAge = currentYear - 1935;
const bieberAge = currentYear - 1994;
console.log('Elvis is ' + elvisAge + ' and Bieber is ' + bieberAge + ' for a difference of ' + (elvisAge - bieberAge) + ' years');
console.log(elvisAge >= bieberAge);
// back ticks
console.log(`Elvis is ${elvisAge} and J.Bieber is ${bieberAge}`);
console.log(`Do you 
like
template literals?`);

// CONDITIONAL STATEMENTS
let customerAge = 15;
let meetsDrinkingAge = customerAge >= 21;

if (customerAge > 120) {
    console.log('A beer might kill you, but what difference does it make?')
} else if (meetsDrinkingAge) {
    console.log('Have a beer, ole chap.')
} else {
    console.log(`You're too young for beer! How about a contract with the Marines instead?`)
}

// TYPE CONVERSION & COERCION
// type conversion
let stringNum = '1989';
console.log(stringNum + 32);
console.log(Number(stringNum) + 32);
String(23);
// type coercion - plus sign keeps as string, every other operator coerces to number
console.log('50' - 10 + '6666666');

let n = '1' + 1;
n = n - 1;
console.log(n)

// TRUTHY & FALSY VALUES
// falsy values: 0, '', undefined, null, NaN, false


// EQUALITY OPERATORS
const wins = 40;
if (wins === 40) console.log('checks out');

// strict (should always be used over loose)
18 === '18';
// false

// loose (allows type coercion)
18 == '18';
//true


// LOGICAL OPERATORS
const shePretty = true;
const sheWealthy = false;
console.log(shePretty && sheWealthy); //false
console.log(shePretty || sheWealthy); //true
console.log(shePretty && !sheWealthy); //true

const sheSmart = true;
if (shePretty && (sheWealthy || sheSmart)) console.log('Marry Her');


// SWITCH STATEMENT
const day = 'saturday';

switch(day) {
    case 'monday':
        console.log('Chest day');
        break;
    case 'tuesday':
        console.log('Leg day');
        break;
    case 'wednesday':
        console.log('rest');
        break;
    case 'thursday':
        console.log('Back');
        break;
    case 'friday':
        console.log('Cardio');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Party HARD');
        break;
    default:
        console.log('invalid day');
    
}


// TERNARY OPERATOR
const wheels = 4;
wheels === 4 ? console.log(`It's a car`) : console.log("Not a car");


// FUNCTIONS
function logger() {
    console.log('Me llamo Juan-derful');
}

// calling / running/ invoking function
logger();

function fruitSquash(apples, bananas) {
    return `There are ${apples} apples and ${bananas} bananas.`;
}

console.log(fruitSquash(3, 6));

// FUNCTIONAL DECLARATION vs FUNCTIONAL EXPRESSION
// declaration
function calcAge1(birthYear) {
    return 2020 - birthYear;
}

// expression
const calcAge2 = function(birthYear) {
    return 2050 - birthYear;
}

console.log(calcAge1(1989), calcAge2(1989));

// ARROW FUNCTIONS
const calcAge3 = birthYear => 2090 - birthYear;

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}


// CALL FUNCTION INSIDE OTHER FUNCTION
function multiplier(coin) {
    return coin * 5;
}

function coinSeperator(bitcoin, litecoin) {
    return `There are now ${multiplier(bitcoin)} Bitcoin and ${multiplier(litecoin)} Litecoin.`;
}

console.log(coinSeperator(2,4));


// ARRAYS

const brands = ['Nike', 'Adidas', 'Puma', 'Reebok'];
const years = new Array(2001, 2010, 2020, 2030);

brands[0]; //'Nike'
brands[brands.length - 1]; //'Reebok'
brands[2] = 'Under Armor'; //Replace 'Puma' with 'Under Armor'

const randoArray = ['Papa Johns', 20 - 15, brands, years.length];
console.log(randoArray);

function addFive(year) {
    return year + 5;
}

const plusYears = [addFive(years[0]), addFive(years[1]), addFive(years[2])];
console.log(plusYears);

brands.push('Champion'); //Adds to end of array
brands.unshift('Asic'); //Add to front of array
brands.pop(); //Removes last element in array
brands.shift(); //Removes first element in array
brands.indexOf('Adidas'); 
brands.includes('Reebok'); //true



// OBJECTS  ...dictionary or hashmap  / makeup of JSON
const employee = {
    firstName: 'Evan',
    lastName: 'Francesca',
    birthYear: 1989,
    job: 'Software Engineer',
    friends: ['Mike', 'Julia', 'Craig'],
    hasDriversLicense: false,

// object methods:
    calculateAge: function (currentYear) {
        return currentYear - this.birthYear;
    },
    // or
    calculateAge2: function (currentYear) {
        this.newAge = currentYear - this.birthYear;
        return this.newAge;
    },

};

// dot vs bracket notation accessing properties
console.log(employee.firstName);
console.log(employee['firstName']);
console.log(employee.friends[1]);

const nameKey = 'Name';
console.log(employee['last' + nameKey]);

employee.location = 'Atlanta, Georgia';
employee['linkedin'] = 'linkedin.com/evanfrancesca';
employee['job'] = 'CEO';

const createdAge = employee.calculateAge(2021);
employee['age'] = createdAge;
// or
console.log(employee.calculateAge2(2021));
console.log(employee);

console.log(`${employee.firstName} ${employee.lastName} is ${employee.age} and ${employee.hasDriversLicense ? 'has' : 'does not have'} a driver's license.`);


// LOOPS
for(let buzz = 1; buzz <=7; buzz++) {
    console.log (`I'm a bee on buzz ${buzz}`);
}

const funArray = [
    'Pop',
    1,
    69,
    'Gooba gooba',
    'run john run',
    'football is guht',
    ['apples', 'kiwi', 'orange']
];

for(let i = 0; i < funArray.length; i++) {
    console.log(funArray[i]);
}

for(let x = 0; x < funArray.length; x++) {
    if (typeof funArray[x] !== 'string') continue;
    console.log(funArray[x]);
    if(funArray[x] === 'run john run') break;
}

// backwards
for(let y = funArray.length - 1; y >= 0; y--) {
    console.log(funArray[y]);
}

for(let index = 2; index <= 12; index = index + 2) {
    for(let x = 0; x < funArray.length; x++) {
        console.log(`${index} : ${funArray[x]}`);
    }
}

// while loop
let mark = 1;
while (mark <=5) {
    console.log(mark++);
}