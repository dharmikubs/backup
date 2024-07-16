import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { INVITETEMPLATE, LOGOWHITE, TEAM, TELECALLER, SESSIONINVITES } from '../assets/index';
import Header from '../Components/Header'

const Sidebar = () => {
    const { pathname } = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className={`flex justify-between custom-shadow items-center sticky top-0 bg-white z-10`}>
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500`}>
                    <svg className={`w-6 h-6`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <Header />
            </div>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 font-Roboto`} aria-label="Sidebar" >
                <div className={`h-full px-3 py-4 overflow-y-auto bg-Black`}>
                    <NavLink to="/team" className={`flex items-center py-4 px-2 mb-10`}>
                        <img src={LOGOWHITE} className={`h-6 me-3 md:h-7`} alt="logo" />
                    </NavLink>
                    <ul className={`space-y-2 font-medium`}>
                        <span className={`px-5 uppercase text-sm font-[900] text-Grey mb-4 tracking-[0.25px]`}>Menu</span>
                        <li className={`mb-2`}>
                            <NavLink to="/team" className={`${pathname?.includes("team") ? "flex items-center text-white bg-[#252525] group p-3" : "flex items-center text-white hover:bg-[#252525] group p-3"}`} >
                                <img src={TEAM} alt="" />
                                <span className={`ms-3`}>Teams</span>
                            </NavLink>
                        </li>
                        <li className={`mb-2`}>
                            <NavLink to="/telecaller" className={`${pathname?.includes("telecaller") ? "flex items-center text-white bg-[#252525] group p-3" : "flex items-center text-white hover:bg-[#252525] group p-3"}`}>
                                <img src={TELECALLER} alt="" />
                                <span className={`ms-3`}>Tele Callers</span>
                            </NavLink>
                        </li>
                        <li className={`mb-2`}>
                            <NavLink to="/sessioninvite" className={`${pathname?.includes("sessioninvite") ? "flex items-center text-white bg-[#252525] group p-3" : "flex items-center text-white hover:bg-[#252525] group p-3"}`}>
                                <img src={SESSIONINVITES} alt="" />
                                <span className={`ms-3`}>Session Invites</span>
                            </NavLink>
                        </li>
                        <li className={`mb-2`}>
                            <button
                                type="button"
                                className={`${pathname?.includes("invitetemplate") ? "flex items-center text-white bg-[#252525] group p-3 w-full transition duration-75" : "flex items-center text-white hover:bg-[#252525] group p-3 w-full transition duration-75"
                                    }`}
                                aria-controls="dropdown-example"
                                onClick={toggleDropdown}
                            >
                                <img src={INVITETEMPLATE} alt="" />
                                <span className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap`}>Invite Templates</span>
                                <svg
                                    className={`w-3 h-3`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example"
                                className={`py-2 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <NavLink
                                        to="invitetemplate/template"
                                        className={`${pathname?.includes("invitetemplate/template") ? "flex items-center w-full p-3 text-white transition duration-75 pl-11 group hover:bg-[#252525]" : "flex items-center w-full p-3 text-Grey transition duration-75 pl-11 group hover:bg-[#252525]"
                                            }`}
                                    >
                                        Templates
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="invitetemplate/createtemplate"
                                        className={`${pathname?.includes("invitetemplate/createtemplate") ? "flex items-center w-full p-3 text-white transition duration-75 pl-11 group hover:bg-[#252525]" : "flex items-center w-full p-3 text-Grey transition duration-75 pl-11 group hover:bg-[#252525]"
                                            }`}
                                    >
                                        Create Template
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar