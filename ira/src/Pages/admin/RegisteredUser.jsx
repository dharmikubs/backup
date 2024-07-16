import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/common/Input';


const RegisteredUser = () => {
    const [searchval, setSearchval] = useState('')
    const data = [
        {
            id: 1,
            name: `dharmik`,
            email: `dharmik@gmail.com`
        },
        {
            id: 2,
            name: `harsh`,
            email: `harsh@gmail.com`
        },
    ]
    return (
        <>
            <div className={`lg:flex justify-between items-center mb-8`}>
                <h2 className={`text-lg lg:text-2xl font-bold`}>Registered Users</h2>
                {/* bread crumb  */}
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/dashboard" className={`text-sm font-medium text-[#3983336]`}>Dashboard</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>
                            <div className={`flex items-center`}>
                                <span className={`text-sm font-bold text-[#3983336]`}>Registered Users</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Registered Users List</h3>
                    <form className={`flex justify-between`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336]`}
                        />
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Email Address
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {data?.map((item) => (
                                <tr key={item?.id} className={`bg-white border-b text-[16px]`}>
                                    <td className={`px-8 py-6 text-nowrap`}>
                                        <span>{item?.name}</span>
                                    </td>
                                    <td className={`px-8 py-6 text-nowrap`}>
                                        <span>{item?.email}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    )
}

export default RegisteredUser