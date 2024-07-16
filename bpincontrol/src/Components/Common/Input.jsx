import React from 'react'

const Input = ({ type, id, name, className, placeholder, autoComplete }) => {
    return (
        <>
            <input type={type} id={id} name={name} className={className} placeholder={placeholder} autoComplete={autoComplete} required />
        </>
    )
}

export default Input