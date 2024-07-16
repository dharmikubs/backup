import React, { useState } from 'react'
import { USERCOUNT, CLOSEBTN } from '../assets/index'
import Model from '../Components/Common/Model'
import Label from '../Components/Common/Label'
import Input from '../Components/Common/Input'
import { Link } from 'react-router-dom'

const Team = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={`font-Roboto flex justify-between items-center`}>
                <span className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[500]`}>Sales Management</span>
                <button className={`text-white bg-Black px-8 py-2 rounded-[5px] font-[900]`} id="open-modal-button" onClick={openModal}>+Add</button>
            </div>
            <Model
                isOpen={isModalOpen}
                closeModal={closeModal}
                modeltitle="Add New Team"
                modelbody={
                    <>
                        <div>
                            <Label
                                htmlFor="teamname"
                                className={`text-sm text-[#4B4B4B]`}
                            >Team Name</Label>
                            <Input
                                type="text"
                                id="teamname"
                                name="teamname"
                                className={`bg-[#FFFFFF] border border-[#DDDDDD] text-[#010101] placeholder:text-[#979797] text-sm rounded-[5px] block w-full p-3 mt-3 foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`}
                                placeholder="Enter Team Name"
                                autoComplete="off" />
                        </div>
                        <div className={`flex justify-center`}>
                            <button className={`bg-[#010101] text-[16px] font-semibold md:font-bold text-white rounded-[5px] sm:py-2 sm:px-2 p-2 md:p-2.5 gap-3 mt-3 w-full`}>Add</button>
                        </div>
                    </>
                }
            />

            <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-4 2xl:gap-6 my-10`}>
                <Link to="/team/detail" className={`card-shadow bg-white p-6 flex flex-col`}>
                    <div className={`bg-[#FFF7E6] px-[17px] py-[17px] rounded-full text-[#F1AF1D] w-[48px] h-[48px] mb-5`}>
                        <p
                            className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                            TN</p>
                    </div>
                    <span className={`font-bold text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl mb-2 text-wrap`}>Team 1 Name</span>
                    <div className={`flex justify-between w-full`}>
                        <span className={`text-Grey text-sm w-1/2 break-words`}>ID #123456</span>
                        <div className={`flex items-center font-[500] justify-end w-1/2`}>
                            <img src={USERCOUNT} alt="" className={`align-top`} />
                            <span className={`text-[#5138A0] ml-2 text-sm align-top`}>6</span>
                        </div>
                    </div>
                </Link>
                {/* <Link to="" className={`card-shadow bg-white p-6 flex flex-col`}>
                    <div className={`bg-[#F9EEFF] px-[17px] py-[17px] rounded-full text-[#D28FF8] w-[48px] h-[48px] mb-5`}>
                        <p
                            className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                            TN</p>
                    </div>
                    <span className={`font-bold text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl mb-2 text-wrap`}>Team 2 Name</span>
                    <div className={`flex justify-between w-full`}>
                        <span className={`text-Grey text-sm w-1/2 break-words`}>ID #123456</span>
                        <div className={`flex items-center font-[500] justify-end w-1/2`}>
                            <img src={USERCOUNT} alt="" className={`align-top`} />
                            <span className={`text-[#5138A0] ml-2 text-sm align-top`}>20</span>
                        </div>
                    </div>
                </Link>
                <div className={`card-shadow bg-white p-6 flex flex-col`}>
                    <div className={`bg-[#FFEEEE] px-[17px] py-[17px] rounded-full text-[#FE9898] w-[48px] h-[48px] mb-5`}>
                        <p
                            className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                            TN</p>
                    </div>
                    <span className={`font-bold text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl mb-2 text-wrap`}>Team 3 Name</span>
                    <div className={`flex justify-between w-full`}>
                        <span className={`text-Grey text-sm w-1/2 break-words`}>ID #123456</span>
                        <div className={`flex items-center font-[500] justify-end w-1/2`}>
                            <img src={USERCOUNT} alt="" className={`align-top`} />
                            <span className={`text-[#5138A0] ml-2 text-sm align-top`}>20</span>
                        </div>
                    </div>
                </div>
                <div className={`card-shadow bg-white p-6 flex flex-col`}>
                    <div className={`bg-[#FFF7E6] px-[17px] py-[17px] rounded-full text-[#F1AF1D] w-[48px] h-[48px] mb-5`}>
                        <p
                            className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-bold`}>
                            TN</p>
                    </div>
                    <span className={`font-bold text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl mb-2 text-wrap`}>Team 4 Name</span>
                    <div className={`flex justify-between w-full`}>
                        <span className={`text-Grey text-sm w-1/2 break-words`}>ID #123456</span>
                        <div className={`flex items-center font-[500] justify-end w-1/2`}>
                            <img src={USERCOUNT} alt="" className={`align-top`} />
                            <span className={`text-[#5138A0] ml-2 text-sm align-top`}>20</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Team