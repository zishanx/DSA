// Write a program to determine if a given number is palindrome or not . palindrome are number in which thhe number is exactly same as reverse. E.g 121 1221 131 123321 7 

function pal(n) {
    let reverse = 0;
    let num = n;

    while (num > 0) {
        let d = 0;
        d = num % 10;
        reverse = reverse * 10 + d;
        num = Math.floor(num / 10)
    }


    if(n === reverse){
        console.log("it's an palindrome")
    }else{
        console.log("it's not a palindrome.")
    }

}

pal(21)