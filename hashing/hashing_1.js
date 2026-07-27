
let arr = [2, 1, 2, 4, 4, 2, 5, 8, 7, 2, 9, 3]

let hash = new Array(13).fill(0)

for (let i = 0; i < 13 - 1; i++) {
    hash[arr[i]] += 1
}

function finding(number) {
    return hash[number]
}

console.log(finding(6))