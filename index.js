export function generateRandomColor () {
    return {
        r: Math.floor(Math.random()*256),
        g: Math.floor(Math.random()*256),
        b: Math.floor(Math.random()*256)
    }
}

export function filterNegativeNumbers (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current > -1) {
            newArr.push(current);
        }
    }
    return newArr;
}

export function functionalFilterNegativeNumbers (arr) {
    return arr.filter(item => item > -1);
}

export function mapNumbersIntoStrings (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toString());
    }
    return newArr;
}

export function functionalMapNumbersIntoStrings (arr) {
    return arr.map(item => item.toString());
}

export function printType (value) {
    console.log(typeof value);
}

export function isPalindrome (str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

export class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    printName () {
        console.log(this.name);
    }
}

export function printOutPersonAge (personInstance) {
    console.log(personInstance.age)
}
