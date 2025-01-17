const assert = require('chai').assert;

const factorial = require('./factorial')


describe('Factorial', () => {
    it('should return 1 for input 0', () => {
        const result = factorial(0);
        assert.equal(result, 1);
    });
    
    it('should return 1 for input 1', () => {
        const result = factorial(1);
        assert.equal(result, 1);
    });
    
    it('should return 6 for input 3', () => {
        const result = factorial(3);
        assert.equal(result, 6);
    });
    
    it('should return 24 for input 4', () => {
        const result = factorial(4);
        assert.equal(result, 24);
    });
});