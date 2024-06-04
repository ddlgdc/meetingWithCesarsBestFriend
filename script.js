const friend = 'BRUTUS';
const shiftValue = 3;

// step 1:
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// step 2:
let firstLetter = friend[0];
let index = alphabet.indexOf(firstLetter.toLocaleLowerCase());

// question 1:
// the result is 1 instead of 2 because when finding indexs, 0 is the starting point

// step 3:
let newIndex = index + shiftValue;
let encryptFirstLetter = alphabet[newIndex];

// question 2:
// the answer is ' % '. this allows us to wrap back to the beginning of the 
// alphabet. 

// step 4: 
let lengthAlphabet = alphabet.length;

// step 5:
let lengthAlphabet = alphabet.length;
let newIndex = (index + shiftValue) % lengthAlphabet;

// step 6:
const message = 'EUXWXV';
let newMessage = message.slice(0, 3);