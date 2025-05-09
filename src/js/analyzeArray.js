export function analyzeArray(array = [1, 2, 3]) {

    if (!Array.isArray(array)) return 'Error'
    if (!array.every(item => typeof item === 'number')) return 'Error'
    if (array.length === 0) return { average: null, min: null, max: null, length: null }

    const length = array.length

    let sum = array.reduce((sum, num) => sum + num, 0)

    let average = 0

    if (array.length === 1) {
        average = array[0]
    } else {
        average = sum / array.length
    }

    const min = array.reduce((minimum, current) => Math.min(minimum, current), array[0])
    const max = array.reduce((maximum, current) => Math.max(maximum, current), array[0])


    return { average, min, max, length } 
}