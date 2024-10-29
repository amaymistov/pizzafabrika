const FormLabel = props => {
    const { children, label } = props

    return (
        <label className='flex gap-1 flex-col md:flex-row md:items-center'>
            <div className='flex-1 text-start'>
                <span className='text-start'>{label}</span>
            </div>
            {children}
        </label>
    )
}

export default FormLabel
