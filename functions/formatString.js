// @ts-check

"use strict";

// Imports
const escapeRegExp = require("./escapeRegExp.js");

/**
 * Formats a string by replacing any matched identifiers with its intended values
 * @example
 * console.log(formatString("Hello, world! %user%!", { "%user%": "Foo" }));
 * // "Hello, world! Foo!"
 * 
 * console.log(formatString("Welcome to %server%, %user%!", {
 *     "%server%": "%user%",
 *     "%user%": "%server%"
 * }));
 * // "Welcome to %user%, %server%!"
 * @param {string} string Unformatted string
 * @param {{[identifiers: string]: string}} formatter Object of identifiers
 * @returns {string} Returns the formatted string
 */
function formatString(string, formatter) {
    let index = 0, regex = Object.keys(formatter).map(v => `(${escapeRegExp(v)})`).join("|"), match = string.slice(index).match(regex);
    while(match) {
        let matched = match[0];
        string = string.slice(0, index) + string.slice(index).replace(matched, String(formatter[matched]));
        index += (match.index ?? 0) + matched.length;
        match = string.slice(index).match(regex);
    };
    return string;
};

// Exports
module.exports = formatString;