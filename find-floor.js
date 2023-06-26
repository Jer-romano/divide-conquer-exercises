/**
 * Write a function called findFloor which accepts a sorted array and a value x, and returns the
 *  floor of x in the array. The floor of x in an array is the largest element in the array which 
 * is smaller than or equal to x. If the floor does not exist, return -1.
 * findFloor([1,2,8,10,10,12,19], 9) // 8
   findFloor([1,2,8,10,10,12,19], 20) // 19
   findFloor([1,2,8,10,10,12,19], 0) // -1
 */
function findFloor(array, value) {
    if(array[0] > value) return -1;

    let leftIndex = 0, middleIndex = 0;
    let rightIndex = array.length-1;
    if(array[rightIndex] < value) return array[rightIndex];

    while(leftIndex <= rightIndex) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(array[middleIndex] == value) return value;
        if(array[middleIndex] < value && array[middleIndex+1] > value) {
            return array[middleIndex];
        }
        else {
            if(array[middleIndex] < value) {
                leftIndex = middleIndex + 1;
            }
            else if (array[middleIndex] > value) {
                rightIndex = middleIndex - 1;
            }
        }
    }
        return array[middleIndex];
}
//console.log("Result", findFloor([1, 2, 8, 10, 10, 12, 19], 5));
module.exports = findFloor