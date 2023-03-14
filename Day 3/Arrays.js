/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let newNums=nums.sort((a, b) => b - a); // 6 6 5 3 2 sort in descending order
    let uniq = [...new Set(newNums)]; //unique array  --> 6 5 3 2
    return uniq[1]; // result is 5
}