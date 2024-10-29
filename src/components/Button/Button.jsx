const Button = props => {
    const { children, type = 'submit', ...otherProps } = props
    return (
        <button type={type} className='btn' {...otherProps}>
            <span>{children}</span>
        </button>
    )
}

export default Button
