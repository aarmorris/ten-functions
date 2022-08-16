"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false
}

function not(input){
    return !input
}

function addOne(input){
     input = parseFloat(input);// Input is now a number instead of "string"/ parseFloat can handle infinity
        return input + 1;
}

function isEven(input){
    return input % 2 === 0;
}

function isIdentical(input, input2){
    return input === input2;
}

function isEqual(input, input2) {
    let b = input == input2;
    return b;
}

function or(input, input2){
    return input || input2;
}

function and(input, input2){
    return input && input2;
}

function concat(input, input2){
   input = input.toString()
    input2 = input2.toString()
        return input + input2;
}
