// Merge function from earlier
function merge(arr1, arr2){
    let results = []; // data to store elements in this stack frame
    let i = 0; // will be used as an index for arr1
    let j = 0; // will be used to an index for arr2
    while(i < arr1.length && j < arr2.length){ // the arrays will push its elements to results as long as both have elements to give to results array
        if(arr2[j] > arr1[i]){ // if the second array element is bigger, the smaller element goes into the array because of sort
            results.push(arr1[i]); // push the element of arr1
            i++; // move to the next item in arr1
        } else { // arr2 element must be equal or less than the element of arr1
            results.push(arr2[j]); // push the element of arr2
            j++; // move to next item of arr2
        }
    }
    // one of the arrays may still have values to give to results, these elements already have their elements sorted
    while(i < arr1.length) { // when there are items left to push in arr1
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) { // when there are items left to push in arr2
        results.push(arr2[j]);
        j++;
    }
    return results; // return sorted portion of array
}

// Recrusive Merge Sort
// merge sort breaks the arrays into smaller pieces and then sorts them comparing the pieces
function mergeSort(arr){
    if(arr.length <= 1) return arr; // return a single element or no element depending on odd or even length
    let mid = Math.floor(arr.length/2); // cut the arr in half
    let left = mergeSort(arr.slice(0,mid)); // slice array from 0 to mid exclusive by second parameter, this will recursively call itself and slice itself even more
    let right = mergeSort(arr.slice(mid)); // sort right side of sliced array
    return merge(left, right); // sort the sliced arrays and return results until the very first stack frame
}

mergeSort([10,24,76,73]);
