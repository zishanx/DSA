//Check if the array is sorted. 
// reverse an array 

class Solution {
    sorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }

        return true
    }

    reverse(arr) {
        let reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversed.push(arr[i])
        }
        return reversed
    }

    rev(arr) {
        let l = 0;
        let k = arr.length - 1;
        for (let i = 0; i <= k; i++) {
            if (l >= k) {
                return arr
            }

            [arr[l], arr[k]] = [arr[k], arr[l]]
            l++
            k--
        }
        return arr
    }

    rec(arr, n, l) {

        if (l >= n) {
            return arr
        }

        [arr[l], arr[n - 1]] = [arr[n - 1], arr[l]]


        return this.rec(arr, n - 1, l + 1)
    }
}

