import React, { useState, useRef, useEffect } from 'react';
import {
    ACTION_ICON,
    EDIT_ICON_POPUP,
    DELETE_ICON_POPUP
} from '../../assets/index';
import { Link } from 'react-router-dom';
import Input from '../../Components/common/Input';
import Button from '../../Components/common/Button';
import Img from '../../Components/common/Img';
import Model from '../../Components/common/Model';
import Label from '../../Components/common/Label';

const ServiceCenter = () => {
    const [searchval, setSearchval] = useState('');
    const [serviceCenterName, setServiceCenterName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [businessUrl, setBusinessUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [openDropdown, setOpenDropdown] = useState(null);

    const openModal = (mode) => {
        setModalMode(mode);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const dropdownRef = useRef(null);

    const toggleDropdown = (id) => {
        if (openDropdown === id) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(id);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const data = [
        {
            id: 1,
            name: 'IRA Service Center Name 1',
            address: 'Suite 770 4194 Matthew Unions, Lake Carrie, WI 1987',
            email: 'iracustomercare1@email.com',
            phone: '+1 1234 567 890',
        },
        {
            id: 2,
            name: 'IRA Service Center Name 2',
            address: 'Suite 770 4194 Matthew Unions, Lake Carrie, WI 1987',
            email: 'iracustomercare1@email.com',
            phone: '+1 1234 567 890',
        },
        {
            id: 3,
            name: 'IRA Service Center Name 3',
            address: 'Suite 770 4194 Matthew Unions, Lake Carrie, WI 1987',
            email: 'iracustomercare1@email.com',
            phone: '+1 1234 567 890',
        },
    ];

    return (
        <>
            <div>
                <h2 className="text-lg lg:text-2xl mb-8 font-bold">Service Center Management</h2>
            </div>
            <div className="relative shadow-tableshadow rounded-[10px] px-5 bg-white">
                <div className="lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center">
                    <h3 className="text-xl text-wrap text-[#383336] font-bold">Service Center List</h3>
                    <form className="flex justify-between">
                        <Input
                            type="search"
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder="Search..."
                            className="text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3"
                        />
                        <Button
                            className="bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center"
                            type="button"
                            onClick={() => openModal('add')}
                        >
                            +Add
                        </Button>
                    </form>
                </div>
                <Model
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    modeltitle={modalMode === 'add' ? 'Add Service Center' : 'Edit Service Center'}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-[90%] md:w-full max-w-md"
                    modelbody={
                        <>
                            <div className="h-[450px] overflow-y-scroll px-1">
                                <Label htmlFor="service_center_name" className="text-sm text-[#383336] font-semibold">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="service_center_name"
                                    name="service_center_name"
                                    value={serviceCenterName}
                                    onChange={(e) => setServiceCenterName(e?.target?.value)}
                                    className="bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]"
                                    placeholder="Enter Service Center Name"
                                    autoComplete="off"
                                />
                                <Label htmlFor="address" className="text-sm text-[#383336] font-semibold">
                                    Address
                                </Label>
                                <Input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e?.target?.value)}
                                    className="bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]"
                                    placeholder="Enter Address"
                                    autoComplete="off"
                                />
                                <Label htmlFor="email_address" className="text-sm text-[#383336] font-semibold">
                                    Email Address
                                </Label>
                                <Input
                                    type="email"
                                    id="email_address"
                                    name="email_address"
                                    value={email}
                                    onChange={(e) => setEmail(e?.target?.value)}
                                    className="bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]"
                                    placeholder="Enter Email Address"
                                    autoComplete="off"
                                />
                                <Label htmlFor="phone_number" className="text-sm text-[#383336] font-semibold">
                                    Phone Number
                                </Label>
                                <Input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e?.target?.value)}
                                    className="bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]"
                                    placeholder="Enter Phone Number"
                                    autoComplete="off"
                                />
                                <Label htmlFor="business_url" className="text-sm text-[#383336] font-semibold">
                                    Google Business URL
                                </Label>
                                <Input
                                    type="url"
                                    id="business_url"
                                    name="business_url"
                                    value={businessUrl}
                                    onChange={(e) => setBusinessUrl(e?.target?.value)}
                                    className="bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]"
                                    placeholder="Enter Google Business URL"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex justify-center w-full">
                                <Button className="bg-[#383336] text-white rounded-full w-1/2 text-[18px] px-[30px] py-[7px] font-bold text-center">
                                    Save
                                </Button>
                            </div>
                        </>
                    }
                />
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#383336] font-[600]">
                        <thead className="text-xs md:text-sm capitalize bg-[#FAFAFA]">
                            <tr className="text-[#979797] text-nowrap font-[600]">
                                <td scope="col" className="px-8 py-6 rounded-l-[5px]">
                                    Name
                                </td>
                                <td scope="col" className="px-8 py-6">
                                    Address
                                </td>
                                <td scope="col" className="px-8 py-6">
                                    Email Address
                                </td>
                                <td scope="col" className="px-8 py-6">
                                    Phone No.
                                </td>
                                <td scope="col" className="px-8 py-6 rounded-r-[5px] text-end">
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody className="text-[#383336] font-[600]">
                            {data?.map((item) => (
                                <tr className="bg-white border-b text-[16px]" key={item?.id}>
                                    <td className="px-8 py-6 text-nowrap align-top">
                                        <span>{item?.name}</span>
                                    </td>
                                    <td className="px-8 py-6 text-wrap align-top">
                                        <span>{item?.address}</span>
                                    </td>
                                    <td className="px-8 py-6 text-nowrap align-top">
                                        <span>{item?.email}</span>
                                    </td>
                                    <td className="px-8 py-6 text-nowrap align-top">
                                        <span>{item?.phone}</span>
                                    </td>
                                    <td className="px-11 py-6 text-end align-top relative">
                                        <div>
                                            <Button
                                                className="relative"
                                                onClick={() => toggleDropdown(item?.id)}>
                                                <Img src={ACTION_ICON} className="w-4 min-w-4" alt="Action Icon" />
                                            </Button>
                                        </div>
                                        {openDropdown === item?.id && (
                                            <div
                                                className="absolute flex px-4 py-5 text-start flex-col z-20 bg-white shadow-popup top-10 right-14 min-w-32 text-[#383336]"
                                                ref={dropdownRef}
                                            >
                                                <Link to="#">
                                                    <Button
                                                        className="flex space-x-2 mb-4"
                                                        onClick={() => openModal('edit')}>
                                                        <Img src={EDIT_ICON_POPUP} className="w-5" alt="Edit Icon" />
                                                        <span className="text-[#383336]">Edit</span>
                                                    </Button>
                                                </Link>
                                                <Link to="#">
                                                    <Button className="flex space-x-2">
                                                        <Img src={DELETE_ICON_POPUP} className="w-5" alt="Delete Icon" />
                                                        <span className="text-[#383336]">Delete</span>
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination p-[1rem]"></div>
            </div>
        </>
    );
};

export default ServiceCenter;
