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

    factorial(n, fact) {
        if (n === 0) { console.log(fact); return; }
        fact = fact * n
        this.factorial(n - 1, fact)
    }


    // trying to write the recursive code.

    // tc will be Big O of n
    recrFact(n) {
        if (n === 1) return 1
        return n * this.recrFact(n - 1)
    }
}


const sol = new Solution()
const n = 6

// sol.firstN(3, 0)
// console.log(sol.f(3))
// sol.factorial(n, 1)
console.log(sol.recrFact(n))


