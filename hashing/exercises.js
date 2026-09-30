const arr = [1, 2, 2, 3, 1, 4, 2, 3, 5]

const map = new Map()

for (const value of arr) {
    if (map.has(value)) {
        map.set(value, map.get(value) + 1)
    } else {
        map.set(value, 1)
    }
}

console.log(map)

let minValue = Infinity
let min = null

for (const [key, value] of map) {
    if (value < minValue) {
        minValue = value
        min = key
    }
}

console.log(min)