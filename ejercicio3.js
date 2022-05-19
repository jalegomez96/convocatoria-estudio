var myArray = [1, 2, 9, 3,
    0, 2, 1, 1,
    1, 0, 0, 4,
    5, 3, 2, 0];
var n = 4;

var rArray = myArray.reduce((prev, curr, index) => {
    if (index < n) prev.push([])
    i = index % n
    prev[i].push(curr)
    return prev
}, [])


var steps = []
let pos = 0
let a = 0
let b = n - 1
for (let i = 0; i < n; i++) {
    let min = rArray[i][a]
    pos = a
    for (let j = a; j <= b; j++) {
        if (min > rArray[i][j]) {
            pos = j
            min = rArray[i][j]
        }
    }
    steps.push(min)
    a = pos > 0 ? pos - 1 : pos
    b = pos < n ? pos + 1 : pos
    console.log({ a, b, pos: pos + 1 })
}

console.log(steps.join(' '))