// Character hashing

const str = "aabbcabc"

const hash = new Array(26).fill(0)

for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    hash[index] += 1
}


function countFrequency(char) {
    let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    console.log(hash[index])
}


countFrequency('b')