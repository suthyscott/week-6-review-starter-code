const {maxAndMin} = require('../public/testFunc')

let testArr = [4,2,3,5,6,1]

describe('maxAndMin Tests', () => {
    test('checks that the correct numbers are returned', () => {
        let result = maxAndMin(testArr)
        expect(result).toEqual([6, 1])
    })

    test('checks length of processed array', () => {
        let result = maxAndMin(testArr)
        expect(result).not.toHaveLength(testArr.length)
    })
})