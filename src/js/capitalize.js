export function capitalize(string = '') {
    if (string === '') return 'Error'
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}