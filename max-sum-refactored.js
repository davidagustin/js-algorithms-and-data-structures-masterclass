function maxSubarraySum(arr, num){
  let maxSum = 0; // starts at zero, find the max sum on sliding window
  let tempSum = 0; // temporary store
  if (arr.length < num) return null; // edge case for empty array
  for (let i = 0; i < num; i++) { // get the first maxSum of the sliding window at the start
    maxSum += arr[i]; // get the start of the sliding window
  }
  tempSum = maxSum; // store the maxSum into tempSum just in case a new value is found
  for (let i = num; i < arr.length; i++) { // loop through the whole array once
    tempSum = tempSum - arr[i - num] + arr[i]; // tempSum includes the old number; array[i - num] is the new start of sliding window and and arr[i] is new end of sliding window
    maxSum = Math.max(maxSum, tempSum); // store the higher of the two numbers and when the loop ends, the highest number is recorded
  }
  return maxSum; // return the answer
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);
