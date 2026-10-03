// Given an array nums of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.


const arr = [5, 5, 5, 4, 4, 4, 6]

console.log(arr)

function getHigh(arra) {

    const map = new Map()


    for (const value of arra) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }

    let max = -Infinity
    let maxKey

    for (const [key, value] of map) {
        if (max < value) {
            max = value
            maxKey = key
        } else if (max === value) {
            if (maxKey > key) {
                maxKey = key
            }
        }
    }

    return maxKey

}

getHigh(arr)