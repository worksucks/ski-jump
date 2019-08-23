const assert = require('assert');
const formatDate = require('./calculateTotalPoints');

var style1 = [19,20,19.5,19,18.5]; //Kamil Stoch Zakopane
var style2 = [17,17,17.5,17.5,17,5]; //KLemens Murańka - Zakopane
var style3 = [18, 17.5, 17.5, 17.5, 18]; // MAciej Kot - Pyongyang
var style4 = [17.5, 17.5, 17.5, 17, 17]; //Kamil Stoch - Planica

describe('calculateStylePoints', () => {

        it('should return 137.3 if all five style notes are 17', () => {
            const actual = calculateTotalPoints(134,"big",120,style1,0,-5,4);

            const expected = '137,3';

            assert.equal(actual, expected);
        });

        it('should return 110.7' () => {
          const actual = calculateDistancePoints(122,"big",120,style2,0,-4.9);

          const expected = '110.7';

          assert.equal(actual, expected);
        });

        it('should return 109.6', () => {
          const actual = calculateDistancePoints(99,"normal",98,style3,3.2,-8.6);

          const expected = '109.6';

          assert.equal(actual, expected);
        });

        it('should return 179.5', () => {
          const actual = calculateDistancePoints(208.5,"mammoth",200,style4,0,-2.7);

          const expected = '179.5';

          assert.equal(actual, expected);
        });

});
