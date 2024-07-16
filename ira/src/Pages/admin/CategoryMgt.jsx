import React, { useState, useRef, useEffect } from 'react'
import {
    ACTION_ICON, PLUS_ICON, TABLET_IMG, EDIT_ICON_POPUP,
    DELETE_ICON_POPUP,
} from '../../assets/index'
import { Link } from 'react-router-dom'
import Input from '../../Components/common/Input'
import Button from '../../Components/common/Button'
import Img from '../../Components/common/Img'
import Model from '../../Components/common/Model'
import Label from '../../Components/common/Label'

const CategoryMgt = () => {
    const [searchval, setSearchval] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [openDropdown, setOpenDropdown] = useState(false);

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
            setOpenDropdown(false);
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
            name: 'Tablet',
            img: TABLET_IMG,
            products: 22,
        },
        {
            id: 2,
            name: 'Tablet',
            img: TABLET_IMG,
            products: 2,
        },
    ];

    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>Category Management</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Category List</h3>
                    <form className={`flex justify-between`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3`}
                        />
                        <Button
                            className={`bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center`}
                            type={`button`}
                            onClick={() => openModal('add')}>
                            +Add
                        </Button>
                    </form>
                </div>
                <Model
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    modeltitle={modalMode === 'add' ? `Add Category` : `Edit Category`}
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-[90%] md:w-full max-w-md `}
                    modelbody={
                        <>
                            <div>
                                <div className={`mb-2`}>
                                    <Label
                                        htmlFor="business_url"
                                        className={`text-sm text-[#383336] font-semibold mb-4`}>Category
                                        Image</Label>
                                    <Label
                                        htmlFor={`icon`}
                                        id={`validate_img`}
                                        className={`flex flex-col justify-center border-2 h-[100px] w-[100px] lg:w-[100px] lg:h-[100px] mt-2 border-[#979797] border-dashed rounded-lg cursor-pointer bg-gray-50`}
                                    >
                                        <div id="image_container" className={`flex flex-col items-center justify-start`}>
                                            <Img
                                                src={PLUS_ICON}
                                                className={`w-30 h-30`}
                                                alt={``} />
                                        </div>
                                        <Input
                                            type="file"
                                            id="icon"
                                            className={`hidden`}
                                            accept={`image/*`}
                                        />
                                    </Label>
                                </div>
                                <div>
                                    <Label htmlFor="category_name" className={`text-sm text-[#383336] font-semibold`}>
                                        Category Name
                                    </Label>
                                    <Input
                                        type={`text`}
                                        id={`category_name`}
                                        name={`category_name`}
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e?.target?.value)}
                                        className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 mb-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                        placeholder={`Enter Category Name`}
                                        autoComplete={`off`}
                                    />
                                </div>
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
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Name
                                </td>
                                <td scope="col" className={`px-8 py-6 text-end`}>
                                    Products
                                </td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px] text-end`}>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {
                                data?.map((item) => (
                                    <tr key={item?.id} className={`bg-white border-b text-[16px]`}>
                                        <td scope="row" className={`px-6 py-4 flex items-center flex-row flex-nowrap `} >
                                            <div className={``}>
                                                <Img
                                                    src={item?.img}
                                                    className={`max-w-14 min-w-14 min-h-14 max-h-14`}
                                                    alt={item?.name}
                                                />
                                            </div>
                                            <div className={`ps-3`}>
                                                <span>{item?.name}</span>
                                            </div>
                                        </td>
                                        <td className={`px-14 py-6 text-nowrap text-end`}>
                                            <span>{item?.products}</span>
                                        </td>
                                        <td className={`px-11 py-6 text-end relative`}>
                                            <div>
                                                <Button
                                                    id={`profile-dropdown`}
                                                    onClick={() => toggleDropdown(item?.id)}
                                                    className={`relative`}>
                                                    <Img
                                                        src={ACTION_ICON}
                                                        className={`w-4 min-w-4`}
                                                        alt={`action icon`} />
                                                </Button>
                                            </div>
                                            {openDropdown === item?.id && (
                                                <div
                                                    id="profiles-menu"
                                                    className={`absolute flex px-4 py-5 text-start flex-col z-20 bg-white shadow-popup top-10 right-14 min-w-32 text-gray-500`}
                                                    ref={dropdownRef}
                                                >
                                                    <Link to="#">
                                                        <Button
                                                            className={`flex space-x-2 mb-4`}
                                                            onClick={() => openModal('edit')}>

                                                            <Img
                                                                src={EDIT_ICON_POPUP}
                                                                className={`w-5`}
                                                                alt={`edit icon`} />
                                                            <span className={`text-[#383336]`}>Edit</span>
                                                        </Button>
                                                    </Link>
                                                    <Link to="#">
                                                        <Button
                                                            className={`flex space-x-2 `}>
                                                            <Img src={DELETE_ICON_POPUP}
                                                                className={`w-5`}
                                                                alt={`delete icon`} />
                                                            <span className={`text-[#383336]`}> Delete</span>
                                                        </Button>
                                                    </Link>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    )
}

export default CategoryMgt;
