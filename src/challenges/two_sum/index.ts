function twoSum(nums: number[], target: number): number[] {
    const numSet = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(target - nums[i])) {
            return [nums.indexOf(target - nums[i]), i];
        }
        numSet.set(nums[i], i);
    }
    return [];
}
const nums1 = [2, 4, 6, 8];
const target1 = 10;
console.log(twoSum(nums1, target1)); // Resultado esperado [ 1, 2 ]

const nums2 = [5, 10, 15, 20, 25];
const target2 = 20;
console.log(twoSum(nums2, target2)); // Resultado esperado: [1, 3]