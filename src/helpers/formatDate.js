export function formatDate(dateString, fromSeparator = '.', toSeparator = '-') {
    const [day, month, year] = dateString.split(fromSeparator)

    return `${year}${toSeparator}${month}${toSeparator}${day}`
}
