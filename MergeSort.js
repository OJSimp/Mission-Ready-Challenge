// Write pseudo code or JavaScript to implement a Merge Sort.

const inputNumbers = document.getElementById("inputNumbers");
const sortButton = document.getElementById("sortButton");
const sortedNumbers = document.getElementById("sortedNumbers");
const unSortedNumbers = document.getElementById("unSortedNumbers");

sortButton.addEventListener("click", () => {
  const unsortedArray = inputNumbers.value.split(",").map(Number);
  unSortedNumbers.textContent = unsortedArray.join(", ");

  // Sorted numbers
  const sortedArray = mergeSort(unsortedArray);
  sortedNumbers.textContent = sortedArray;
});

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
