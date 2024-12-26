const wordCount = require('../word-count');  // Pastikan path relatif benar

describe('wordCount', () => {
  it('should return correct word counts for a string with distinct words', () => {
    const text = 'lorem ipsum dolor sit amet';
    const result = wordCount(text);
    expect(result).toEqual({
      lorem: 1,
      ipsum: 1,
      dolor: 1,
      sit: 1,
      amet: 1
    });
  });

  it('should count repeated words correctly', () => {
    const text = 'lorem ipsum lorem ipsum lorem';
    const result = wordCount(text);
    expect(result).toEqual({
      lorem: 3,
      ipsum: 2
    });
  });

  it('should handle an empty string', () => {
    const text = '';
    const result = wordCount(text);
    expect(result).toEqual({});
  });

  it('should handle a string with only spaces', () => {
    const text = '     ';
    const result = wordCount(text);
    expect(result).toEqual({});
  });

  it('should handle words with different cases as distinct', () => {
    const text = 'hello Hello hello';
    const result = wordCount(text);
    expect(result).toEqual({
      hello: 2,
      Hello: 1
    });
  });

  it('should handle punctuation attached to words', () => {
    const text = 'hello, hello! world';
    const result = wordCount(text);
    expect(result).toEqual({
      hello: 2,
      world: 1
    });
  });
});
