/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted
 *  numbers and an integer. The function should return the index of num in the array. 
 * If the value is not found, return -1.
  Some pseudocode I wrote
        start at middle of array [4]
        if value at index + 1 is less than the middle index's value, then we have found the max
        else 
        if value is less than the first element in the array, then the max is to the left and
        the new right index is the middle index
        if value is greater than the first element, then the max is to the right and the new 
        left index is the middle index
 */
function findRotatedIndex(array, value) {
    //first we find the max value. This also tells us the number of times the array has been rotated
    let leftIndx = 0, bsResult = 0;
    let rightIndx = array.length - 1;
    while(leftIndx <= rightIndx) {
        let middleIndx = Math.floor((leftIndx + rightIndx) / 2);
        if (array[middleIndx + 1] < array[middleIndx]) { //we've found the max

            // slice relevant portion of array and do BS to find value
            if(value > array[0]) {
                bsResult = binarySearch(array.slice(0, middleIndx+1), value);
                return (bsResult == -1 ? -1 : bsResult);
            }
            else {
                bsResult = binarySearch(array.slice(middleIndx, array.length), value);
                return (bsResult == -1 ? -1 : bsResult + middleIndx);
            }
        }
        else if(array[middleIndx] < array[0]) {
            rightIndx = middleIndx;
        }
        else {
            leftIndx = middleIndx;
        }
    }
    return -1;
}


function binarySearch(array, value) {
    let leftIndex = 0;
    let rightIndex = array.length-1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(array[middleIndex] < value) {
            leftIndex = middleIndex + 1;
        }
        else if (array[middleIndex] > value) {
            rightIndex = middleIndex - 1;
        }
        else {
            return middleIndex;
        }
    }
    return -1;
}
module.exports = findRotatedIndex