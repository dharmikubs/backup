import React from 'react'

const TextArea = ({ type, id, rows, cols, className, placeholder, autoComplete }) => {
    return (
        <>
            <textarea type={type} id={id} rows={rows} cols={cols} className={className} placeholder={placeholder} autoComplete={autoComplete}></textarea>
        </>
    )
}

export default TextArea