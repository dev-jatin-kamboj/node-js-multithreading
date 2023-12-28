function createStaircase(n) {
    for (let i = 0; i < n; i++) {
        const spacesCount = n - i + 1
        // const hashesCount = i === 0 ?1:i
        // console.log('spacesCount :>> ', spacesCount);
        const spaces = " ".repeat(spacesCount - 2)
        const hashes =  "#".repeat(i + 1)
        console.log(spaces+ hashes)
    }
}

createStaircase(6)