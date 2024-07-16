import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../common/Button'
import Img from '../common/Img'
import Header from './Header';
import {
    IRA_LOGO_SIDEBAR,
    DASHBOARD_LOGO,
    IMEI_LOGO,
    PRODUCT_MGT_LOGO,
    SPAREPART_LOGO,
    SERVICECENTER_MGT_LOGO,
    FAQ_LOGO,
    DASHBOARD_ACTIVE,
    PRODUCTS_ACTIVE,
    IMEI_ACTIVE,
    SERVICECENTER_ACTIVE,
    FAQ_ACTIVE,
    SPAREPART_ACTIVE
} from '../../assets';

const Sidebar = () => {
    const { pathname } = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(pathname.includes("product"));
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        if (pathname.includes("product")) {
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(false);
        }
    }, [pathname]);

    useEffect(() => {
        // Close the sidebar when navigating to a new route on mobile
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    return (
        <>
            <div className={`flex justify-between custom-shadow items-center sticky top-0 bg-white z-10 border-b-[#E3E0D8] border-b-[1px] h-[74.8px]`}>
                <Button
                    // data-drawer-target="logo-sidebar"
                    // data-drawer-toggle="logo-sidebar"
                    // aria-controls="logo-sidebar"
                    type={`button`}
                    className={`inline-flex items-center p-2.5 ml-3 text-sm text-gray-500`}
                    onClick={toggleSidebar}
                >
                    <svg
                        className={`w-6 h-6`}
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        />
                    </svg>
                </Button>
                <Header />
            </div>
            {isSidebarOpen && <div className={`fixed inset-0 bg-black opacity-50 z-30`}></div>}
            <aside
                id="logo-sidebar"
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 font-quicksand`}
                aria-label="Sidebar"
            >
                <div className={`h-full px-3 py-4 overflow-y-auto bg-[#383336] text-[#979797]`}>
                    <NavLink to="/" className={`flex items-center ps-3 mb-4 mt-4`}>
                        <div className={`img`}>
                            <Img
                                src={IRA_LOGO_SIDEBAR}
                                className={`w-14`}
                                alt={``} />
                        </div>
                    </NavLink>
                    <ul className={`mt-12 font-medium sidebar-links`}>
                        <li className={`mb-2`}>
                            <Link
                                to="/dashboard"
                                className={`${pathname.includes("dashboard") ? "flex items-center p-3 text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                            >
                                <Img
                                    src={pathname.includes("dashboard") ? DASHBOARD_ACTIVE : DASHBOARD_LOGO}
                                    alt={`Dashboard`} />
                                <span className={`ms-3`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className={`mb-2`}>
                            <Button
                                type={`button`}
                                className={`${pathname.includes("product") ? "flex items-center p-3 w-full text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 w-full text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                                onClick={toggleDropdown}
                            >
                                <Img
                                    src={pathname.includes("product") ? PRODUCTS_ACTIVE : PRODUCT_MGT_LOGO}
                                    alt={`Products`} />
                                <span className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold`}>Products</span>
                                <svg
                                    className={`w-3 h-3 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-500 ease-in-out font-light`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </Button>
                            <ul
                                id="dropdown-example"
                                className={`overflow-hidden ${isDropdownOpen ? 'max-h-[1000px] transition-all duration-500 ease-in-out' : 'max-h-0 transition-all duration-500 ease-in-out'}`}
                            >
                                <li>
                                    <NavLink
                                        to="/product/productmgt"
                                        className={`${pathname.includes("product/productmgt") ? "flex items-center p-3 text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2" : "flex items-center p-3 text-[#979797] hover:text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2"}`}
                                    >
                                        Product Mgt.
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/product/categoriesmgt"
                                        className={`${pathname.includes("product/categoriesmgt") ? "flex items-center p-3 text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2" : "flex items-center p-3 text-[#979797] hover:text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2"}`}
                                    >
                                        Categories Mgt.
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/product/specificationmgt"
                                        className={`${pathname.includes("product/specificationmgt") ? "flex items-center p-3 text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2" : "flex items-center p-3 text-[#979797] hover:text-white rounded-[10px] w-full transition duration-75 pl-11 font-bold mb-2 mt-2"}`}
                                    >
                                        Specification Mgt.
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={`mb-2`}>
                            <Link
                                to="/imeimgt"
                                className={`${pathname.includes("imeimgt") ? "flex items-center p-3 text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                            >
                                <Img
                                    src={pathname.includes("imeimgt") ? IMEI_ACTIVE : IMEI_LOGO}
                                    alt={`IMEI Mgt.`} />
                                <span className={`flex-1 ms-3 whitespace-nowrap font-bold`}>IMEI Mgt.</span>
                            </Link>
                        </li>
                        <li className={`mb-2`}>
                            <Link
                                to="/servicecenter"
                                className={`${pathname.includes("servicecenter") ? "flex items-center p-3 text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                            >
                                <Img
                                    src={pathname.includes("servicecenter") ? SERVICECENTER_ACTIVE : SERVICECENTER_MGT_LOGO}
                                    alt={`Service Center Mgt.`} />
                                <span className={`flex-1 ms-3 whitespace-nowrap font-bold`}>Service Center Mgt.</span>
                            </Link>
                        </li>
                        <li className={`mb-2`}>
                            <Link
                                to="/faq"
                                className={`${pathname.includes("faq") ? "flex items-center p-3 text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                            >
                                <Img
                                    src={pathname.includes("faq") ? FAQ_ACTIVE : FAQ_LOGO}
                                    alt={`FAQ`} />
                                <span className={`flex-1 ms-3 whitespace-nowrap font-bold`}>FAQ</span>
                            </Link>
                        </li>
                        <li className={`mb-2`}>
                            <Link
                                to="/spareparts"
                                className={`${pathname.includes("spareparts") ? "flex items-center p-3 text-white bg-[#474446] rounded-[10px] font-bold group" : "flex items-center p-3 text-[#979797] hover:bg-[#474446] rounded-[10px] font-bold group"}`}
                            >
                                <Img
                                    src={pathname.includes("spareparts") ? SPAREPART_ACTIVE : SPAREPART_LOGO}
                                    alt={`Spare Parts Mgt.`} />
                                <span className={`flex-1 ms-3 whitespace-nowrap font-bold`}>Spare Parts Mgt.</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
