// reverse an Array 


class Solution {
    reverse(a, l, r) {
        if (l >= r) return a;
        [a[l], a[r]] = [a[r], a[l]]
        return this.reverse(a, l + 1, r - 1)
    }

    // with a single para
    revSing(arr, i) {
        let n = arr.length
        if (i >= n / 2) return arr;

        [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]]

        return this.revSing(arr, i + 1)
    }
}


const sol = new Solution()

let arr = [1, 23, 4, 7, 9]
let l = 0;
let r = arr.length - 1

// console.log(sol.reverse(arr, l, r))

console.log(sol.revSing(arr, l))