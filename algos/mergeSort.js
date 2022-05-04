// if an array has only one value, is it sorted? 
/*takes two arrays that are already assorted, gives back an array that combines those two assorted arrays. 
1. make a new array to put both these arrays in
*/

/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
// const sortedA1 = [];
// const sortedB1 = [];
// const expectedMerge1 = [];

// const sortedA2 = [5];
// const sortedB2 = [2];
// const expectedMerge2 = [2, 5];

// const sortedA3 = [3];
// const sortedB3 = [2, 3, 4, 7];
// const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    //loop thorugh the arrays. compared which array has the smaller value at their current index. whichever array has the smaller value, we are going to put that smaller value in that result, are we comparing i and J
    while(i < arr1.length && j < arr2.length){
        //if the value at array 1 at its index is smaller than the value of array2 at its index
        if(arr1[i]< arr2[j]){
           result.push(arr1[i]);
           //i will increment to the next value and compare if arr1 is smaller
           i++
        }
        else if(arr2[j]< arr1[i]){
            result.push(arr2[j]);
            //i will increment to the next value and compare if arr2 is smaller
        }
        else {
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++;
            j++;
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        result.push(arr2[j]);
        i++;
    }
    //as long as j is less than the lenght of the Array, push values from second array and increment j
    console.log(result) 
    return result;
}

// mergeSort
// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function mergeSort(nums) {}

merge(sortedA4, sortedB4);