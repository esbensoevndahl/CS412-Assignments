//Problem 1

//I managed to get it all done in one line. I will not be doing this for the rest of the questions

//First remove all non-letters, then split, then sort, then reverse and finally join everything again
const rev_string = string => string.replace(/[0-9!?.,;:]/g, '').split('').sort().reverse().join('');

console.log(`Biggest int is: ${rev_string("1234supercalifragilisticexpialidocious!.?")}`);