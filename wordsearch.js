const transpose = function (matrix) {
    let tempArray = [];
    let finalArray = [];
  
    for (let i = 0; i < matrix[0].length; i++) { //2 - items in each array = column
      for (let j = 0; j < matrix.length; j++) {  //3 - arrays total = row    
        tempArray.push(matrix[j][i]); // iterate 3 times
        if (tempArray.length === matrix.length) {
          finalArray.push(tempArray);
          tempArray = [];
        };
      }
    }
    return finalArray;
  };  


const wordSearch = (letters, word) => { 
  if (letters.length === 0) {
    return false;
  };
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log(horizontalJoin);
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''))
  //console.log(verticalJoin)
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true
    };
  };
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true
    };
  };
  return false;
};

// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK'))

// 1. Check to find the word horizontally and vertically
// 2. Return true if the word is found, and return false if the word is not found


module.exports = wordSearch;
