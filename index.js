// @ts-check

"use strict";

// Imports
const functions = {
    escapeRegExp: require("./functions/escapeRegExp.js"),
    formatString: require("./functions/formatString.js"),
    is: require("./functions/is.js"),
    isEntryObject: require("./functions/isEntryObject.js")
};

// Exports
module.exports = {
    functions, ...functions
};