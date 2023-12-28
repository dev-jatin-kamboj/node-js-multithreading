const arr = [1, 1, 0, -1, -1]

const ratios = [0, 0, 0]
arr.forEach((el) => {
    if (el > 0) {
        ratios[0] += 1
    } else if (el === 0) {
        ratios[1] += 1
    }
    else if (el < 0) {
        ratios[2] += 1
    }
})

const totalLength = arr.length
ratios.forEach((ratio) => {
    console.log(Math.cos(ratio/totalLength));
})

console.log('ratios :>> ', ratios);