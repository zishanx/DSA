// Okie so we started it with extracting digits. 

// Firstly let's say we have a digit 99789. What we can do first is modulo of that digit and we will get the last digit . Now we can divide it by 10 and take only the integer part of it using Math.floor() and then do this till n becomes 0 . we will have extracted each digit in reverse order. 

class Solution 
    extract = (n) => {
        while (n > 0) {
            let d = n % 10;
            console.log(d);
            d = Math.floor(d/10)
        }
    }


let sol = new Solution()

sol.extract(99789);