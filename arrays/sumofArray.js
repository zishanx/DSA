class Solution {
    sum(arr, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        return sum
    }
}