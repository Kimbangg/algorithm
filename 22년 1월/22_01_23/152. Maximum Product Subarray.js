/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    if ( nums.length === 0 ) return 0;
    
    if ( nums.length === 1 ) return nums[0];
    
    const min_dp = [ nums[0] ];
    const max_dp = [ nums[0] ];
    
    for ( let i = 1; i < nums.length; i++ ) {
        const cur = nums[i];
        
        const min = Math.min(nums[i], min_dp[i-1] * nums[i], max_dp[i-1] * nums[i] )
        const max = Math.max(nums[i], min_dp[i-1] * nums[i], max_dp[i-1] * nums[i] )
              
        min_dp.push(min);
        max_dp.push(max);
    }
    
    return Math.max(...max_dp);
};