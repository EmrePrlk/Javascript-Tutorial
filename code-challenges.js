// challenge 1

// BMI = mass / height ** 2

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, markHigherBMI);

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn

// console.log(BMIMark, BMIJohn, markHigherBMI);


// Challenge 2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// Challenge 3

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('both win the trophy');
}

// Bonus 



if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if ((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100 && scoreKoalas >= 100)) {
    console.log('both win the trophy');
} else {
    console.log('No one wins the trophy!');
}


