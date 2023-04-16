const expect = require('chai').expect;
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should return false if shift value is not valid', () => {
    expect(caesar('hello', null)).to.be.false;
    expect(caesar('world', 0)).to.be.false;
    expect(caesar('hello', -26)).to.be.false;
    expect(caesar('world', 26)).to.be.false;
    expect(caesar('world', 30)).to.be.false;
  });

  it('should maintain spaces and other non-alphabetic characters', () => {
    expect(caesar('hello world!', 3)).to.equal('khoor zruog!');
    expect(caesar('hello, world!', 3)).to.equal('khoor, zruog!');
    expect(caesar('hello 123 world!', 3)).to.equal('khoor 123 zruog!');
    expect(caesar('hello world!', -3)).to.equal('ebiil tloia!');
    expect(caesar('hello, world!', -3)).to.equal('ebiil, tloia!');
    expect(caesar('hello 123 world!', -3)).to.equal('ebiil 123 tloia!');
  });

  it('should ignore capital letters', () => {
    expect(caesar('Hello', 3)).to.equal('khoor');
    expect(caesar('WORLD', -3)).to.equal('tloia');
    expect(caesar('Hello World!', 3)).to.equal('khoor zruog!');
    expect(caesar('Hello, WORLD!', -3)).to.equal('ebiil, tloia!');
  });

  it('should wrap around the alphabet when a letter goes "off" the alphabet', () => {
    const actual = caesar('xyz', 3);
    const expected = 'abc';
    expect(actual).to.equal(expected);
  });


  it('should encode and decode properly', () => {
    expect(caesar('hello world!', 3, true)).to.equal('khoor zruog!');
    expect(caesar('khoor zruog!', 3, false)).to.equal('hello world!');
    expect(caesar('The quick brown fox jumps over the lazy dog', 10, true)).to.equal('dro aesmu lbygx pyh tewzc yfob dro vkji nyq');
    expect(caesar('dro aesmu lbygx pyh tewzc yfob dro vkji nyq', 10, false)).to.equal('the quick brown fox jumps over the lazy dog');
  });
});
