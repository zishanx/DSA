//Reverse a give Array

class solution {

    reverseArray(arr, l, r) {

        if (l >= r) {return console.log(arr)}

        [arr[l], arr[r]] = [arr[r], arr[l]];

        this.reverseArray(arr, l + 1, r - 1)

    }

}

let a = [1, 2, 3, 4, 5, 2, 1]

const sol =   new solution

sol.reverseArray(a, 0, a.length - 1)