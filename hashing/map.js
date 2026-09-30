const arr = [1, 2, 2, 3, 1, 4, 2];

const max = Math.max(...arr)

const hash = new Array(max + 1).fill(0)

for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1
}

let maxOcc = 0
let index = 0

for (let i = 0; i < hash.length; i++) {
    if (hash[i] > 0) {
        if (maxOcc < hash[i]) {
            maxOcc = hash[i]
            index = i
        }
    }
}

console.log(index)