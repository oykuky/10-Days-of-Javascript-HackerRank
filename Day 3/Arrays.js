/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
//SOLUTION 1
function getSecondLargest(nums) {
    // Complete the function
    let newNums=nums.sort((a, b) => b - a); // 6 6 5 3 2 sort in descending order
    let uniq = [...new Set(newNums)]; //unique array  --> 6 5 3 2
    return uniq[1]; // result is 5
}

//SOLUTION 2

// function getSecondLargest(nums) {
// let maxFirst = 0
// let maxSecond = 0
// for(let i=0;i<nums.length;i++){
//     if(maxFirst<nums[i])
//         maxFirst = nums[i];
// }

// for(let i=0;i<nums.length;i++){
//     if(maxSecond<nums[i] && nums[i] < maxFirst)
//         maxSecond = nums[i];
// }
// return maxSecond
// }