import useValidateForm from './useValidateForm'

describe('Phone Number Validation', () => {
    test('Valid phone numbers should return true', () => {
        expect(useValidateForm('+7 (123) 456-78-90')).toBe(true)
    })
})
