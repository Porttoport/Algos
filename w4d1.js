/*
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "aabbccdde";
const expected1 = true;

const str2 = "baba";
const expected2 = true;

const str3 = "bcda";
const expected3 = false;

const str4 = "";
const expected4 = false;

const str5 = "a";
const expected5 = true;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

 function canStringBecomePalindrome(str) {
    if(str.length == 0){
        return false;
    }

    if(str.length == 1){
        return true;
    }

    let freqtable = {}, letter;

    for (let i = 0; i < str.length; i++) {
        letter = str[i];
        if(letter in freqtable){
            freqtable[letter]++
        }
        else{
            freqtable[letter] = 1;
        }
    }
    let count = 0;
    for(letter in freqtable){
        if(freqtable[letter] %2 !== 0){
            count++
        }
    }
    return count < 1? true:false
}

console.log(canStringBecomePalindrome(str1))