export function reverseString(string = '') {
    if (string === '' || typeof string !== 'string') return 'Error'
    return string.split('').reverse().join('');
}