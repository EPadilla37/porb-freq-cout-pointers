// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const numFrequency = {};
  let count = 0;

  for (let num of arr) {
    const complement = target - num;

    if (numFrequency[complement]) {
      count += numFrequency[complement];
    }

    numFrequency[num] = (numFrequency[num] || 0) + 1;
  }

  return count;
}; 

module.exports = countPairs;