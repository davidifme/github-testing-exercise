import { describe, expect, it } from "vitest";
import { reverseString } from "../js/reverseString";

describe('reverseString function', () => {
    it('returns a string', () => {
        expect(reverseString('abc')).toBeTypeOf('string')
    })

    it('takes a string and returns it reversed', () => {
        expect(reverseString('abc')).toBe('cba')
    })

    it('case insensitive', () => {
        expect(reverseString('aBcD')).toBe('DcBa')
    })

    it('takes numbers', () => {
        expect(reverseString('123')).toBe('321')
    })

    it('takes special characters', () => {
        expect(reverseString('!@#')).toBe('#@!')
    })

    it('works only with strings', () => {
        expect(reverseString(123)).toBe('Error')
    })
})