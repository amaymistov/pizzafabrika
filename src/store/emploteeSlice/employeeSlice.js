import { createSlice } from '@reduxjs/toolkit'
import employeesData from '../../employees.json'

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        list: employeesData,
        filter: { role: '', isArchive: false },
        sort: { field: '', order: 'asc' },
    },
    reducers: {
        updateEmployee: (state, action) => {
            const index = state.list.findIndex(e => e.id === action.payload.id)
            if (index !== -1) state.list[index] = action.payload
        },
        addEmployee: (state, action) => {
            state.list.push({ ...action.payload, id: state.list.length + 1 })
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
    },
})

export const { updateEmployee, addEmployee, setFilter, setSort } = employeeSlice.actions
export default employeeSlice.reducer
