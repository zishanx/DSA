let n = 7789 
let reverse = 0

while (n > 0 ){
    let last = n % 10 
    reverse = reverse * 10 + last
    n = Math.floor(n /10)
}

console.log(reverse)
