
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let layer = false;
  const towels = [];
  for (row of matrix) {
    if (layer) row = row.reverse();
    for (sym of row) {
      towels.push(sym);
    }
    layer = !layer;
  }
  return towels;
}
