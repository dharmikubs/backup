import React from 'react'
import { EXIT } from '../assets/index'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className={`py-3 px-5 z-10`}>
                <nav className={`flex justify-between`}>
                    <ul className={`flex justify-end space-x-1 items-center`}>
                        <li className={`flex`}>
                            <Link to="/signin" className={`w-[50px] h-[50px]`}>
                                <img src={EXIT} className={`p-[0.8rem] bg-[#F9F9F9] rounded-[50%]`} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className={`bg-[#F9EEFF] px-[17px] py-[17px] rounded-full text-[#D28FF8]`}>
                                    <p
                                        className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                                        JS</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header