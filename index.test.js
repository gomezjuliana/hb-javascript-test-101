import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './index.js';

describe('generateRandomColor', () => {
    const KEYS = ['r', 'g', 'b'];
    const color = generateRandomColor();

    it('should have "r", "g" and "b" as properties with numbers as values', () => {
        expect(color).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }));
    });

    it('should have values in the range [0, 255]', () => {
        for (const key of KEYS) {
            expect(color[key]).toBeGreaterThanOrEqual(0);
            expect(color[key]).toBeLessThanOrEqual(255);
        }
    });
});

describe('filterNegativeNumbers', () => {
    it('should return a new array without negative numbers', () => {
        const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
        expect(filterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(functionalFilterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(filterNegativeNumbers([0])).toEqual([0]);
        expect(functionalFilterNegativeNumbers([0])).toEqual([0]);
    });

    it('should return an empty array if all the values are negative', () => {
        expect(filterNegativeNumbers([-1])).toEqual([]);
        expect(functionalFilterNegativeNumbers([-1])).toEqual([]);
    });

    it('should not modify the original array', () => {
        const arr = [-1, 0, 1];
        const arrCopy = Array.from(arr);
        filterNegativeNumbers(arr);
        expect(arr).toEqual(arrCopy);
    });
});

describe('mapNumbersIntoStrings', () => {
    it('should return a new array with strings', () => {
        const arr = [-1, 0, 1];
        expect(mapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1']);
        expect(functionalMapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1']);
    });

    it('should return an empty array if the original array is empty', () => {
        expect(mapNumbersIntoStrings([])).toEqual([]);
        expect(functionalMapNumbersIntoStrings([])).toEqual([]);
    });

    it('should not modify the original array', () => {
        const arr = [-1, 0, 1];
        const arrCopy = JSON.parse(JSON.stringify(arr));
        mapNumbersIntoStrings(arr);
        expect(arr).toEqual(arrCopy);
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
    let personInstance;

    beforeAll(() => {
        personInstance = new Person('John', 100);

        global.console = {
            log: jest.fn()
        }; // Creating a spy function for the console.log
    });

    it('should return an instance with the correct values when calling it as a constructor', () => {
        expect(personInstance).toMatchObject({
            name: 'John',
            age: 100
        });
    });

    it('should print the Person instance name in the console', () => {
        personInstance.printName();
        expect(global.console.log).toHaveBeenCalledWith('John');
    });
});

describe('printOutPersonAge', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        } // Creating a spy function for the console.log
    });

    it('should print in console the age of the given instance', () => {
        printOutPersonAge(new Person('John', 100));
        expect(global.console.log).toHaveBeenCalledWith(100);
    });
});
