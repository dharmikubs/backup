import React, { useState, useRef, useEffect } from 'react'
import {
    ACTION_ICON,
    EDIT_ICON_POPUP,
    DELETE_ICON_POPUP,
    TABLET_IMG
} from '../../assets/index';
import { Link } from 'react-router-dom'
import Input from '../../Components/common/Input';
import Button from '../../Components/common/Button';
import Img from '../../Components/common/Img';

const ProductMgt = () => {
    const [searchval, setSearchval] = useState('')
    const [openDropdown, setOpenDropdown] = useState(false);

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
            name: 'IRA T803 (3GB) POWER MEETS SPEED',
            img: TABLET_IMG,
            category: 'tablet',
        },
        {
            id: 2,
            name: 'IRA T808 POWER MEETS SPEED',
            img: TABLET_IMG,
            category: 'tablet',

        },
    ];
    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>Products Management</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Tablet Model List</h3>
                    <form className={`flex justify-between `}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3`}
                        />
                        <Link to="/product/productmgt/addproduct">
                            <Button
                                className={`bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center`}
                                type={`button`}>
                                +Add
                            </Button>
                        </Link>
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Product Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Category
                                </td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px] text-end`}>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {
                                data?.map((item) => (
                                    <tr className={`bg-white border-b text-[16px]`}>
                                        <td scope="row" className={`px-6 py-4 flex items-center flex-row flex-nowrap `} >
                                            <div>
                                                <Img
                                                    src={item?.img}
                                                    className={`max-w-14 min-w-14 min-h-14 max-h-14 `} />
                                            </div>
                                            <div className={`ps-3`}>
                                                <span>{item?.name}</span>
                                            </div>
                                        </td>
                                        <td className={`px-8 py-6 text-nowrap`}>
                                            <span>{item?.category}</span>
                                        </td>
                                        <td className={`px-11 py-6 text-end relative`}>
                                            <div>
                                                <Button
                                                    id={`profile-dropdown`}
                                                    className={`relative`}
                                                    onClick={() => toggleDropdown(item?.id)}>
                                                    <Img
                                                        src={ACTION_ICON}
                                                        className={`w-4 min-w-4`}
                                                        alt={``} />
                                                </Button>
                                            </div>
                                            {openDropdown === item?.id && (
                                                <div
                                                    id="profiles-menu"
                                                    className={`absolute flex px-4 py-5 text-start flex-col z-20 bg-white shadow-popup top-10 right-14 min-w-32 text-gray-500`}
                                                    ref={dropdownRef}
                                                >
                                                    <Link to="/product/productmgt/editproduct">
                                                        <Button
                                                            className={`flex space-x-2 mb-4`}
                                                        >

                                                            <Img
                                                                src={EDIT_ICON_POPUP}
                                                                className={`w-5`}
                                                                alt={``} />
                                                            <span className={`text-[#383336]`}>Edit</span>
                                                        </Button>
                                                    </Link>
                                                    <Link to="#">
                                                        <Button
                                                            className={`flex space-x-2 `}>
                                                            <Img src={DELETE_ICON_POPUP}
                                                                className={`w-5`}
                                                                alt={``} />
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
            </div >
        </>
    )
}

export default ProductMgt