// print name n times  using recursion.


function print(i,n){
    if(i > n){
        return
    }
    console.log("Zishan")
    print(i + 1 , n )
}


print(1,3);

TL = O(n)
SC = O(n)