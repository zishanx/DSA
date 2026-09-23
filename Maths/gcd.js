// >> Highest Commmon Factor 


class Solution {
    brute(x, y) {
        let largest = 0;
        for (let i = 0; i <= Math.min(x, y); i++) {
            if (x % i === 0 && y % i === 0) {
                largest = i
            }
        }
        console.log(largest)
        // >> TL Big O(max(x,y))
    }


    euclid(x, y) {
        // >>Euclidean- The algo go on like GCD(n1,n2) = GCD(n1-n2,n2) where n1 > n2 


        while (x > 0 & y > 0) {
            if (x > y) {
                x = x % y
            } else {
                y = y % x
            }
        }

        console.log(Math.max(x, y))

            // >> Big O(log fi(min(a, b)))
    }
}

const sol = new Solution()

sol.brute(5, 53)

sol.euclid(5, 55)