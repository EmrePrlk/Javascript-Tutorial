// Type Conversion & Coercion
// Type conversion is when we manually convert from one type to another. One the other hand, type coercion is when JavaScript automatically converts types behind the scenes for us.

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(String(234), 234);



// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + String(23) + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3); // result is different

console.log('23' * '2');
console.log('23' / '2');



let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);

console.log(2 + 3 + 4 + '5'); //95 = '9' + '5'