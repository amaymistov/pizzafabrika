import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ROLE_MATCHING } from '../../enums/role'
import { selectFilteredAndSortedEmployees } from '../../features/employees/selectors'
import RowCell from '../Table/RowCell'
import HeaderCell from '../Table/HeaderCell'

const EmployeeList = () => {
    const navigate = useNavigate()

    const employees = useSelector(selectFilteredAndSortedEmployees)

    return (
        <div className='w-full'>
            <div className='w-full overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-gray-250'>
                            <HeaderCell>ФИО</HeaderCell>
                            <HeaderCell>Дата рождения</HeaderCell>
                            <HeaderCell>Должность</HeaderCell>
                            <HeaderCell>Телефон</HeaderCell>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(employee => (
                            <tr
                                onClick={() => navigate(`/edit/${employee.id}`)}
                                key={employee.id}
                                className='cursor-pointer border-b border-gray-250 hover:bg-gray-100'
                            >
                                <RowCell>{employee.name}</RowCell>
                                <RowCell>{employee.birthday}</RowCell>
                                <RowCell>{ROLE_MATCHING[employee.role]}</RowCell>
                                <RowCell>{employee.phone}</RowCell>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList
