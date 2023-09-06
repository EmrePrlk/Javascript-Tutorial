const hasLicense = true;
const hasVision = true;

console.log(hasLicense && hasVision);
console.log(hasLicense || hasVision);
console.log(!hasLicense);

if (hasLicense && hasVision) {
    console.log('Sarah is able to drive.');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;

if (hasLicense && hasVision && !isTired) {
    console.log('Sarah is able to drive.');
} else {
    console.log('Someone else should drive...');
}