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

linear(1, 5)
