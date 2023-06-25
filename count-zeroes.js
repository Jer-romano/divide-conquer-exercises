/**
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***,
 *  which returns the number of zeroes in the array.
**Constraints**:
Time Complexity: O(log N)
 * @param {*} array 
 * @returns int
 * [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
 * [0. 1. 2. 3. 4. 5. 6. 7. 8. 9. 10]
 * start at middle index in array
 * if number is a 0, check number to left to see if it is a 1.
 *      if it is, we have found the index
 *      if it is not, we must move the search left
 * if number is a 1, check number to right to see if it is a 0.
 *      if it is, we have found the index
 *      if it is not, we must move the search to the right (split)
 */
function countZeroes(array) {
  if(array[array.length - 1] == 1) return 0;
  else if (array[0] == 0) return array.length;
  else {
    let numZeros, middleIndx;
    let leftIndx = 0;
    let rightIndx = array.length - 1;
    while(leftIndx <= rightIndx) {
        middleIndx = Math.floor((leftIndx + rightIndx) / 2);

        if(array[middleIndx] == 0) {
            if(array[middleIndx - 1] == 1) {
                numZeros = array.length - middleIndx;
                return numZeros;
            }
            else {
                rightIndx = middleIndx;
            }
        } 
        else { // array[middleIndx] == 1
            if(array[middleIndx + 1] == 0) {
                numZeros = array.length - middleIndx - 1;
                return numZeros;
            }
            else leftIndx = middleIndx;
        }
    }

  }
}

module.exports = countZeroes