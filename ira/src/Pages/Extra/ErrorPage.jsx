import React from 'react'
import { Link } from 'react-router-dom'
import { IRA_LOGO } from '../../assets'

const ErrorPage = () => {
    return (
        <>
            <div className={`signin_gradiant h-screen flex flex-col justify-center items-center font-quicksand`}>
                <Link to="#">
                    <div className={`head space-y-1 md:space-y-0 md:flex md:items-center md:space-x-4`}>
                        <div className={`img rounded-[15px] p-2.5`}>
                            <img src={IRA_LOGO} className={`w-20`} alt="ira_logo" />
                        </div>
                    </div>
                </Link>
                <span className={`font-semibold`}>ERROR 404 | PAGE NOT FOUND</span>
            </div>
        </>
    )
}

export default ErrorPage