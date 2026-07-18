

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
}

const sol = new Solution()

const N = 5
const name = "Zishan"

sol.printname(name, 0, N)
sol.printLinear(1, N)
sol.printBackwards(1,N)

