const testPass = 'password';

function crypto(password) {
    if (typeof password !== 'string' || !password) {
        return undefined;
    }
    const array = password.trim().split('').reverse();
    let el1 = array.pop();
    let el2 = array.shift();
    let el3 = array.pop();
    let el4 = array.shift();
    array.unshift(el1);
    array.push(el2);
    array.unshift(el3);
    array.push(el4);
    return array.join('');
}

function check(cryptoPass, password) {
    const array = cryptoPass.split('');
    let el1 = array.pop();
    let el2 = array.shift();
    let el3 = array.pop();
    let el4 = array.shift();
    array.unshift(el1);
    array.push(el2);
    array.unshift(el3);
    array.push(el4);
    array.reverse();
    return array.join('') === password;
}

console.log(crypto(testPass));
console.log(check(crypto(testPass), testPass));
console.log(check(crypto(testPass), 'wrong'));