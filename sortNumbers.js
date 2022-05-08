function solution(nums) {
  if (nums.length === 0) {
    return nums;
  }
  const numsSorted = nums.sort((a, b) => a - b);
  return numsSorted;
}

solution([1, 2, 6, 5, 3, 10]);
