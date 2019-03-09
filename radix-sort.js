function getDigit(num, i) {
  // Math.pow creates the position of the integer, the division an floor removes integers from the end for a set length
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // modulus 10 returns the number from the end
}

function digitCount(num) {
  if (num === 0) return 1; // 0 is edge case
  return Math.floor(Math.log10(Math.abs(num))) + 1; // amount of integers in number is used by log10 and + 1 is used because of floor
}

function mostDigits(nums) { // iterate through all digits
  let maxDigits = 0; // start at 0
  for (let i = 0; i < nums.length; i++) { // iterate through array
    maxDigits = Math.max(maxDigits, digitCount(nums[i])); // find the highest digit length
  }
  return maxDigits;
}

function radixSort(nums){ // sort by ordinal position of digit starting from the end
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){ // go however long the high integer count is, k is used to extract ordinal position with function getDigit
        let digitBuckets = Array.from({length: 10}, () => []); // length is used to generate sequence of numbers 0 to 9 to count frequency of integers by position
        for(let i = 0; i < nums.length; i++){ // iterate through array
            let digit = getDigit(nums[i],k); // get current targeted integer position of element using k, and return that integer to digit
            digitBuckets[digit].push(nums[i]); // digit bucket is indexed 0 through 9 and index it using integer and store number in there
        }
        nums = [].concat(...digitBuckets); // digitBuckets are flattened using concat, integers already in order with current iteration, go one more position left from the end until max digit is made
    }
    return nums; // nums are returned sorted
}

radixSort([23,345,5467,12,2345,9852]);









