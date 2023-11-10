function findMissingNumber(nums) {
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return nums.length; 
}


const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); 

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); 

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); 