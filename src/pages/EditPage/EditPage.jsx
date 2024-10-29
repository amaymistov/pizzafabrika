import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { updateEmployee } from '../../store/emploteeSlice/employeeSlice'
import FormLabel from '../../components/Forms/FormLabel'
import FormInput from '../../components/Forms/FormInput'
import Button from '../../components/Button/Button'
import FormSelect from '../../components/Forms/FormSelect'
import useValidateForm from '../../hooks/useValidateForm'
import { formatDate } from '../../helpers/formatDate'

const EditPage = () => {
    const { id } = useParams()
    const employee = useSelector(state => state.employees.list.find(e => e.id === parseInt(id)))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({ ...employee, birthday: formatDate(employee.birthday) })

    const [error, validate] = useValidateForm()

    const handleChange = e => {
        const { name, value, type, checked } = e.target
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
        validate(value, name)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const formattedForm = { ...form, birthday: formatDate(form.birthday, '-', '.') }
        dispatch(updateEmployee(formattedForm))
        navigate('/')
    }
    return (
        <div className='flex flex-col border p-3'>
            <form className='m-auto w-fit border flex flex-col gap-3 p-4' onSubmit={handleSubmit}>
                <FormLabel label='ФИО:'>
                    <FormInput type='text' name='name' value={form.name} onChange={handleChange} />
                    {error && <span className='text-red-600'>{error.name}</span>}
                </FormLabel>
                <FormLabel label='Номер телефона:'>
                    <FormInput
                        type='tel'
                        placeholder='+7(___)___-__-__'
                        name='phone'
                        value={form.phone}
                        onChange={handleChange}
                    />
                    {error && <span className='text-red-600'>{error.phone}</span>}
                </FormLabel>

                <FormLabel label='Дата рождения:'>
                    <FormInput type='date' name='birthday' value={form.birthday} onChange={handleChange} />
                </FormLabel>

                <FormLabel label='Должность:'>
                    <FormSelect name='role' value={form.role} onChange={handleChange}>
                        <option value=''>Должность:</option>
                        <option value='cook'>Повар</option>
                        <option value='waiter'>Официант</option>
                        <option value='driver'>Водитель</option>
                    </FormSelect>
                </FormLabel>

                <FormLabel label='Переместить сотрудника в архив:'>
                    <FormInput type='checkbox' name='isArchive' checked={form.isArchive} onChange={handleChange} />
                </FormLabel>
                <Button>Сохранить</Button>
            </form>
        </div>
    )
}

export default EditPage
