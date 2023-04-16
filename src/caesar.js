// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check if shift value is valid
    if (!shift || shift < -25 || shift > 25) return false;
    // Convert input to lowercase 
    input = input.toLowerCase();
    // Define the alphabet as an array of letters
    const alphabet = "abcdefghijklmnopqrstuvwxyz".slice("");
    // Initialize the result string
    let result = "";
    // Loop through each char in the input string
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      
     // Check if char is a letter
      if (alphabet.includes(char)) {
        // Find index of char in the alphabet
        const index = alphabet.indexOf(char);
        // Shift the index by a given amount
        let shiftedIndex = encode ? (index + shift) % 26 : (index - shift + 26) % 26;
        // Handle wrapping around the alphabet
         if (shiftedIndex < 0) {
        shiftedIndex += 26;
        };
        // Get shifted letter from alphabet
        let shiftedChar = alphabet[shiftedIndex];     
        // Add shifted letter to result string
        result += shiftedChar;
      }
        else {
        // If character is not a letter, add it to the result string
        result += char;
      };
    };
     return result;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
