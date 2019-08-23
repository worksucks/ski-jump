const calculateStylePoints = (styleNotes) => {

var notes = styleNotes;

const value_max = notes => (Math.max(...notes));
const value_min = notes => (Math.min(...notes));
const value_total = notes = notes.reduce(total,item) => total + item, 0);

return ((value_total - value_min - value_max) / 3);

module.exports = calculateStylePoints;
