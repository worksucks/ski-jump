const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateDistancePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  
  return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;
