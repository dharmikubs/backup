import React from 'react'
import { EXIT } from '../../assets/index'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Header = () => {
    const handleLogOut = () => {
        toast.success("Logged Out Successfully")
    }
    return (
        <>
            <header className={`py-3 px-5 z-10  border-b-[#E3E0D8] font-quicksand`}>
                <nav className={`flex justify-between`}>
                    <ul className={`flex justify-end space-x-1 items-center`}>
                        <li className={`flex`}>
                            <Link to="/login" onClick={handleLogOut} className={`w-[50px] h-[50px]`}>
                                <img src={EXIT} className={`p-[0.8rem] bg-[#FAFAFA] rounded-[50%]`} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <div className={`bg-[#A8CF45] px-3.5 py-3.5 rounded-full text-black`}>
                                    <span
                                        className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                                        JS</span>
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