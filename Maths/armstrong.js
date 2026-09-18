function arm(n) {
    let num = n;
    let sum = 0;
    while (num > 0) {
        let d = 0;
        d = num % 10;
        sum += Math.pow(d, n.toString().length);
        num = Math.floor(num / 10)

        console.log(d)
        console.log(sum)
    }

    if (sum === n) { console.log("Armstrong") } else { console.log("Nahhh!") }
}

arm(1634);