const testPass = 'password';

function crypto(password) {
    if (typeof password !== 'string' || !password) {
        return undefined;
    }
    const array = password.trim().split('');
    const arr1 = array.splice(0, 4).reverse();
    let el1 = array.pop();
    let el2 = array.shift();
    array.unshift(el1);
    array.push(el2);
    return arr1.concat(array).join('');
}

function check(cryptoPass, password) {
    if (typeof password !== 'string' || !password) {
        return undefined;
    }
    return crypto(cryptoPass) === password;
}

console.log(crypto(testPass));
console.log(check(crypto(testPass), testPass));
console.log(check(crypto(testPass), 'wrong'));