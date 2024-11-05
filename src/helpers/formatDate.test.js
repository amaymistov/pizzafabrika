import { formatDate } from './formatDate.js'

describe('formatDate', () => {
    test('correctly formats date with default separators', () => {
        expect(formatDate('25.12.2021')).toBe('2021-12-25')
    })

    test('correctly formats date with custom fromSeparator', () => {
        expect(formatDate('25/12/2021', '/')).toBe('2021-12-25')
    })

    test('correctly formats date with custom toSeparator', () => {
        expect(formatDate('25.12.2021', '.', '/')).toBe('2021/12/25')
    })

    test('correctly formats date with custom fromSeparator and toSeparator', () => {
        expect(formatDate('25/12/2021', '/', '.')).toBe('2021.12.25')
    })
})
