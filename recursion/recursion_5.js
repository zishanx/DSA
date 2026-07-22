class Solution {

    // trying it with for loops
    fibonacci(n) {
        let first = 0;
        let second = 1;
        let fib = 0



        for (let i = 0; i < n; i++) {
            console.log(first)
            fib = first + second;
            [first, second] = [second, fib]
        }

    }
}

const sol = new Solution()

sol.fibonacci(4)