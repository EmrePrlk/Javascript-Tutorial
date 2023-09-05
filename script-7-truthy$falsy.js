// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));             // false
console.log(Boolean(undefined));     // false
console.log(Boolean('Jonas'));       // true
console.log(Boolean({}));            // true
console.log(Boolean(''));            // false
console.log(Boolean(NaN));           // false
console.log(Boolean(null));          // false
console.log(Boolean(1));             // true
console.log(Boolean());              // false


const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job!');
}



let height;
if (height) {
    console.log('height is DEFINED!');
} else {
    console.log('height is UNDEFINED!');
}