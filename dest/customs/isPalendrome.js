"use strict";
const isPalendrome = (val) => {
    // only works on strings
    if (typeof val !== "string")
        return Error(`${val} is not a string`);
    // reverse the strings
    const reversed = val.split("").reverse().join("");
    // return true or false
    return reversed === val;
};
module.exports = isPalendrome;
