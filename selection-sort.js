// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) { // selection sort is a decrease and conquer algorithm
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]); // parallel reassignment

  for (let i = 0; i < arr.length; i++) { // loop through array
    let lowest = i; // every item from the left will be sorted every iteration starting with the first element, then moves one element to the right
    for (let j = i + 1; j < arr.length; j++) { // go through elements right of selected element
      if (arr[lowest] > arr[j]) { // if selected element has its value higher than currently targeted element
        lowest = j; // currently targeted element becomes new lowest
      }
    }
    if (i !== lowest) swap(arr, i, lowest); // after the nested loop is done, swap the found lowest element or move to next iteration
  }

  return arr; // return sorted array
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
