function findingTheMissingNum(nums) {
  const set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
const nums = [1, 3, 6, 4, 1, 2];
const smallestMissing = findingTheMissingNum(nums);
console.log(smallestMissing);
