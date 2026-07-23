
// Fibonnaci we know that fib(i) = fib(i-1) + fib(1-2) and i guess we will have to remember it too . 

class Solution {

    // trying it with for loops
    fibonacci(n) {
        
        let fib = [0,1]
        for(let i = 2; i < n ; i++){
            fib.push(i-1 + i-2);
        }
        console.log(fib[n])


    }

    fib(n) {
        if (n <= 1) return n

        let last = this.fib(n - 1)
        let sLast = this.fib(n - 2)

        return last + sLast
    }
}

const sol = new Solution()

sol.fibonacci(4)
console.log(sol.fib(4))