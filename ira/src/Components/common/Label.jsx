import React from 'react'

const Label = ({ htmlFor, id, className, children }) => {
    return (
        <>
            <label htmlFor={htmlFor} id={id} className={className}>{children}</label>
        </>
    )
}

export default Label