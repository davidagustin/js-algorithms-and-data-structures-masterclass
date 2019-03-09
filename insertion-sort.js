// values are removed and reinserted base on a comparison
function insertionSort(arr){ // insertion sort is a decrease an conquer algorithm
	var currentVal; // pointer created
    for(var i = 1; i < arr.length; i++){ // var i = 1 marks first element as sorted, this makes part of the array that was already extracted element except first element
        currentVal = arr[i]; // select element
        // j = i - 1 may potentially put currentVal left of first element
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // nested for loop a iterate backwards after selecting element, will keep moving until reinsertion
            // extracted element is pulled out and compared to the element to the left of it
            arr[j+1] = arr[j] // if extracted element is less than the value to the left, move that value to the right so the extracted element can compare the next left element
        }
        arr[j+1] = currentVal; // if extracted element is greater than the value to the left, insert itself
    }
    return arr;
}

insertionSort([2,1,9,76,4]);
