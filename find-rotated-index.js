/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted
 *  numbers and an integer. The function should return the index of num in the array. 
 * If the value is not found, return -1.
 * findRotatedIndex([3,4,1,2],4) // 1
   findRotatedIndex([6, 7, 8, 9, 10, 11, 1, 2, 3, 4], v = 8) // 2
                     0, 1, 2, 3, 4,  5,  6  7, 8, 9   
                     [8, 9, 1, 2, 3, 4, 5, 6, 7]
                    start at middle of array [4]
                    if value at index + 1 is less than the middle index's value, then we have found the max
                    else 
                    if value is less than the first element in the array, then the max is to the left and
                    the new right index is the middle index
                    if value is greater than the first element, then the max is to the right and the new 
                    left index is the middle index
   findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6 
 */
//findRotatedIndex([3,4,1,2],4)
function findRotatedIndex(array, value) {
    let leftIndx = 0;
    let rightIndx = array.length - 1;
    while(leftIndx <= rightIndx) {
        let middleIndx = Math.floor((leftIndx + rightIndx) / 2);
        if (array[middleIndx + 1] < array[middleIndx]) { //we've found the max
            // convert array and do BS to find value
            return binarySearch(array.slice(middleIndx+1, array.length).concat(array.slice(middleIndx+1)), value);
            if(value > array[0]) {
                return binarySearch(array.slice(0, middleIndx+1), value);
            }
            else {
                return binarySearch(array.slice(middleIndx, array.length), value) + middleIndx;
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