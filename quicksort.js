// helper function for pivot
function pivot(arr, start = 0, end = arr.length - 1) { //a quicksort uses a pivot and each a pointer for start and end nodes
  const swap = (arr, idx1, idx2) => { // arr is mutated by the swap
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // parallel re assignment of swapping of elements
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start]; // pivot is the first element in the beginning, or the far left of the cut array
  let swapIdx = start; // is actually to the right of the pivot

  for (let i = start + 1; i <= end; i++) { // look at values at the right of the pivot
    if (pivot > arr[i]) { // if values to the right is smaller than the pivot
      swapIdx++; // elements less than pivot are grouped up to the right of the pivot by increasing the swap position right by 1 every match
      swap(arr, swapIdx, i); // swap the element than is less than the pivot
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx); // when the for loop is done, the pivot element switches with the element of the swap index, after the swap, the pivot now is greater than all the elements before it
  return swapIdx; // the swap index becomes the new pivot, the data now is divided according to the new pivot
}

function quickSort(arr, left = 0, right = arr.length -1){ // point to beginning and end at first
    if(left < right){ // as long as the left and right pointers don't meet
        let pivotIndex = pivot(arr, left, right); // find the current pivot index after doing a sort operation

        quickSort(arr,left,pivotIndex-1); // recursively call itself by cutting the array and looking at its left portion
        //right
        quickSort(arr,pivotIndex+1,right); // recursively call itself by cutting the array and looking at its right portion
      }
     return arr; // return the sorted array
}

quickSort([100,-3,2,4,6,9,1,2,5,3,23]);




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




