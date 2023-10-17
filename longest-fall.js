// add whatever parameters you deem necessary
function longestFall(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let maxLength = 1; 
  let currentLength = 1; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
    }
  }

  return Math.max(maxLength, currentLength);
};

module.exports =longestFall;
