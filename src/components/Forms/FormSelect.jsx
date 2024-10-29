const FormSelect = props => {
    const { children, ...otherProps } = props
    return <select {...otherProps}>{children}</select>
}

export default FormSelect
