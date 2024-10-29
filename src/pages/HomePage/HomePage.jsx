import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setSort } from '../../store/emploteeSlice/employeeSlice'
import EmployeeList from '../../components/EmployeeList/EmployeeList'
import { Link } from 'react-router-dom'
import { selectFilter, selectSort } from '../../features/employees/selectors'
import FormInput from '../../components/Forms/FormInput'
import FormSelect from '../../components/Forms/FormSelect'

const HomePage = () => {
    const dispatch = useDispatch()

    const sort = useSelector(selectSort)
    const filter = useSelector(selectFilter)

    const handleSortChange = e => {
        dispatch(setSort({ field: e.target.value, order: sort.order }))
    }

    const handleFilterChange = e => {
        const { name, value, type, checked } = e.target
        dispatch(setFilter({ ...filter, [name]: type === 'checkbox' ? checked : value }))
    }

    const toggleSortOrder = () => {
        dispatch(setSort({ field: sort.field, order: sort.order === 'asc' ? 'desc' : 'asc' }))
    }

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Список сотрудников</h1>

            <div className='flex flex-col gap-3 items-center justify-end md:flex-row'>
                <div className='flex gap-3 flex-col md:flex-row'>
                    <label>Сортировать по:</label>
                    <FormSelect className='cursor-pointer' onChange={handleSortChange} value={sort.field}>
                        <option value=''>Без сортировки</option>
                        <option value='name'>Имя</option>
                        <option value='birthday'>Дата рождения</option>
                    </FormSelect>
                    <button className='cursor-pointer' onClick={toggleSortOrder} disabled={!sort.field}>
                        {sort.order === 'asc' ? 'По возрастанию ↑' : 'По убыванию ↓'}
                    </button>
                </div>
                <FormSelect
                    className='p-2 cursor-pointer'
                    name='role'
                    onChange={handleFilterChange}
                    value={filter.role}
                >
                    <option value=''>Все должности</option>
                    <option value='cook'>Повар</option>
                    <option value='waiter'>Официант</option>
                    <option value='driver'>Водитель</option>
                </FormSelect>
                <label className='flex gap-1 p-2'>
                    <FormInput
                        type='checkbox'
                        name='isArchive'
                        onChange={handleFilterChange}
                        checked={filter.isArchive}
                    />
                    В архиве
                </label>
                <Link className='btn' to='/add'>
                    Добавить сотрудника
                </Link>
            </div>
            <EmployeeList />
        </div>
    )
}

export default HomePage
