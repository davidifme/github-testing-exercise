export function caesarCipher(string = 'test', shiftFactor = 1) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let encryptedString = ''

    for (let i = 0; i < string.length; i++) {

        const char = string.charAt(i)
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            const newIndex = (index + shiftFactor) % alphabet.length;
            encryptedString += alphabet[newIndex];
        } else {
            encryptedString += char;
        }
    }

    return encryptedString
}
