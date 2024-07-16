import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ACTION_ICON, TABLET_IMG, EDIT_ICON_POPUP, DELETE_ICON_POPUP } from '../../assets';
import Input from '../../Components/common/Input';
import Button from '../../Components/common/Button';
import Img from '../../Components/common/Img';

const SpareParts = () => {
    const staticOptions = ['Filter', 'Option 2', 'Option 3'];
    const [searchval, setSearchval] = useState('');
    const [isOpenFilterDropdown, setIsOpenFilterDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(staticOptions[0]);
    const [dynamicOptions, setDynamicOptions] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleFilterDropdown = () => {
        setIsOpenFilterDropdown(!isOpenFilterDropdown);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpenFilterDropdown(false);
    };

    const addCustomOption = () => {
        const newOption = prompt('Enter a custom option:');
        if (newOption) {
            setDynamicOptions([...dynamicOptions, newOption]);
            setSelectedOption(newOption); // Select the newly added option
        }
    };

    // Combine static and dynamic options
    const options = [...staticOptions, ...dynamicOptions];


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
            img: TABLET_IMG,
            name: 'Back Panel Cover for Wishtel Ira - Black',
            price: '509.00',
        },
        {
            id: 2,
            img: TABLET_IMG,
            name: 'Back Panel Cover for Wishtel Ira - Black',
            price: '509.00',
        },
    ];
    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>Spare Parts</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Spare Parts List</h3>
                    <form className={`flex flex-col md:flex-row md:justify-between md:items-center`}>
                        <Input
                            type="search"
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder="Search..."
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336] mr-3`}
                        />
                        <div className={`flex items-center justify-between mt-3 sm:mt-0`}>
                            <div className={`select sm:mb-0 w-[150px] mr-2`}>
                                <div className={`relative`}>
                                    <Button
                                        type="button"
                                        className={`appearance-none text-[#383336] bg-transparent border-2 border-[#383336] font-[500] rounded-[10px] text-sm w-full p-[9.5px] text-left focus:outline-none focus:ring-0 custom_select font-quicksand ${isOpenFilterDropdown ? 'open' : ''}`}
                                        onClick={toggleFilterDropdown}
                                    >
                                        {selectedOption}
                                        <svg
                                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none transition-transform duration-200 ${isOpenFilterDropdown ? 'rotate-180' : ''}`}
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#383336"
                                                strokeWidth="2.1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Button>
                                    {isOpenFilterDropdown && (
                                        <ul className={`absolute bg-[#F8F8F8] rounded-[10px] mt-1 w-full shadow-lg z-10 text-sm`}>
                                            {options.map((option, index) => (
                                                <li
                                                    key={index}
                                                    className={`p-2 hover:bg-gray-200 cursor-pointer`}
                                                    onClick={() => handleOptionClick(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div>
                                <Link to="/spareparts/addspareparts">
                                    <Button
                                        className={`bg-[#383336] text-white rounded-full text-sm px-[30px] py-[10px] font-bold text-center`}
                                        type={`button`}>
                                        +Add
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
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
                                        <td scope="row" className={`px-6 py-4 flex items-center flex-row flex-nowrap align-top`}>
                                            <div className={`align-top`}>
                                                <Img src={item?.img} className={`max-w-14 min-w-14 min-h-14 max-h-14`} />
                                            </div>
                                            <div className={`ps-3`}>
                                                <span className={`text-wrap`}>{item?.name}</span>
                                            </div>
                                        </td>
                                        <td className={`px-8 py-6 text-nowrap text-end`}>
                                            <span>₹{item?.price}</span>
                                        </td>
                                        <td className={`px-11 py-6 text-end relative`}>
                                            <div>
                                                <Button id="profile-dropdown" className={`relative`} onClick={() => toggleDropdown(item?.id)}>
                                                    <Img
                                                        src={ACTION_ICON}
                                                        className={`w-4 min-w-4`}
                                                        alt={``} />
                                                </Button>
                                            </div>
                                            {openDropdown === item?.id && (
                                                <div id="profiles-menu" className={`absolute flex px-4 py-5 text-start flex-col z-20 bg-white shadow-popup top-10 right-14 min-w-32 text-gray-500`} ref={dropdownRef}>
                                                    <Link to="/spareparts/editspareparts">
                                                        <Button
                                                            className={`flex space-x-2 mb-4`}>
                                                            <Img
                                                                src={EDIT_ICON_POPUP}
                                                                className={`w-5`}
                                                                alt={``} />
                                                            <span
                                                                className={`text-[#383336]`}>Edit</span>
                                                        </Button>
                                                    </Link>
                                                    <Link to="#">
                                                        <Button className={`flex space-x-2 `}>
                                                            <Img
                                                                src={DELETE_ICON_POPUP}
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
            </div>
        </>
    );
};

export default SpareParts;
