//Reverse a give Array

class solution {


    // two var 

    reverseArray(arr, l, r) {

        if (l >= r) { return console.log(arr) }

        [arr[l], arr[r]] = [arr[r], arr[l]];

        this.reverseArray(arr, l + 1, r - 1)

    }

    // with a single var

    rev(i, arr) {
        let n = arr.length

        if (i >= n / 2) { return console.log(arr) }

        [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

        this.rev(i + 1, arr)
    }

}

let a = [1, 2, 3, 4, 5, 2, 1]

const sol = new solution

// sol.reverseArray(a, 0, a.length - 1)
sol.rev(0, a)