let arr = [1, 2, 1, 3, 2]


function hash(number, array) {

    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) { count++ }

    }

    return count
}

console.log(hash(19, arr))