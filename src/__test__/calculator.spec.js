import { describe, expect, it } from "vitest";
import { calculator } from "../js/calculator";

describe('Calculator functions', () => {
    describe('add function', () => {
        it('adds two numbers', () => {
            expect(calculator.add(2, 2)).toBe(4)
        }) 
        it('adds negative numbers', () => {
            expect(calculator.add(-2, -2)).toBe(-4)
        })
    })

    describe('subtract function', () => {
        it('subtracts two numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2)
        }) 
        it('subtracts negative numbers', () => {
            expect(calculator.subtract(-5, -3)).toBe(-2)
        })
    })

    describe('divide function', () => {
        it('divide two numbers', () => {
            expect(calculator.divide(2, 2)).toBe(1)
        })
        it('divide decimal numbers', () => {
            expect(calculator.divide(1, 0.25)).toBe(4)
        })
        it('divide two decimal numbers', () => {
            expect(calculator.divide(0.6, 0.25)).toBe(2.4)
        })
        it('dividing by zero throws an error', () => {
            expect(calculator.divide(4, 0)).toBe('Error')
        })
    })

    describe('multiply function', () => {
        it('multiplies two numbers', () => {
            expect(calculator.multiply(2, 3)).toBe(6)
        })
        it('multiplies negative numbers', () => {
            expect(calculator.multiply(-2, -3)).toBe(6)
        })
        it('multiplies decimal numbers', () => {
            expect(calculator.multiply(0.5, 0.2)).toBe(0.1)
        })
    })
})