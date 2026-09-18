class Solution {
    basic(n) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                console.log(i)
            }
        }
    }



    // the one with the square root . \

    rooot(n) {

        let nums = []
        for (let i = 0; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                nums.push(i)
                let k = n / i;
                if (i !== k) {
                    nums.push(k)
                }
            }
        }
        nums.sort((a, b) => a - b)
        console.log(nums)
    }


    mathi(n) {
        let nums = []
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                nums.push(i)
                let k = n / i
                if (k !== i) {
                    nums.push(k)
                }
            }
        }
        nums.sort((a, b) => a - b)
        console.log(nums)
    }
}

const sol = new Solution()


sol.mathi(36)