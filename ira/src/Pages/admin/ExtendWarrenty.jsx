import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EXPORT_ICON } from '../../assets'
import Img from '../../Components/common/Img'
import Input from '../../Components/common/Input'
import Button from '../../Components/common/Button'

const ExtendWarrenty = () => {
    const [searchval, setSearchval] = useState('')
    const data = [
        {
            id: 1,
            userName: 'Dharmik',
            email: 'dharmik@gmail.com',
            phoneNo: '9727604649',
            modelNo: 'IRA',
            IMEINo: '9727604649',
            serialNo: '9727604649ABC',
            dateTime: '20 Jun 2024 9:24 PM'
        },
        {
            id: 2,
            userName: 'Dharmik',
            email: 'dharmik@gmail.com',
            phoneNo: '9727604649',
            modelNo: 'IRA',
            IMEINo: '9727604649',
            serialNo: '9727604649ABC',
            dateTime: '20 Jun 2024 9:24 PM'
        },
    ]
    const handleDownload = (e) => {
        e.preventDefault();
        const link = document?.createElement('a');
        link.href = '/dashboard/extendwarrenty';
        link.download = 'dummt.txt'; // specify the file name and extension
        document?.body?.appendChild(link);
        link.click();
        document?.body?.removeChild(link);
    };
    return (
        <>
            <div className={`lg:flex justify-between items-center mb-8`}>
                <h2 className={`text-lg lg:text-2xl font-bold`}>Extend Warrenty Request</h2>
                {/* bread crumb  */}
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/dashboard" className={`text-sm font-medium text-[#3983336]`}>Dashboard</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>            <div className={`flex items-center`}>
                            <span className={`text-sm font-bold text-[#3983336]`}>Extend Warrenty Request</span>
                        </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Extend Warrenty Request List</h3>
                    <form className={`flex justify-between`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3`}
                        />
                        <Link to="/dashboard/extendwarrenty" onClick={handleDownload}>
                            <Button
                                className={`bg-white border-2 border-[#383336] flex items-center text-[#383336] rounded-[10px] text-sm p-2.5 font-bold text-center`}
                                type={`button`}>
                                <span className={`mr-2 flex items-center`}>
                                    <Img
                                        src={EXPORT_ICON}
                                        className={`w-5 min-w-5`}
                                        alt={``} />
                                    <span className={`ms-2`}>Export</span>
                                </span>
                            </Button>
                        </Link>
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    User Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Email
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Phone No.
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Model No.
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    IMEI No.
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Serial No.
                                </td>
                                <td scope="col" className={`px-11 py-6 rounded-r-[5px]`}>
                                    Date & Time
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {data?.map((item) => (
                                <tr key={item?.id} className={`bg-white border-b text-[16px]`}>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.userName}</td>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.email}</td>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.phoneNo}</td>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.modelNo}</td>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.IMEINo}</td>
                                    <td className={`px-8 py-6 text-wrap`}>{item?.serialNo}</td>
                                    <td className={`px-8 py-6 text-nowrap`}>{item?.dateTime}</td>
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

export default ExtendWarrenty