import { createSelector } from '@reduxjs/toolkit'
import { formatDate } from '../../helpers/formatDate'

export const selectEmployees = state => state.employees.list
export const selectFilter = state => state.employees.filter
export const selectSort = state => state.employees.sort

export const selectFilteredAndSortedEmployees = createSelector(
    [selectEmployees, selectFilter, selectSort],
    (employees, filter, sort) => {
        const filtered = employees
            .filter(e => (filter.role ? e.role === filter.role : true))
            .filter(e => (filter.isArchive ? e.isArchive : true))

        const sorted = filtered.sort((a, b) => {
            let result = 0

            if (sort.field === 'name') {
                result = a.name.localeCompare(b.name)
            } else if (sort.field === 'birthday') {
                result = new Date(formatDate(a.birthday)) - new Date(formatDate(b.birthday))
            }

            return sort.order === 'asc' ? result : -result
        })

        return sorted
    }
)
