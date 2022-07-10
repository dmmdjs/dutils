// @ts-check

"use strict";

/**
 * Checks if the source value is an entry object
 * @example
 * console.log(isEntryObject("Hello, world!")) // false
 * console.log(isEntryObject([
 *     [ "key", "value" ],
 *     [ "Hello, ", "world!" ]
 * ])); // true
 * console.log(isEntryObject(Object.entries({
 *     "key": "value",
 *     "Hello, ": "world!"
 * }))); // true
 * console.log(isEntryObject(new Map([
 *     [ "key", "value" ],
 *     [ "Hello, ", "world!" ]
 * ]).entries())); // true
 * @param {any} source Source value
 * @returns {boolean} Returns true if the source value is an entry object
 */
function isEntryObject(source) {
    return typeof source?.[Symbol.iterator] === "function" && Array.prototype.every.call(source, value => typeof value === "object");
};

// Exports
module.exports = isEntryObject;