"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateOTP = () => {
    let otp = "";
    for (let i = 0; i <= 3; i++) {
        const randVal = Math.round(Math.random() * 9);
        otp = otp + randVal;
    }
    return otp;
};
// console.log(generateOTP());
exports.default = generateOTP;
