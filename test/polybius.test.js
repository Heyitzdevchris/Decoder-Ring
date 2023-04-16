const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {

  describe("encoding", () => {

    it("should return a string", () => {
      const actual = typeof polybius("thinkful");
      expect(actual).to.equal("string");
    });

    it("should maintain spaces throughout", () => {
      const actual = polybius("hello world");
      expect(actual).to.equal("3251131343 2543241341");
    });

    it("should ignore capital letters", () => {
      const actual = polybius("THINKFUL");
      expect(actual).to.equal("4432423352125413");
    });

    it('should convert "i" and "j" to 42', () => {
      const actual = polybius("ij");
      expect(actual).to.equal("4242");
    });

    it("should encode the input string correctly", () => {
      const actual = polybius("thinkful");
      expect(actual).to.equal("4432423352125413");
    });
  });

  describe("decoding", () => {
    
    it("should return false if the input string has an odd length (excluding spaces)", () => {
      const actual = polybius("44324233521254134", false);
      expect(actual).to.be.false;
    });

    it("should maintain spaces throughout", () => {
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal("hello world");
    });

    it("should show both i and j when decoding 42", () => {
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal("th(i/j)nkful");
    });

    it("should decode the input string correctly", () => {
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal("th(i/j)nkful");
    });
  });
});