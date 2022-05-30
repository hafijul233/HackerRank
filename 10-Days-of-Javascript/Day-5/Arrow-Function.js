/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 *  Line number 10 is example of arrow function
 */
function modifyArray(nums) {
    return nums.map(num => {
        return (num%2 === 0) ? num*2 : num * 3;
    });
}
