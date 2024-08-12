
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(typeof matrix)  
  if (typeof matrix!== 'object') {
      return [];
  } else { 
  for (let i = 1; i < matrix.length; i+=2) { 
  matrix[i].sort( (a, b) => b - a )
  }
  return matrix.flat()
}
}
