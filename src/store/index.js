import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './emploteeSlice/employeeSlice'

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
})
