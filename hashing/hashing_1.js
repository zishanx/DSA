
let arr = [2,1,2,4,4,2,5,8,7,2,9,3]

let hash = new Array(1000000).fill(0)

for(let i = 0 ; i < 13 - 1;i ++){
    hash[arr[i]] += 1
}

console.log(hash)