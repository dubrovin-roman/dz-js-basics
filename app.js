const hasLicence = true;
const age = 18;
const isDrunk = false;

const result = hasLicence ? age >= 18 ? !isDrunk ? 'может' : 'не может' : 'не может' : 'не может';

console.log(result);