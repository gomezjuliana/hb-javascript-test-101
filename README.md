# hb-javascript-test-101
[![Travis](https://img.shields.io/travis/andrscrrn/hb-javascript-test-101.svg)](https://travis-ci.org/andrscrrn/hb-javascript-test-101)
[![Codecov](https://codecov.io/gh/andrscrrn/hb-javascript-test-101/branch/master/graph/badge.svg)](https://codecov.io/gh/andrscrrn/hb-javascript-test-101)

The purpose of this exercise is to learn how to write small functions that are responsible of doing just one thing and then being able to test them in a Continious Integration environment. Before being able to run tests you need to write them.

Please create a file called `index.js` with all the functions and then another file called `index.test.js` with all the unit tests.

## Functions:

### generateRandomColor()
Input: None. Output: `{r: 123, g: 34, b: 245}`.

### filterNegativeNumbers(arr)
Input: `[-5, -6, 0, 1, -4 ,7]`. Output: `[0, 1, 7]`

### functionalFilterNegativeNumbers(arr)
Input: `[-5, -6, 0, 1, -4 ,7]`. Output: `[0, 1, 7]`

### mapNumbersIntoStrings(arr)
Input: `[-5, -6, 0, 1, -4 ,7]`. Output: `['-5', '-6', '0', '1', '-4' ,'7']`.

### functionalMapNumbersIntoStrings(arr)
Input: `[-5, -6, 0, 1, -4 ,7]`. Output: `['-5', '-6', '0', '1', '-4' ,'7']`.

### printType(value)
Input: 1 Output: Print in console: 'number'

### isPalindrome (str)
Input: `'racecar'` Output: `true`

### class Person
Create a Person representation using a `class` in Javascript. Each person should have a name and age properties.

### printOutPersonAge (personInstance)
This functions should receive a `Person` instance object and print in the console the age property of the passed object.

## Tests:
Write a few unit tests for every function. More tests means more solid code.
