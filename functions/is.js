// @ts-check

"use strict";

/**
 * Checks if the source value matches any of the target values
 * @example
 * console.log(is("Hello, world!", "foo")); // false
 * console.log(is("Hello, world!", "foo", "bar", "Hello, world!")); // true
 * 
 * function isNullOrUndefined(value) {
 *     return is(value, null, undefined);
 * };
 * console.log(isNullOrUndefined(null)); // true
 * @param {any} source Source value
 * @param  {...any} targets Target values
 * @returns {boolean} Returns true if a match is found
 */
function is(source, ...targets) {
    return targets.some(target => Object.is(source, target));
};

// Exports
module.exports = is;