/* 
Recursion:- Recursion is when a function calls itself .until a condition is met .


The condition to stop it is called a base condition.

There can be single based condition and multiple based condition.


Recursion tree.
The call of function one by one by one . all those funciton make a recursion tree 
*/

let count = 0 


function f() {
    if(count === 3 ){
        return
    } // Here this if is the base condition . 
    console.log(count)
    count++
    f() 
}

f()