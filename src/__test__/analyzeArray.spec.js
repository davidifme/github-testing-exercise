import { describe, expect, it } from "vitest";
import { analyzeArray } from "../js/analyzeArray";

describe('analyzeArray function', () => {
    it('only takes arrays', () => {
        expect(analyzeArray(123)).toBe('Error')
    })
    it('returns an object', () => {
        expect(analyzeArray([1, 2, 3])).toBeTypeOf('object')
    })
    it('takes only array with numbers', () => {
        expect(analyzeArray(['1', '2', 3])).toBe('Error')
    })
    it('returns an object with the following properties: average, min, max, and length', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
    })
    it('works with empty array', () => {
        expect(analyzeArray([])).toEqual({ average: null, min: null, max: null, length: null })
    })
})