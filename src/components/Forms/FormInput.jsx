const FormInput = props => {
    const inputStyle =
        props.type === 'checkbox'
            ? 'min-h-5 min-w-5 cursor-pointer rounded-[4px]'
            : 'rounded-md border border-solid border-gray-300 bg-white px-4 py-2 text-base font-normal text-gray-900 placeholder-gray-500'
    return <input className={inputStyle} {...props} />
}

export default FormInput
