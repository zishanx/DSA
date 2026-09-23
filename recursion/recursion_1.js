// print name n times

function print(i, n) {
    if (i > n) return
    console.log("Zishan")
    print(i + 1, n)
}

// TC will be big O of n O(n)
// SC will be big O of n O(n) the computer memory uses stack space . 

// print(1, 5)

function linear(i, n) {
    if (i > n) return
    console.log(i)
    linear(i + 1, n)
}


//Tc will be big O of n.
//Sc will be big O of n.

// linear(1, 5)

function backwards(i, n) {
    if (i > n) return
    console.log(n)
    backwards(i, n - 1)
}
// Tc will be of big O of n 
// Sc will be of big O of n 


// backwards(1, 5)


// Now we are going to work with Backtracking. 


function backtrack(i, n) {
    if (i > n) return
    backtrack(i + 1, n)
    console.log(i)
}

backtrack(1, 3)