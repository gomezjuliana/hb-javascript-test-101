import {
    generateRandomColor,
    filterNegativeNumbers,
    mapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './index.js';

describe('generateRandomColor', () => {
    it('should have "r", "g" and "b" as properties with numbers as values', () => {
        expect(generateRandomColor()).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }));
    });
});

describe('filterNegativeNumbers', () => {
    it('should return a new array without negative numbers', () => {
        const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
        expect(filterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5]);
    });
});

describe('mapNumbersIntoStrings', () => {
    it('should return a new array with strings', () => {
        const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
        expect(mapNumbersIntoStrings(arr)).toEqual(['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5']);
    });
});

describe('printType', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        }
    });
    it('should print in console the type', () => {
        printType(1);
        expect(global.console.log).toHaveBeenCalledWith('number');
    });
});

describe('isPalindrome', () => {
    it('should return true with a palindrome word', () => {
        expect(isPalindrome('madam')).toBeTruthy();
    });
    it('should return true with a palindrome phrase', () => {
        expect(isPalindrome("A man, a plan, a canal. Panama")).toBeTruthy();
    });
});

describe('Person', () => {
    it('should return an instance with the correct values', () => {
        expect(new Person('John', 100)).toMatchObject({
            name: 'John',
            age: 100
        });
    });
});

describe('printOutPersonAge', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        }
    });

    it('should print in console the age of the given instance', () => {
        printOutPersonAge(new Person('John', 100));
        expect(global.console.log).toHaveBeenCalledWith(100);
    });
});
