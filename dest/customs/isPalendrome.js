"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPalendrome = (val) => {
    if (typeof val !== 'string')
        return Error(`${val} is not a string`);
    console.log(val, typeof val);
};
checkPalendrome(29);
exports.default = checkPalendrome;
