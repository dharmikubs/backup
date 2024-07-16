import React, { useState } from 'react'
import { FILE_INPUT_ICON } from '../assets'
import Model from '../Components/Common/Model'
import Label from '../Components/Common/Label'

const CreateTemplate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={`lg:w-[90%]`}>
                <div className={`font-Roboto flex justify-between items-center`}>
                    <span className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[500]`}>Create Template</span>
                    <button className={`text-white bg-Black px-8 py-2 rounded-[5px] font-[900]`} onClick={openModal}>Save</button>
                </div>
                <Model
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    modeltitle="Select Team"
                    modelbody={
                        <>
                            <div>
                                <Label
                                    htmlFor="teamslect"
                                    className={`text-sm text-[#4B4B4B]`}
                                >Choose Team</Label>
                                <select id="teamslect" className={`custom-select bg-[#FFFFFF] border border-[#DDDDDD] text-Grey placeholder:text-[#979797] text-sm rounded-[5px] block w-full p-3 mt-3 foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`}>
                                    <option selected>Select Team</option>
                                    <option value="team1">Team Name 1</option>
                                    <option value="team2">Team Name 2</option>
                                    <option value="team3">Team Name 3</option>
                                </select>
                            </div>

                            <div className={`flex justify-center`}>
                                <button className={`bg-[#010101] text-[16px] font-semibold md:font-bold text-white rounded-[5px] sm:py-2 sm:px-2 p-2 md:p-2.5 gap-3 mt-3 w-full`}>Add</button>
                            </div>
                        </>
                    }
                />
                <div className={`flex flex-col xl:flex-row w-full mt-5 font-Roboto bg-white`}>
                    <div className={`w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:w-[650px] xl:h-[700px] relative  border-2 border-dashed border-[#D3C6AB]`}>
                        <div className={`w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:w-[650px] xl:h-[700px] m-auto flex flex-col items-center justify-center`}>
                            <img src={FILE_INPUT_ICON} alt="" className={`mb-3`} />
                            <span className={`text-black mb-5 font-[700] text-xl`}>Drag & Drop Image</span>
                            <span className={`text-Grey mb-12 font-[500] text-sm`}>Please upload an image in the template</span>
                            <label htmlFor="upload_profile" className={`w-full flex items-center justify-center cursor-pointer`}>
                                <div className={`bg-Black text-white font-[900] text-sm px-3 py-2 rounded-[5px] cursor-pointer tracking-wide`}>
                                    Browse File
                                </div>
                            </label>
                            <input type="file" className={`hidden`} id='upload_profile' name='upload_profile' />
                        </div>
                    </div>
                    <div className={`flex justify-center w-full p-4`}>
                        <div className={`flex flex-col text-center`}>
                            <span className={`mt-5 mb-4 font-bold text-lg tracking-wide`}>Drag & Drop</span>
                            <span className={`mb-12`}>This component drag & drop and set on this side templates</span>
                            <span>Doctor Name</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTemplate