import React, { useState } from 'react'
import Model from '../Components/Common/Model'
import Label from '../Components/Common/Label';
import Input from '../Components/Common/Input';
import { DELETE_RECORD, EDIT_RECORD, IMPORT_BTN, CLOSEBTN } from '../assets'

const Telecaller = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={`font-Roboto flex justify-between items-center mb-8`}>
                <span className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[500]`}>Tele Callers Management</span>
            </div>
            <div className={`relative table-shadow rounded-[5px] px-5 bg-white font-Roboto`}>
                <div className={`lg:flex w-full justify-between sm:py-6 p-4 lg:space-y-0 space-y-4  items-center`}>
                    <h3 className={`text-xl text-nowrap text-Black font-bold`}>Tele Callers List</h3>
                    <form className={`flex flex-col sm:flex-row`}>
                        <input type="search" placeholder="Search..." className={`search text-xs nd:text-sm font-[500] p-2.5 md:w-[237px] border border-[#C8C8C8] rounded-[5px] placeholder:text-Grey text-Black mr-2`} />
                        <div className={`flex mt-4 sm:mt-0 justify-center sm:justify-normal`}>
                            <label htmlFor="fileInput" className={`cursor-pointer bg-[#FFFFFF] flex items-center border border-Black text-Black rounded-[5px] text-sm px-[15px] py-[6px] font-[500] text-center mr-2`}>
                                <span className={`mr-2`}><img src={IMPORT_BTN} className={`min-w-5`} alt="" /></span>Import
                            </label>
                            <input type="file" id="fileInput" className={`hidden`}></input>
                            <button className={`bg-Black text-white rounded-[5px] text-sm px-[30px] py-[10px] font-[900] text-center tracking-wider`} type="button" onClick={openModal}>
                                +Add
                            </button>
                        </div>
                    </form>
                    <Model
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        modeltitle="Add Tele Caller"
                        modelbody={
                            <>
                                <div>
                                    <Label
                                        htmlFor="name"
                                        className={`text-sm text-[#4B4B4B]`}
                                    >Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`bg-[#FFFFFF] border border-[#DDDDDD] text-[#010101] placeholder:text-[#979797] text-sm rounded-[5px] block w-full p-3 mt-3 foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`}
                                        placeholder="Name"
                                        autoComplete="off" />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="email"
                                        className={`text-sm text-[#4B4B4B]`}
                                    >Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`bg-[#FFFFFF] border border-[#DDDDDD] text-[#010101] placeholder:text-[#979797] text-sm rounded-[5px] block w-full p-3 mt-3 foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`}
                                        placeholder="Enter Email Address"
                                        autoComplete="off" />
                                </div>

                                <div className={`flex justify-center`}>
                                    <button className={`bg-[#010101] text-[16px] font-semibold md:font-bold text-white rounded-[5px] sm:py-2 sm:px-2 p-2 md:p-2.5 gap-3 mt-3 w-full`}>Add</button>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-Black font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-Grey text-nowrap font-[500]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Email Address
                                </td>
                                <td scope="col" className={`px-11 py-6 text-center rounded-r-[5px]`}>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-Black text-nowrap font-[400]`}>
                            <tr className={`bg-white border-b`}>
                                <td scope="row" className={`px-6 py-4 flex items-center flex-row flex-nowrap`}>
                                    <div className={`bg-[#FFF7E6] px-4 py-4 w-[48px] h-[48px] max-w-[48px] max-h-[48px] rounded-full text-[#F1AF1D]`}>
                                        <p className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-[900]`}
                                        >JS</p>
                                    </div>
                                    <div className={`ps-3`}>
                                        <div className={`font-normal`}>John Smith</div>
                                    </div>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <div>johnsmith@glenmark.com</div>
                                </td>

                                <td className={`px-8 py-6`}>
                                    <div className={`flex justify-center`}>
                                        <button className={`relative mr-4`}>
                                            <img src={EDIT_RECORD} className={`w-5`} alt="" />
                                        </button>
                                        <button className={`relative`}>
                                            <img src={DELETE_RECORD} className={`w-5`} alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className={`bg-white border-b`}>
                                <td scope="row" className={`px-6 py-4 flex items-center flex-row flex-nowra`}>
                                    <div className={`bg-[#F9EEFF] px-4 py-4 w-[48px] h-[48px] max-w-[48px] max-h-[48px] rounded-full text-[#D28FF8]`}>
                                        <p className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-[900]`}
                                        >JS</p>
                                    </div>
                                    <div className={`ps-3`}>
                                        <div className={`font-normal`}>Jim Shanahan</div>
                                    </div>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <div>jimshanahan@glenmark.com</div>
                                </td>

                                <td className={`px-8 py-6`}>
                                    <div className={`flex justify-center`}>
                                        <button className={`relative mr-4`}>
                                            <img src={EDIT_RECORD} className={`w-5`} alt="" />
                                        </button>
                                        <button className={`relative`}>
                                            <img src={DELETE_RECORD} className={`w-5`} alt="" />
                                        </button>
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

export default Telecaller