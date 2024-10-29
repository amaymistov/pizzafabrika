import { useState } from 'react'

const phoneRegex = /^((\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/

const useValidateForm = () => {
    const [error, setError] = useState({})

    const validate = (value, name) => {
        setError(prevError => {
            const newError = { ...prevError }

            if (name === 'name' && value.length < 3) {
                newError[name] = 'Не менее 3 символов'
            } else if (name === 'phone' && !phoneRegex.test(value)) {
                newError[name] = 'Некорректный формат телефона'
            } else {
                delete newError[name]
            }

            return newError
        })
    }

    return [error, validate]
}

export default useValidateForm
