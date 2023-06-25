function findRotationCount(array) {
  if(array[0] < array[array.length-1]) return 0;
  let leftIndex = 0;
  let rightIndex = array.length-1;
  while(leftIndex <= rightIndex) {
      let mid = Math.floor((leftIndex + rightIndex) / 2);

      if(array[mid] > array[mid+1]) {
          return mid + 1;
      }
      else if(array[mid] < array[0]) {
          rightIndex = mid - 1;
      }
      else {
          leftIndex = mid + 1;
      }
  }
}

module.exports = findRotationCount