class Solution {
    fibonacci(i, n ,fib) {

        if (i > n) {
            console.log(fib)
            return
        }
        
        console.log(1)
        
        fib = fib + i

        this.fibonacci(i + 1 , n)
    }
}

const sol = new Solution()

sol.fibonacci(0,4,0)