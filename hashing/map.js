const arr = [1, 2, 2, 3, 1, 4, 2]

const hash = new Array(5).fill(0)

for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1;
}

console.log(hash)

function find(num) {
    console.log(hash[num])
}

find(2)
