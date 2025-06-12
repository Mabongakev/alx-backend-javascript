const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round inputs correctly (1.4 + 4.5 = 6)', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  });

  it('should round both down (1.3 + 2.2 = 3)', () => {
    assert.strictEqual(calculateNumber(1.3, 2.2), 3);
  });

  it('should round both up (1.6 + 2.8 = 5)', () => {
    assert.strictEqual(calculateNumber(1.6, 2.8), 5);
  });

  it('should round one up and one down (1.5 + 2.4 = 4)', () => {
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });

  it('should work with negative numbers (-1.4 + -2.6 = -4)', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should work with mix of positive and negative numbers (1.4 + -2.6 = -1)', () => {
    assert.strictEqual(calculateNumber(1.4, -2.6), -1);
  });

  it('should handle zeros correctly (0 + 0 = 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});

