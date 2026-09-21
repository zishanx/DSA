class Solution {
    brute(n) {
        let count = 0;
        for (let i = 0; i <= n; i++) {
            if (n % i === 0) {
                count++
            }
        }

        if (count === 2) {
            console.log("it's a prime number")
        } else {
            console.log("it's not a prime number")
        }

        // TL Big O(n)
    }
}

const sol = new Solution()

sol.brute(2)