/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
//..............i
const numsB1 = [2, 2, 6, 6, 7];
//..............j
const expected1 = [2, 7];



//[2,7]

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 * 1. increment that has the smaller value
 */
function orderedIntersection(sortedA, sortedB) {

    let newNums = [];
    let i = 0;
    let j = 0;
    // as long as i is within the bounds of its array and J is within the bounds of its array, enter the loop
    while (i < sortedA.length && j < sortedB.length ){
        //want to check if the values are equal
        if (sortedA[i] == sortedB[j]){
            //push the the new nums array only if the last value is not equal to the current matching value
            //if the new nums does not include the current value, then push the value to newNums, which is what the ! is doing
            if (newNums[newNums.length-1]!= sortedA[i]){
                newNums.push(sortedA[i]);
                }
                // going to incrument either way, so we put it outside the statement
                i ++;
                j ++;
        } else if (sortedA[i] < sortedB[j]) {
            i ++
        } else if (sortedB[j] < sortedA[i]) {
            j ++
        }
        

    }

    return newNums;

}


console.log(orderedIntersection(numsA1,numsB1));

/*****************************************************************************/