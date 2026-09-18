class Solution {
    reverse(n) {

        let d = 0
        let reverse = 0
        while (n > 0) {
            d = n % 10
            reverse = reverse * 10 + d
            n = Math.floor(n / 10)
            console.log(d)
        }

        console.log(reverse)
    }
}

const sol = new Solution()

sol.reverse(8974)