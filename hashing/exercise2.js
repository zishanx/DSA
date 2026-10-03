// Given an array of n integers, find the second most frequent element in it.

// If there are multiple elements that appear second most frequent times, find the smallest of them.

// If second most frequent element does not exist return -1.


const arr = [5,5,5,5]

function secondMax(nums) {

    const map = new Map()

    for (const value of nums) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }

    console.log(map)

    //finding the max key and value pair.

    let max = -Infinity
    let maxkey = Infinity

    for (const [key, value] of map) {
        if (max < value) {
            max = value
            maxkey = key
        } else if (max === value && maxkey > key) {
            maxkey = key
        }
    }

    // i'm gonna do a second loop again . in which i will try to find the second largest. 

    let secondMax = 0
    let secondKey = 0

    for (const [key, value] of map) {
        if (value < max) {
            if (secondMax === value && secondKey > key) {
                secondKey = key
            } else if (secondMax < value) {
                secondMax = value
                secondKey = key
            }
        }
    }

    if(!secondKey){
        return -1
    }

    return secondKey

}

console.log(secondMax(arr))