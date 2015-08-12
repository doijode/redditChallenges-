/* PROBLEM DESCRIPTION 
Garland Words (easy) 
A garland word is one that starts and ends with the same N letters in the same order, 
for some N greater than 0, but less than the length of the word. I'll call the maximum N for which this works the garland word's degree. 
For instance, "onion" is a garland word of degree 2, because its first 2 letters "on" are the same as its last 2 letters. 
The name "garland word" comes from the fact that you can make chains of the word in this manner:onionionionionionionionionionion...
Today's challenge is to write a function garland that, given a lowercase word, returns the degree of the word if it's a garland word, and 0 otherwise.

Examples: 
garland("programmer") -> 0
garland("ceramic") -> 1
garland("onion") -> 2
garland("alfalfa") -> 4  */



function garland(word) {
    var len = 0;
    for (i = 0; i < word.length; i++) {
        if (word.substring(0, i) === word.substring(word.length - i, word.length)) len = i;
    }
    console.log(len);
    return len;

}

garland('alfalfa');
