// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  // bubble sort is a decrease and conquer algorithm
  for(var i = arr.length; i > 0; i--){  // the sorted elements will be marked from the right side of the array, elements are sorted from the right side when nested for loop finishes
    noSwaps = true; // this is here to prevent iterating over an already sorted array
    for(var j = 0; j < i - 1; j++){ // possible unsorted elements decrease every time by one from the end when for loop finishes, dont need to look at the last element because of swap
      if(arr[j] > arr[j+1]){ // if the adjacent element to the right is bigger
        var temp = arr[j]; // store target element in a temporary variable
        arr[j] = arr[j+1]; // replace target element with adjacent element
        arr[j+1] = temp; // full swap with target and adjacent element has taken place
        noSwaps = false; // a swap has taken place so the loop will continue
      }
    }
    if(noSwaps) break; // break when no swaps are made
  }
  return arr; // return sorted array
}

bubbleSort([8,1,2,3,4,5,6,7]);
