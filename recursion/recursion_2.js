class Solution {

    // Sum of first N numbers
    firstN(i, sum) {
        if (i < 1) { console.log(sum); return; }
        this.firstN(i - 1, sum + i)
    }


    f(n) {
        if (n === 0) return 0;

        return n + this.f(n - 1)
    }
}


const sol = new Solution()
const n = 3

sol.firstN(3, 0)
console.log(sol.f(3))


