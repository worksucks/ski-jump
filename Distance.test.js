const assert = require('assert');
const formatDate = require('./calculateDistancePoints');

describe('calculateTotalPoints', () => {
    describe('Normal Ski Jump', () => {
        it('should return 78 if distance is 99m and KPoint is 98m', () => {
            const actual = calculateDistancePoints(99,"normal",98);

            const expected = '78';

            assert.equal(actual, expected);
        });

        it('should return 50 meters if values are passed', () => {
          const actual = calculateDistancePoints(93,"normal",98);

          const expected = '78';

          assert.equal(actual, expected);
        });
    });

    describe('Big Ski Jump', () => {
        it('should return 85.2 if distance is 134m & KPoint in 120', () => {
            const actual = calculateDistancePoints(134,"big",120);

            const expected = '85.2';

            assert.equal(actual, expected);
        });

        it('should return 54.6 if distance is 117m & KPoint in 120', () => {
          const actual = calculateDistancePoints(117,"normal",120);

          const expected = '54.6';

          assert.equal(actual, expected);
        });
    });

    describe('Mammoth Ski Jump', () => {
        it('should return 153 if distance is 134m & KPoint in 200', () => {
            const actual = calculateDistancePoints(227.5,"mammoth",200);

            const expected = '153';

            assert.equal(actual, expected);
        });

        it('should return 118.8 if distance is 199m & KPoint in 200', () => {
          const actual = calculateDistancePoints(199,"mammoth",200);

          const expected = '118.8';

          assert.equal(actual, expected);
        });
    });
});
