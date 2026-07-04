// Euclidean Algo

/* 
GCD(n1, n2) = gcd(n1-n2, n2)  where n1 > n2


gcd (a,b) = gcd(a % b , b) where a > b 

greater % smaller till one of them is zero when one of them is zero the other is gcd .
*/

let a = 50

let b = 100

while (a > 0 && b > 0) {
    if (a > b) {
        a = a % b
    } else {
        b = b % a
    }


}
if (a === 0) {
    console.log("GCD is " + b)
} else {
    console.log("GCD is " + a)
}

// TC = O(log fi(min(a,b)))