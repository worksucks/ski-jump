const calculateDistancePoints = (distance, hillSize, kPoint) => {
  switch (hillSize) {
    case: "normal":
      var given_points = 60;
      if (distance > kPoint) {
        return given_points + (distance-kPoint)*2;
      }
      else {
        return given_points - (kPoint-distance)*2;
      }
    case: "big":
      var given_points = 60;
      if (distance > kPoint) {
        return given_points + (distance-kPoint)*1.8;
      }
      else {
        return given_points - (kPoint-distance)*1.8;
      }
    case: "mammoth":
      var given_points = 120;
      if (distance > kPoint) {
        return given_points + (distance-kPoint)*1.2;
      }
      else {
        return given_points - (kPoint-distance)*1.2;
      }

  }
}

module.exports = calculateDistancePoints;
