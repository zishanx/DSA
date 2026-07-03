// Armstrong number 

let n = 7789 
let arms = 0 

while (n > 0){

    let last = n % 10
    n = Math.floor(n/10)
    arms += (last * last * last )
}

if(arms === n ){
console.log(true)
}else{
    console.log(false)
}