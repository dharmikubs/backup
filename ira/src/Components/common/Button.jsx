import React from 'react'

const Button = ({ type, id, className, onClick, children }) => {
    return (
        <>
            <button type={type} id={id} className={className} onClick={onClick} >{children}</button>
        </>
    )
}

export default Button