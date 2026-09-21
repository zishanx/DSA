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

    // working with sqroot method 

    opti(n) {
        let count = 0;
        for (let i = 0; i * i < n; i++) {
            if (n % i === 0) {
                count++
                if (n / i !== i) {
                    count++
                }
            }
        }
        if (count === 2) {
            console.log("it's a prime ")
        } else {
            console.log("it's not a prime.")
        }
    }
}

const sol = new Solution()

// sol.brute(2)
sol.opti(15)