/**
 * 
 * @param {string} word 
 * @returns {string}
 */


function isPalindroma(word) {

    let reverseWrd = '';


    for (let i = word.length - 1; i >= 0; i--) {
        const currentLetter = word[i];
        reverseWrd = reverseWrd + currentLetter;
    }
    return word == reverseWrd;
}