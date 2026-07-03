

let check = 1331
let num = check
let reverse = 0 

while (num > 0) {
    let last = num % 10
    reverse = reverse * 10 + last
    num = Math.floor(num / 10)
}

if (reverse === check) {
    console.log("it's a palindrome")
} else {
    console.log("it's not.")
}