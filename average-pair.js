// add whatever parameters you deem necessary
function averagePair(arr, target) {
  if (arr.length < 2) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;

    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

module.exports = averagePair;
