export function generateRandomColour() {
  const max = 255
  return {
    r: Math.floor(Math.random() * Math.floor(max)),
    b: Math.floor(Math.random() * Math.floor(max)),
    g: Math.floor(Math.random() * Math.floor(max))
  }
}
export function filterNegativeNumbers(arr){
  let endResult = [];
  for (let x = 0; x < arr.length; x++){
    if (arr[x] >= 0){
      endResult.push(arr[x])
    }
  }
  return endResult
}

 export function functionalFilterNegativeNumbers(arr){
  return arr.filter(number => number >= 0)
}

export function mapNumbersIntoStrings(arr){
  let endResult = [];
  for (let x = 0; x < arr.length; x ++){
    endResult.push(`${arr[x]}`)
  }
  return endResult;
}

export function functionalMapNumbersIntoStrings(arr){
  return arr.map(number => `${number}`)
}

export function printType(value) {
  return typeof(value)
}

export function isPalindrome (str){
  let reversedStr = str.split('').reverse().join('').toString();
  if (str == reversedStr){ // since reversedStr is a string, we don't need to allow coersion
    return true
  } else return false
}

export class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

export function printOutPersonAge (personInstance){
  return personInstance.age;
}

// console.log(generateRandomColour())
// console.log(filterNegativeNumbers([-5, -6, 0, 1, -4 ,7]))
// console.log(functionalFilterNegativeNumbers([-5, -6, 0, 1, -4 ,7]))
// console.log(mapNumbersIntoStrings([-5, -6, 0, 1, -4 ,7]))
// console.log(functionalMapNumbersIntoStrings([-5, -6, 0, 1, -4 ,7]))
// console.log(printType(1))
// console.log(isPalindrome('racecar'));
// console.log(new Person('Juliana', 27))
// console.log(printOutPersonAge (new Person('Juliana', 27)))

