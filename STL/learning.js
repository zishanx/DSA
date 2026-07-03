let n = 36
let sol = []

for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {

        sol.push(i)
        if (n / i !== i) {
            sol.push(n / i)
        }
    }
}
// O(n logn): n is the number of factor.
sol.sort((a,b)=> a-b)


// O(number of factor)
sol.forEach(element => {
    console.log(element)
});
