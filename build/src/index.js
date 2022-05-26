"use strict";
const helloWorld = 'Hello fucker';
console.log(helloWorld);
/**
 * Returns the decoded string
 * @param {string} decode  - The string to decode
 * @returns {string} - The decoded string
 *
 * @author Michael Ballos
 * @Date 2020-06-30
 */
function rot13(decode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const encode = decode.split('').map(letter => {
        const index = alphabet.indexOf(letter);
        if (index < 0) {
            return letter;
        }
        const newIndex = index + 13;
        return alphabet[newIndex];
    }).join('').toUpperCase();
    return encode;
}
console.log(rot13("SERR PBQR PNZC"), rot13("SERR CVMMN!"), rot13("SERR YBIR?"), rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//# sourceMappingURL=index.js.map