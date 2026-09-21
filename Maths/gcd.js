// >> Highest Commmon Factor 


class Solution {
    brute(x, y) {
        let largest = 0;
        for (let i = 0; i <= Math.max(x, y); i++) {
            if (x % i === 0 && y % i === 0) {
                largest = i
            }
        }
        console.log(largest)
    }
}

const sol = new Solution()

sol.brute(5, 53)