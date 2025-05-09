export const calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    divide: function(a, b) {
        if (a === 0 || b === 0) return 'Error'
        return a / b
    },
    multiply: function(a, b) {
        return a * b
    }
}