import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PLUS_ICON } from '../../assets/index'
import Label from '../../Components/common/Label'
import Button from '../../Components/common/Button'
import Input from '../../Components/common/Input'
import Img from '../../Components/common/Img'

const EditSparePart = () => {
    const [price, setPrice] = useState('')
    const [dropdown1, setDropdown1] = useState({
        selectedOption: 'Select',
        isOpen: false,
    });
    const [dropdown2, setDropdown2] = useState({
        selectedOption: 'Select',
        isOpen: false,
    });
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdown1.isOpen &&
                event.target.closest('#dropdown1') === null
            ) {
                setDropdown1((prevState) => ({
                    ...prevState,
                    isOpen: false,
                }));
            }
            if (
                dropdown2.isOpen &&
                event.target.closest('#dropdown2') === null
            ) {
                setDropdown2((prevState) => ({
                    ...prevState,
                    isOpen: false,
                }));
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [dropdown1.isOpen]);

    const toggleDropdown1 = () => {
        setDropdown1((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
        }));
    };

    const toggleDropdown2 = () => {
        setDropdown2((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
        }));
    };

    const handleOptionClick1 = (option) => {
        setDropdown1({
            selectedOption: option,
            isOpen: false,
        });
    };

    const handleOptionClick2 = (option) => {
        setDropdown2({
            selectedOption: option,
            isOpen: false,
        });
    };
    return (
        <>
            <div className={`lg:flex justify-between items-center mb-8`}>
                <h2 className={`text-lg lg:text-2xl font-bold`}>Edit Spare Part</h2>
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/spareparts" className={`text-sm font-medium text-[#3983336]`}>Spare Parts</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>
                            <div className={`flex items-center`}>
                                <span className={`text-sm font-bold text-[#3983336]`}>Edit Spare Part</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative overflow-x-auto shadow-custom rounded-[10px] bg-white`}>
                <div
                    className={`md:flex w-full bg-white justify-between sm:p-6 p-4 md:space-y-0 space-y-4 lg:space-y-0 items-center border-b pb-4 border-[#F8F8F8]`}>
                    <h3 className={`text-lg text-nowrap  text-[#383336] font-bold`}>Edit Spare Part
                        Details
                    </h3>
                </div>
                <div className={`wrapper sm:p-6 p-4 flex flex-col lg:flex-row lg:space-x-7 bg-white w-full`}>
                    <div className={`left_section mb-5 lg:mb-0 lg:w-1/2 `}>
                        <div className={`inputs`}>
                            <div className={`select mb-6 w-full`}>
                                <Label
                                    htmlFor={`dropdown2`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>
                                    Product Name
                                </Label>
                                <div className={`relative`}>
                                    <Button
                                        type={`button`}
                                        id={`dropdown2`}
                                        className={`appearance-none text-[#383336] bg-[#F8F8F8] font-medium rounded-lg text-sm w-full p-2.5 md:p-3 text-left focus:outline-none focus:ring-0 border-none custom_select ${dropdown2.isOpen ? 'open' : ''}`}
                                        onClick={toggleDropdown2}
                                    >
                                        {dropdown2.selectedOption}
                                        <svg
                                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none transition-transform duration-200 ${dropdown2.isOpen ? 'rotate-180' : ''}`}
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#979797"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Button>
                                    {dropdown2.isOpen && (
                                        <ul className={`absolute bg-[#F8F8F8] rounded-[10px] mt-1 w-full shadow-lg z-10 text-sm `}>
                                            {['Option A', 'Option B', 'Option C'].map((option) => (
                                                <li
                                                    key={option}
                                                    className={`p-2.5 hover:bg-gray-200 cursor-pointer`}
                                                    onClick={() => handleOptionClick2(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className={`mb-6`}>
                                <Label
                                    htmlFor={`title`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>Price
                                </Label>
                                <Input
                                    type="title"
                                    id="title"
                                    name="title"
                                    value={price}
                                    onChange={(e) => setPrice(e?.target?.value)}
                                    className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                    placeholder="Enter Price" autoComplete="off" required />
                            </div>
                        </div>
                        <div className={`images`}>
                            <Label htmlFor="title" className={`block mb-4 text-sm text-[#383336] font-bold`}>Product Images
                            </Label>
                            <div
                                className={`grid grid-cols-1 xl:w-[350px] lg:w-[250px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-3 justify-items-center lg:justify-items-start`}>
                                <div
                                    className={`border border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                    <Img
                                        src={`https://m.media-amazon.com/images/I/61vsK7h3zVL.jpg`}
                                        className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                        alt={``} />
                                </div>
                                <div
                                    className={`border border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                    <Img
                                        src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg`}
                                        className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                        alt={``} />
                                </div>

                                <div
                                    className={`lg:w-[100px] lg:h-[100px] h-[170px] w-[150px] rounded-[10px] overflow-hidden`}>
                                    <Label
                                        htmlFor={`icon`}
                                        id={`validate_img`}
                                        className={`flex flex-col justify-center border-2 h-[170px] w-[150px] lg:w-[100px] lg:h-[100px] border-[#979797] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                                        <div id="image_container" className={`flex flex-col items-center justify-start `}>
                                            <img id="default_img" src={PLUS_ICON} className={`w-30 h-30`}
                                                alt="" />
                                            <img id="icon_preview" className={`hidden object-cover`} alt="" />
                                        </div>
                                        <Input
                                            id={`icon`}
                                            name={`icon`}
                                            type={`file`}
                                            className={`hidden`} />
                                        <Input
                                            id={`icon_name`}
                                            name={`icon_name`}
                                            type={`hidden`} />
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`right_section lg:w-1/2 lg:px-8  lg:border-l-2 lg:border-[#F8F8F8]`}>
                        <h3 className={`text-sm font-bold mb-8`}>Select Applicable Product(s)</h3>
                        <div className={`inputs`}>
                            <div className={`select mb-6 w-full flex items-center`}>
                                <Label
                                    htmlFor={`dropdown1`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>
                                    Category
                                </Label>
                                <div className={`relative w-full ms-3`}>
                                    <Button
                                        type={`button`}
                                        id={`dropdown1`}
                                        className={`appearance-none text-[#383336] bg-[#F8F8F8] font-medium rounded-lg text-sm w-full p-2.5 md:p-3 text-left focus:outline-none focus:ring-0 border-none custom_select ${dropdown1.isOpen ? 'open' : ''}`}
                                        onClick={toggleDropdown1}
                                    >
                                        {dropdown1.selectedOption}
                                        <svg
                                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-2.5 h-2.5 pointer-events-none transition-transform duration-200 ${dropdown1.isOpen ? 'rotate-180' : ''}`}
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#979797"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Button>
                                    {dropdown1.isOpen && (
                                        <ul className={`absolute bg-[#F8F8F8] rounded-[10px] mt-1 w-full shadow-lg z-50 text-sm `}>
                                            {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                                                <li
                                                    key={option}
                                                    className={`p-2.5 hover:bg-gray-200 cursor-pointer`}
                                                    onClick={() => handleOptionClick1(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={`relative overflow-x-auto sm:rounded-lg lg:max-h-[420px] overflow-y-scroll sparepart_select px-1`}>
                            <table className={`w-full text-sm text-left rtl:text-right text-[#979797] `}>
                                <thead className={`text-xs text-[#979797] capitalize bg-[#FAFAFA] rounded-[5px]`}>
                                    <tr className={`sticky top-0 z-20 bg-[#fafafa]`}>
                                        <th scope="col" className={`px-6 py-3 font-semibold rounded-l-[5px]`}>
                                            Name
                                        </th>
                                        <th scope="col" className={`p-4 flex`}>
                                            <div className={`flex items-center space-x-2`}>
                                                <Label
                                                    htmlFor={`checkbox-all-search`}
                                                    className={`font-semibold text-nowrap`}>Select
                                                    All</Label>
                                                <Input
                                                    id={`checkbox-all-search`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-1`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-1`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-2`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-2`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-3`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-3`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-4`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-4`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-5`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-5`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-6`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-6`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-7`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-7`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-8`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-8`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-9`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-9`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`bg-white border-b`}>
                                        <td scope="row"
                                            className={`px-6 py-4 font-bold text-[#383336] whitespace-nowrap dark:text-white text-wrap`}>
                                            IRA T803 (3GB) POWER MEETS SPEED
                                        </td>
                                        <td className={`w-4 p-4`}>
                                            <div className={`flex items-center justify-end`}>
                                                <Input
                                                    id={`checkbox-table-search-10`}
                                                    type={`checkbox`}
                                                    className={`w-4 h-4  text-[#383336] bg-gray-100 border-gray-300 rounded focus:ring-black  focus:ring-1`} />
                                                <Label
                                                    htmlFor={`checkbox-table-search-10`}
                                                    className={`sr-only`}>Select All
                                                </Label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex lg:justify-end flex-col lg:flex-row space-y-3 lg:sapce-y-0 justify-center my-5 items-center space-x-4 sm:p-6 p-4 border-t pt-4 border-[#F8F8F8]`}>
                    <div className={`flex`}>
                        <span className={`font-semibold text-xs mt-3 align-top`}><span className={`font-bold text-sm me-0.5`}>{3}</span> Products Selected
                        </span>
                    </div>
                    <div>
                        <Button
                            className={`bg-[#A8CF45] text-[16px] font-semibold md:font-bold text-white w-[160px] max-w-[160px] rounded-[218px] p-1`}>Save
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditSparePart