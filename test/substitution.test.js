
const { expect } = require('chai');
const substitutionModule = require('../src/substitution'); 

describe('substitution', () => {
  it('returns false if the given alphabet is not exactly 26 characters long', () => {
    const alphabet = "short";
    const input = "thinkful";
    const actual = substitutionModule.substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it('correctly translates the given phrase based on the alphabet given to the function', () => {
    const result = substitutionModule.substitution('hello world', 'zyxwvutsrqponmlkjihgfedcba');
    expect(result).to.equal('svool dliow');
  });

  it('returns false if there are any duplicate characters in the given alphabet', () => {
    const result = substitutionModule.substitution('hello world', 'aabbccddeeffgghhiijjkkllmmnopqrstuvwxyz');
    expect(result).to.be.false;
  });

  it('maintains spaces in the message, before and after encoding or decoding', () => {
    const result = substitutionModule.substitution('  hello world  ', 'zyxwvutsrqponmlkjihgfedcba');
    expect(result).to.equal('  svool dliow  ');
  });

  it('ignores capital letters', () => {
    const result1 = substitutionModule.substitution('A Message', 'zyxwvutsrqponmlkjihgfedcba');
    const result2 = substitutionModule.substitution('a message', 'zyxwvutsrqponmlkjihgfedcba');
    expect(result1).to.equal(result2);
  });
});
