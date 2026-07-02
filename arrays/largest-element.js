// Problem: Largest Element in Array
// Link: https://takeuforward.org/...

function largestElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}


// ---- Test cases ----
console.log(largestElement([2, 5, 1, 3, 0]));   // expect 5
console.log(largestElement([8, 10, 5, 7, 9]));  // expect 10
console.log(largestElement([1]));               // expect 1