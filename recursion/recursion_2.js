

class Solution {
    //print name N time ; 
    printname(name, count, N) {

        //Base Condition to stop the recursion
        if (count === N) return

        console.log(name)

        this.printname(name, count + 1, N)

    }

    //print linear from 1 to n . 

    printLinear(count, N) {
        if (count > N) return

        console.log(count)
        this.printLinear(count + 1, N)
    }

    //print in terms of N to 1 

    printBackwards(count, N) {

        //Base condition
        if (N < count) return

        process.stdout.write(N + " ")

        //recursion

        this.printBackwards(count, N - 1)
    }

    //factors in  rucrusion 

    factors(i, n) {
        //Base Condition 

        if (i > n) { return }
        this.factorial(i + 1, n)

        if (n % i === 0) {
            process.stdout.write(i + " ")
        }

    }


    // summation of first n numbers  parameter way 

    summation(sum, i, n) {
        if (i > n) {
            console.log(sum)
            return
        } 
        sum = sum + i

        this.summation(sum, i + 1, n)
    }

    //summation in returning function way

    funcSum(n){
        if(n === 0 ) return 0 

        return n + this.funcSum(n - 1)
    }

    
}

const sol = new Solution()

const N = 5
const name = "Zishan"

sol.printname(name, 0, N)
sol.printLinear(1, N)
sol.printBackwards(1, N)
sol.factorial(1,100)
sol.summation(0, 1, 5)
console.log(sol.funcSum(3))


