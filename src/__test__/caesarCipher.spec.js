import { describe, expect, it } from "vitest";
import { caesarCipher } from "../js/caesarCipher";

describe('caesarCipher function', () => {
    it('returns a string', () => {
        expect(caesarCipher('password', 0)).toBeTypeOf('string')
    })
    it('returns a "shifted" string', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd')
    })
    it('wraps to index 0 after reaching the end of the array', () => {
        expect(caesarCipher('xyz')).toBe('yza')
    })
    it('works with big shiftFactor', () => {
        expect(caesarCipher('abc', 100)).toBe('wxy')
    })
})