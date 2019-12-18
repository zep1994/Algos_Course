function addUpTo(n) {
    let total = 0 
    for (let i = 0; i <= n; i++) {
        //console.log(i)
        total += i
    }
    console.log(total)
}

// let t1 = performance.now()
// addUpTo(210000)
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t1 - t2) / 1000} seconds`)

addUpTo(210000)