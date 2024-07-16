import React from 'react'

const Input = ({ type, id, className, placeholder, name, autoComplete, value, onChange, ...props }) => {
    return (
        <>
            <input type={type} id={id} name={name} className={className} placeholder={placeholder} autoCapitalize={autoComplete} value={value} onChange={onChange} {...props} />
        </>
    )
}

export default Input