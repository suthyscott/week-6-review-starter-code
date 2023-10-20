function maxAndMin(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return [max, min]
}

module.exports = {
    maxAndMin
}