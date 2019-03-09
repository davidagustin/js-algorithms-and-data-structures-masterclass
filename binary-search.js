// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
// A binary search cuts its search size by half every time it traverses to another node
function binarySearch(arr, elem) { // binary search takes in a sorted array and element to be searched
    var start = 0; // point to start of array
    var end = arr.length - 1; // point to end of array
    var middle = Math.floor((start + end) / 2); // find the middle or the left of middle index if even length
    while(arr[middle] !== elem && start <= end) { // search starts in the middle and while both pointers are pointing to different existing values
        if(elem < arr[middle]) end = middle - 1; // go left if the search is less than current target, now decrease the search size to everything left of the middle
        else start = middle + 1;// go right if search is more than current target, now decrease search size to everything right of the middle
        middle = Math.floor((start + end) / 2); // point the the middle left index with new search size
    }
    return arr[middle] === elem ? middle : -1; // return true if element found or false if not
}

binarySearch([2,5,6,9,13,15,28,30], 103);
