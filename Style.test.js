const assert = require('assert');
const formatDate = require('./calculateStylePoints');

var style1 = [17,17,17,17,17];
var style2 = [16.5,17,17,17,17,5];
var style3 = [16.5, 16.5, 16.5, 17, 16.5];
var style4 = [16, 16, 15.5, 15.5, 16];

describe('calculateStylePoints', () => {

        it('should return 51 if all five style notes are 17', () => {
            const actual = calculateStylePoints(style1);

            const expected = '51';

            assert.equal(actual, expected);
        });

        it('should return 51 if the notes are as follows [16.5, 17, 17, 17, 17.5]', () => {
          const actual = calculateDistancePoints(style2);

          const expected = '51';

          assert.equal(actual, expected);
        });

        it('should return 49.5 if the notes are as follows [16.5, 16.5, 16.5, 17, 16.5]', () => {
          const actual = calculateDistancePoints(style3);

          const expected = '49.5';

          assert.equal(actual, expected);
        });

        it('should return 47.5 if the notes are as follows [16, 16, 15.5, 15.5, 16]', () => {
          const actual = calculateDistancePoints(style4);

          const expected = '47.5';

          assert.equal(actual, expected);
        });

});
