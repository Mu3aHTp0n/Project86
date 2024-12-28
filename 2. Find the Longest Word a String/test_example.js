   // test.js
   const assert = require('chai').assert;
   const findLongestWord = require('./lengthMostWord');

   describe('Find longest word', function() {
       it('should return the longest word in a string', function() {
           const result = findLongestWord("The quick brown fox jumps over the lazy dog");
           assert.equal(result, 'quick');
       });
   });
   