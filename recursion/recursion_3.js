// reverse an Array 


class Solution {
    reverse(a, l, r) {
        if (l >= r) return a;
        [a[l], a[r]] = [a[r], a[l]]
        return this.reverse(a, l + 1, r - 1)
    }
}


const sol = new Solution()

let arr = [1, 23, 4, 7, 9]
let l = 0;
let r = arr.length - 1

console.log(sol.reverse(arr, l, r))