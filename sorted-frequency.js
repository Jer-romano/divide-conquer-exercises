/**
 * [1, 2, 4, 4, 4, 4, 4,       5, 5, 6, 6, 7, 7, 7]  15
 * @param {*} array 
 * @param {*} number 
 * @returns 
 */
function sortedFrequency(array, number) {
    let startIndex = binarySearch(array, number);
    if (startIndex == -1) return -1;
    else {
        let leftI = findLeftIndex(array, startIndex, number);
        //console.log("left: ", leftI);
        let rightI = findRightIndex(array, startIndex, number);
        //console.log("right:", rightI);
        return rightI - leftI + 1;
    }
}

function findLeftIndex(array, middleIndex, value) {
    let leftIndex = 0;
    let rightIndex = middleIndex;
    while(leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);

        if(array[mid] < value) {
            leftIndex = mid + 1;
        }
        else if(array[mid] == value && array[mid-1] != value) {
            return mid;
        }
        else {
            rightIndex = mid - 1;
        }
    }
}
//[1, 2, 2, 3, 3, 4, 4,      4, 4, 4,       5, 5, 6, 6, 7, 7, 7]  15
function findRightIndex(array, middleIndex, value) {
    let leftIndex = middleIndex;
    let rightIndex = array.length-1;
    while(leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);

        if(array[mid] > value) {
            rightIndex = mid - 1;
        }
        else if(array[mid] == value && array[mid+1] != value) {
            return mid;
        }
        else {
            leftIndex = mid + 1;
        }
    }
}

// function frequencySearch(array, value) {
//     if(array[array.length-1] != value) return 0;
//     else {
//         let leftIndex = 0;
//         let rightIndex = array.length-1;
//         while(leftIndex <= rightIndex) {
//             let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
//             if(array[middleIndex] == value && array[middleIndex-1] != value) {
//                 return array.length - middleIndex;
//             }
//             else if (array[middleIndex] == value && array[middleIndex-1] == value) {
//                 rightIndex = middleIndex;
//             }
//             else {
//                 leftIndex = middleIndex;
//             }
//         }

//     }
// }



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
let res = sortedFrequency([1, 1, 2, 2, 2, 3, 3, 4, 4], 2);
//console.log("Result:", res);
module.exports = sortedFrequency