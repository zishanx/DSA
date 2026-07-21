class Solution {
    palindrom(pal, i) {
        let n = pal.length



        if (i >= (n - i - 1)) {
            console.log("It's a palindrome")
            console.log(i)
            return
        }
        
        if (pal[i] !== pal[n - i - 1]) {
            console.log("It's not a palindrome")
            return
        }
        console.log("This run this time")
        this.palindrom(pal, i + 1)
    }
}

const sol = new Solution()


let check = "abcdcba"


sol.palindrom(check, 0)