function fibonic(n) {
    if (n<=1) {
        return n
    }
    return  fibonic(n - 1) + fibonic(n - 2)
}

console.log('fibonic(30) :>> ', fibonic(30));