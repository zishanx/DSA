// Prime number :- the number that has exactly two factors 1 and itself

let n = 6

let count = 0
/*
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++
    }
}

if (count === 2) {
    console.log("it's a prime number")
} else {
    console.log("it's not a prime number.")
}
*/
// TL = O(N)

for (let i = 1; i * i <= n; i++) {
    if(n % i === 0 ){
        count ++
        if( n / i !== i ){
            count ++
        }
    }
}

if(count == 2 ){
    console.log("it's prime")
}else {
    console.log("it's not a prime")
}
