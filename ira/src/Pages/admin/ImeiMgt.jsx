import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ACTION_ICON, EXPORT_ICON, IMPORT_BTN } from '../../assets'
import Input from '../../Components/common/Input';
import Label from '../../Components/common/Label';
import Button from '../../Components/common/Button';
import Img from '../../Components/common/Img';

const ImeiMgt = () => {
    const [searchval, setSearchval] = useState('')
    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/dashboard/extendwarrenty';
        link.download = 'dummt.txt'; // specify the file name and extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>IMEI Management</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>IMEI List</h3>
                    <form className={`flex flex-col md:flex-row justify-between space-y-3 md:space-y-0`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3`}
                        />

                        <div className={`flex items-center`}>
                            <div className={`mr-2`}>
                                <Label
                                    className={`bg-white border-2 border-[#383336] flex items-center text-[#383336] rounded-[10px] text-sm p-2.5 font-bold text-center hover:cursor-pointer`}>
                                    <Input
                                        type={`file`}
                                        onChange={handleDownload}
                                        className={`hidden`}
                                    />
                                    <span className={`mr-2 flex items-center`}>
                                        <Img
                                            src={IMPORT_BTN}
                                            className={`w-5 min-w-5`}
                                            alt={``} />
                                        <span className={`ms-2`}>Import</span>
                                    </span>
                                </Label>
                            </div>

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
                            <Link to="/imeimgt/addimei" className={`ml-2`}>
                                <Button
                                    className={`bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center`}
                                    type={`button`}>
                                    +Add
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    IMEI No.
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Model Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Serial No.
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Purchase Date
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Expiry Date
                                </td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px]`}>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            <tr className={`bg-white border-b text-[16px]`}>
                                <td className={`px-8 py-6 text-nowrap`}>
                                    <span>912793185904429</span>
                                </td>
                                <td className={`px-8 py-6 text-nowrap`}>
                                    <span>IRA T808 POWER MEETS SPEED</span>
                                </td>
                                <td className={`px-8 py-6 text-nowrap`}>
                                    <span>BAJHDHFI8234587</span>
                                </td>
                                <td className={`px-8 py-6 text-nowrap`}>
                                    <span>22 Jan, 2023</span>
                                </td>
                                <td className={`px-8 py-6 text-nowrap`}>
                                    <span>24 Dec, 2024</span>
                                </td>
                                <td className={`px-11 py-6`}>
                                    <div>
                                        <Button
                                            id={`action_btn`}
                                            className={`relative`}>
                                            <Img
                                                src={ACTION_ICON}
                                                className={`w-4 min-w-4`}
                                                alt={``} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    )
}

export default ImeiMgt