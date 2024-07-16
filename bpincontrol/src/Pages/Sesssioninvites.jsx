import React, { useState } from 'react';
import { INFO_BTN } from '../assets'; // Make sure the path to the image is correct

const SessionInvites = () => {
    const [activeTooltipId, setActiveTooltipId] = useState(null);

    const handleTooltipToggle = (id) => {
        setActiveTooltipId(activeTooltipId === id ? null : id);
    };

    const handleCloseTooltip = () => {
        setActiveTooltipId(null);
    };

    return (
        <>
            <div className={`font-Roboto flex justify-between items-center mb-8`}>
                <span className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[500]`}>Session Invites</span>
            </div>
            <div className={`relative table-shadow rounded-[5px] px-5 bg-white font-Roboto`}>
                <div className={`lg:flex w-full justify-between sm:py-6 p-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-nowrap text-Black font-bold`}>Session List</h3>
                    <form className={`flex`}>
                        <input type="search" placeholder="Search..." className={`search text-xs nd:text-sm font-[500] p-2.5 md:w-[237px] border border-[#C8C8C8] rounded-[5px] placeholder:text-Grey text-Black mr-2`} />
                        <div className={`relative w-[115px]`}>
                            <select
                                className={`block appearance-none w-full font-bold text-xs border px-4 py-2.5 pr-8 rounded-[5px] focus:ring-1 focus:ring-Black focus:border-Black select`} defaultValue={'Filter'}>
                                <option>Filter</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div
                                className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-Black`}>
                                <svg className={`fill-current h-4 w-4 text-Black`} xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 12.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L10 12.586z" />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-Black font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-Grey text-nowrap font-[500]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Date
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Time
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Session Topic
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Sales Person
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Sales Team
                                </td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px]`}>
                                    Status
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-Black text-nowrap font-[400]`}>
                            <tr className={`bg-white border-b`}>
                                <td scope="row" className={`px-6 py-4`}>
                                    <span>6 Jan, 2024</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>05:00PM</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Patient care</span>
                                </td>
                                <td className={`px-8 py-6 flex`}>
                                    <span className={`mr-1`}>Dr. John Smith</span>
                                    <button type="button" onClick={() => handleTooltipToggle('tooltip-1')}>
                                        <img src={INFO_BTN} className={`min-w-5`} alt="" />
                                    </button>

                                    {activeTooltipId === 'tooltip-1' && (
                                        <div>
                                            <div id="modal-overlay" className={`fixed top-0 right-0 left-0 bottom-0 bg-black opacity-10 z-40`} onClick={handleCloseTooltip}></div>
                                            <div id="tooltip-1" role="tooltip" className={`absolute z-50 inline-block p-4 text-sm font-medium text-Black bg-white rounded-lg shadow-sm tooltip`}>
                                                <div className={`flex items-start justify-start`}>
                                                    <div className={`bg-[#F9EEFF] px-4 py-4 w-[48px] h-[48px] max-w-[48px] max-h-[48px] rounded-full text-[#D28FF8]`}>
                                                        <p className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-[900]`}>JS</p>
                                                    </div>
                                                    <div className={`ms-3 flex flex-col items-start justify-start`}>
                                                        <span className={`text-lg font-medium`}>Dr. John Smith</span>
                                                        <span className={`text-base font-normal mb-1`}>M.B.B.S | Physician</span>
                                                        <span className={`text-Grey font-normal`}>Health Care Hospital</span>
                                                    </div>
                                                </div>
                                                <div className={`tooltip-arrow`} data-popper-arrow></div>
                                            </div>
                                        </div>
                                    )}
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Mark Hannery</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Team 1 Name</span>
                                </td>
                                <td className={`px-8 py-4.5`}>
                                    <select id="countries" className={`bg-[#5138A00D] border-[#5138A00D] text-Secondary text-sm rounded-[80px] block w-[180px] py-1.5 px-3`} defaultValue={'Assign Moderator'}>
                                        <option className={`pl-4`}>Assign Moderator</option>
                                        <option value="Canceled" className={`pl-4`}>Canceled</option>
                                        <option value="Callback Requested" className={`pl-4`}>Callback Requested</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className={`bg-white border-b`}>
                                <td scope="row" className={`px-6 py-4`}>
                                    <span>6 Jan, 2024</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>05:00PM</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Patient care</span>
                                </td>
                                <td className={`px-8 py-6 flex`}>
                                    <span className={`mr-1`}>Dr. John Smith</span>
                                    <button type="button" onClick={() => handleTooltipToggle('tooltip-2')}>
                                        <img src={INFO_BTN} className={`min-w-5`} alt="" />
                                    </button>

                                    {activeTooltipId === 'tooltip-2' && (
                                        <div>
                                            <div id="modal-overlay" className={`fixed top-0 right-0 left-0 bottom-0 bg-black opacity-10 z-40`} onClick={handleCloseTooltip}></div>
                                            <div id="tooltip-2" role="tooltip" className={`absolute z-50 inline-block p-4 text-sm font-medium text-Black bg-white rounded-lg shadow-sm tooltip`}>
                                                <div className={`flex items-start justify-start`}>
                                                    <div className={`bg-[#F9EEFF] px-4 py-4 w-[48px] h-[48px] max-w-[48px] max-h-[48px] rounded-full text-[#D28FF8]`}>
                                                        <p className={`w-4 h-4 flex items-center justify-center tracking-wide text-sm font-[900]`}>JS</p>
                                                    </div>
                                                    <div className={`ms-3 flex flex-col items-start justify-start`}>
                                                        <span className={`text-lg font-medium`}>Dr. John Smith</span>
                                                        <span className={`text-base font-normal mb-1`}>M.B.B.S | Physician</span>
                                                        <span className={`text-Grey font-normal`}>Health Care Hospital</span>
                                                    </div>
                                                </div>
                                                <div className={`tooltip-arrow`} data-popper-arrow></div>
                                            </div>
                                        </div>
                                    )}
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Mark Hannery</span>
                                </td>
                                <td className={`px-8 py-6`}>
                                    <span>Team 1 Name</span>
                                </td>
                                <td className={`px-8 py-4.5`}>
                                    <select id="countries" className={`bg-[#5138A00D] border-[#5138A00D] text-Secondary text-sm rounded-[80px] block w-[180px] py-1.5 px-3`} defaultValue={'Assign Moderator'}>
                                        <option className={`pl-4`}>Assign Moderator</option>
                                        <option value="Canceled" className={`pl-4`}>Canceled</option>
                                        <option value="Callback Requested" className={`pl-4`}>Callback Requested</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    );
}

export default SessionInvites;
