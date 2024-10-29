import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addEmployee } from '../../store/emploteeSlice/employeeSlice'
import Button from '../../components/Button/Button.jsx'
import FormLabel from '../../components/Forms/FormLabel'
import FormInput from '../../components/Forms/FormInput'
import FormSelect from '../../components/Forms/FormSelect'
import useValidateForm from '../../hooks/useValidateForm'
import { formatDate } from '../../helpers/formatDate'

const initialState = {
    name: '',
    isArchive: false,
    role: '',
    phone: '',
    birthday: '',
}

const AddPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState(initialState)
    const [error, validate] = useValidateForm()

    const handleChange = e => {
        const { name, value, type, checked } = e.target
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
        validate(value, name)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const formattedForm = { ...form, birthday: formatDate(form.birthday, '-', '.') }
        dispatch(addEmployee(formattedForm))
        navigate('/')
    }

    return (
        <div className='flex flex-col border p-3'>
            <form className='m-auto w-fit border flex flex-col gap-3 p-4' onSubmit={handleSubmit}>
                <FormLabel label='Введите ФИО:'>
                    <FormInput
                        type='text'
                        name='name'
                        placeholder='Иванов Иван Иванович'
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    {error && <span className='text-red-600'>{error.name}</span>}
                </FormLabel>
                <FormLabel label='Введите телефон:'>
                    <FormInput
                        type='tel'
                        name='phone'
                        placeholder='+7(___)___-__-__'
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                    {error && <span className='text-red-600'>{error.phone}</span>}
                </FormLabel>
                <FormLabel label='Введите дату рождения:'>
                    <FormInput type='date' name='birthday' value={form.birthday} onChange={handleChange} required />
                </FormLabel>
                <FormLabel label='Введите должность:'>
                    <FormSelect name='role' value={form.role} onChange={handleChange} required>
                        <option value=''>Все должности</option>
                        <option value='cook'>Повар</option>
                        <option value='waiter'>Официант</option>
                        <option value='driver'>Водитель</option>
                    </FormSelect>
                </FormLabel>

                <FormLabel label='В архив'>
                    <FormInput type='checkbox' name='isArchive' checked={form.isArchive} onChange={handleChange} />
                </FormLabel>
                <Button>Добавить</Button>
            </form>
        </div>
    )
}

export default AddPage
