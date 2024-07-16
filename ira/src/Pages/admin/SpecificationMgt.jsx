import React, { useState, useRef, useEffect } from 'react';
import {
    ACTION_ICON,
    EDIT_ICON_POPUP,
    DELETE_ICON_POPUP
} from '../../assets/index';
import { Link } from 'react-router-dom';
import Model from '../../Components/common/Model';
import Button from '../../Components/common/Button';
import Input from '../../Components/common/Input';
import Img from '../../Components/common/Img';

const SpecificationMgt = () => {
    const [specificationName, setSpecificationName] = useState('');
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
            name: `RAM`,
        },
        {
            id: 2,
            name: `Model Number`,
        },
    ];

    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>Specification Management</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Specification List</h3>
                    <form className={`flex justify-between space-x-3`}>
                        <Link to="#">
                            <Button
                                className={`bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center`}
                                type={`button`}
                                onClick={() => openModal('add')}
                            >
                                +Add
                            </Button>
                        </Link>
                    </form>
                </div>
                <Model
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    modeltitle={modalMode === 'add' ? `Add Specification` : `Edit Specification`}
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-[90%] md:w-full max-w-md `}
                    modelbody={
                        <>
                            <div>
                                <Input
                                    type={`text`}
                                    id={`specification_name`}
                                    name={`specification_name`}
                                    value={specificationName}
                                    onChange={(e) => setSpecificationName(e?.target?.value)}
                                    className={`bg-[#F8F8F8] border-none text-[#393337] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-7 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                    placeholder={`Enter Specification Name`}
                                    autoComplete={`off`}
                                />
                            </div>
                            <div className={`flex justify-center w-full`}>
                                <Button
                                    className={`bg-[#383336] text-white rounded-full w-1/2 text-[18px] px-[30px] py-[7px] font-bold text-center`}>
                                    Save
                                </Button>
                            </div>
                        </>
                    }
                />
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>Name</td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px] text-end`}>Action</td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {data.map((item) => (
                                <tr key={item.id} className={`bg-white border-b text-[16px]`}>
                                    <td className={`px-8 py-6 text-nowrap`}>
                                        <span>{item.name}</span>
                                    </td>
                                    <td className={`px-11 py-6 text-end relative`}>
                                        <div>
                                            <Button
                                                id={`profile-dropdown`}
                                                onClick={() => toggleDropdown(item.id)}
                                                className={`relative`}
                                            >
                                                <Img
                                                    src={ACTION_ICON}
                                                    className={`w-4 min-w-4`}
                                                    alt={``}
                                                />
                                            </Button>
                                        </div>
                                        {openDropdown === item.id && (
                                            <div
                                                id="profiles-menu"
                                                className={`absolute flex px-4 py-5 text-start flex-col z-20 bg-white shadow-popup top-10 right-14 min-w-32 text-gray-500`}
                                                ref={dropdownRef}
                                            >
                                                <Link to="#">
                                                    <Button
                                                        className={`flex space-x-2 mb-4`}
                                                        onClick={() => openModal('edit')}
                                                    >
                                                        <Img
                                                            src={EDIT_ICON_POPUP}
                                                            className={`w-5`}
                                                            alt={``}
                                                        />
                                                        <span className={`text-[#383336]`}>Edit</span>
                                                    </Button>
                                                </Link>
                                                <Link to="#">
                                                    <Button className={`flex space-x-2 `}>
                                                        <Img
                                                            src={DELETE_ICON_POPUP}
                                                            className={`w-5`}
                                                            alt={``}
                                                        />
                                                        <span className={`text-[#383336]`}>Delete</span>
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
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    );
};

export default SpecificationMgt;
