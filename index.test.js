import { generateRandomColour, filterNegativeNumbers, functionalFilterNegativeNumbers, mapNumbersIntoStrings, functionalMapNumbersIntoStrings, printType, isPalindrome, Person, printOutPersonAge} from './index.js';


describe('Functions exercise', () => {
  describe('random colour generator', () => {
    it('should return a colour object with 3 random numbers between 0 and 255', () => {
      expect(typeof generateRandomColour()).toEqual('object')
      expect(Object.keys(generateRandomColour()).length).toEqual(3);
    });
  });
  describe('filter negative numbers', () => {
    it ('should filter out negative numbers out of an array', () => {
      expect(filterNegativeNumbers([-5, -6, 0, 1, -4 ,7])).toEqual([0, 1, 7])
    });
  });
  describe('filter negative numbers v2', () => {
    it ('should filter out negative numbers out of an array v2', () => {
      expect(functionalFilterNegativeNumbers([-5, -6, 0, 1, -4 ,7])).toEqual([0, 1, 7])
    });
  });
  describe('map numbers into strings', () => {
    it ('should map an array of numbers into an array of strings', () => {
      expect(mapNumbersIntoStrings([-5, -6, 0, 1, -4 ,7])).toEqual(['-5', '-6', '0', '1', '-4' ,'7'])
    });
  });
  describe('map numbers into strings v2', () => {
    it ('should map an array of numbers into an array of strings v2', () => {
      expect(functionalMapNumbersIntoStrings([-5, -6, 0, 1, -4 ,7])).toEqual(['-5', '-6', '0', '1', '-4' ,'7'])
    });
  });
  describe('print type', () => {
    it ('should print number if it\'s a number', () => {
      expect(printType(1)).toEqual('number')
    });
    it ('should print string if it\'s a string', () => {
      expect(printType('hey')).toEqual('string')
    });
    it ('should print object if it\'s an array', () => {
      expect(printType([])).toEqual('object')
    });
    it ('should print object if it\'s an object', () => {
      expect(printType({})).toEqual('object')
    });
  });
  describe('is palindrome', () => {
    it ('should return true if it\'s a palindrome', () => {
      expect(isPalindrome('racecar')).toEqual(true)
    });
    it ('should return false if it\'s not a palindrome', () => {
      expect(isPalindrome('hello')).toEqual(false)
    });
  });
  describe('create a Person using classes', () => {
    it ('should create a new Person with that age and name', () => {
      expect(new Person('Juliana', 27)).toEqual({name: 'Juliana', age: 27})
    });
  });
  describe('print age', () => {
    const Person = {
      name: 'Juliana',
      age: 27
    }
    it ('should print the age of the person', () => {
      expect(printOutPersonAge(Person)).toEqual(27)
    })
  })
})