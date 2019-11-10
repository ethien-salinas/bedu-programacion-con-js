const multiplicaPorDos = (arr) => {
    // return arr.map(e => e*2) // versión corta
    return arr.map((e) => {
        return e * 2
    })
}

console.log(multiplicaPorDos([5, 6, 7, 8, 9, 10]))
console.log(multiplicaPorDos([15, 14, 13, 12]))