import { describe, expect, it } from "vitest";
import { capitalize } from "../js/capitalize";

describe('capitalize function', () => {
    it('returns a string', () => {
        expect(capitalize('name')).toBeTypeOf('string')
    })

    it('takes a string and returns it with the first character capitalized', () => {
        expect(capitalize('name')).toBe('Name')
    })

    it('case insensitivity', () => {
        expect(capitalize('nAmE')).toBe('Name')
    })

    it('returns an error with empty string', () => {
        expect(capitalize('')).toBe('Error')
    })
})