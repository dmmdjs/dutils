// @ts-check

"use strict";

/**
 * Escapes all special characters in a regular expression
 * 
 * [View Source Original](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping)
 * @example
 * console.log(escapeRegExp("Hello, world!")); // "Hello, world!"
 * console.log(escapeRegExp("\\d(^.^)b/")); // "\\\\d\\(\\^\\.\\^\\)b/";
 * @param {string} string Unescaped string
 * @returns {string} Returns the escaped string
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Exports
module.exports = escapeRegExp;