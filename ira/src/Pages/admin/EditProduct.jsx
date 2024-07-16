import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TABLET_IMG, PLUS_ICON } from '../../assets'
import Input from '../../Components/common/Input'
import TextArea from '../../Components/common/TextArea'
import Label from '../../Components/common/Label'
import Img from '../../Components/common/Img'
import Button from '../../Components/common/Button'

const EditProduct = () => {
    const [productTitle, setProductTitle] = useState('')
    const [productTitleTwo, setProductTitleTwo] = useState('')
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
    }, [dropdown1.isOpen, dropdown2.isOpen]);

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
                <h2 className={`text-lg lg:text-2xl font-bold`}>Edit Product</h2>
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/product/productmgt" className={`text-sm font-medium text-[#3983336]`}>Product Management</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>
                            <div className={`flex items-center`}>
                                <span className={`text-sm font-bold text-[#3983336]`}>Edit Product</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative overflow-x-auto shadow-custom rounded-[10px] px-3 bg-white`}>
                <div
                    className={`md:flex w-full bg-white justify-between sm:p-6 p-4 md:space-y-0 space-y-4 lg:space-y-0 items-center border-b pb-4 border-[#F8F8F8]`}>
                    <h3 className={`text-lg text-nowrap  text-[#383336] font-bold`}>Edit Product
                        Details
                    </h3>
                </div>
                <div className={`wrapper sm:p-6 p-4 flex flex-col lg:flex-row lg:space-x-7 bg-white`}>
                    <div className={`left_section mb-5 lg:mb-0 lg:w-1/3 xl:w-1/3 xl:max-w-1/3`}>
                        <h3 className={`text-lg text-nowrap  text-[#383336] font-semibold`}>Product Images</h3>
                        <div
                            className={`grid grid-cols-1 xl:w-[350px] lg:w-[250px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-3 justify-items-center lg:justify-items-start`}>
                            <div
                                className={`border-2 border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                <Img
                                    src={TABLET_IMG}
                                    className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                    alt={''}
                                />
                            </div>
                            <div
                                className={`border-2 border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                <Img
                                    src={TABLET_IMG}
                                    className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                    alt={''}
                                />
                            </div>
                            <div
                                className={`border-2 border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                <Img
                                    src={TABLET_IMG}
                                    className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                    alt={''}
                                />
                            </div>
                            <div
                                className={`border-2 border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                <Img
                                    src={TABLET_IMG}
                                    className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                    alt={''}
                                />
                            </div>
                            <div
                                className={`border-2 border-[#E3E0D8] lg:w-[100px] lg:h-[100px] overflow-hidden h-[170px] w-[150px] rounded-[10px]`}>
                                <Img
                                    src={TABLET_IMG}
                                    className={`h-[170px] w-[150px] lg:w-[100px] lg:h-[100px]  object-cover rounded-[10px] bg-center`}
                                    alt={''}
                                />
                            </div>
                            <div className={`lg:w-[100px] lg:h-[100px] h-[170px] w-[150px] rounded-[10px] overflow-hidden`}>
                                <Label
                                    htmlFor={`icon`}
                                    id={`validate_img`}
                                    className={`flex flex-col justify-center border-2 h-[170px] w-[150px] lg:w-[100px] lg:h-[100px] border-[#979797] border-dashed rounded-lg cursor-pointer bg-white`}
                                >
                                    <div id="image_container" className={`flex flex-col items-center justify-start`}>
                                        <Img
                                            src={PLUS_ICON}
                                            className={`w-30 h-30`}
                                            alt={``} />
                                    </div>
                                    <Input
                                        type={`file`}
                                        id={`icon`}
                                        className={`hidden`}
                                    />
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className={`right_section lg:w-2/3 lg:px-8 xl:w-2/3 lg:border-l-2 lg:border-[#F8F8F8]`}>
                        <div className={`inputs`}>
                            <div className={`select mb-4 w-full`}>
                                <Label
                                    htmlFor={`dropdown1`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>
                                    Specification
                                </Label>
                                <div className={`relative`}>
                                    <Button
                                        type={`button`}
                                        id={`dropdown1`}
                                        className={`appearance-none text-[#383336] bg-[#F8F8F8] font-medium rounded-lg text-sm w-full p-2 md:p-3 text-left focus:outline-none focus:ring-0 border-none custom_select ${dropdown1.isOpen ? 'open' : ''}`}
                                        onClick={toggleDropdown1}
                                    >
                                        {dropdown1.selectedOption}
                                        <svg
                                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none transition-transform duration-200 ${dropdown1.isOpen ? 'rotate-180' : ''}`}
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
                                        <ul className={`absolute bg-[#F8F8F8] rounded-[10px] mt-1 w-full shadow-lg z-10 text-sm `}>
                                            {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                                                <li
                                                    key={option}
                                                    className={`p-2 hover:bg-gray-200 cursor-pointer`}
                                                    onClick={() => handleOptionClick1(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className={`mb-4`}>
                                <Label
                                    htmlFor={`title`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>
                                    Title
                                </Label>
                                <Input
                                    type={`text`}
                                    id={`productTitle`}
                                    className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                    placeholder={`Enter Product Title`}
                                    autoComplete={`off`}
                                    value={productTitle}
                                    onChange={(e) => setProductTitle(e?.target?.value)}
                                />
                            </div>
                            <div className={`mb-4`}>
                                <Label
                                    htmlFor={`answer`}
                                    className={`block mb-2 text-sm text-[#383336] font-bold`}>Description</Label>
                                <TextArea
                                    type={`text`}
                                    id={`answer`}
                                    rows={4}
                                    className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500] resize-none`}
                                    placeholder={`Type here...`}
                                    autoComplete={`off`}
                                />
                            </div>
                            <div className={`lg:flex items-center justify-start mb-6`}>
                                <div className={`mr-4 mb-4 lg:mb-0`}>
                                    <Label
                                        htmlFor={`radio_btn_1`}
                                        className={`block text-sm text-[#383336] font-bold`}>Hot Product
                                    </Label>
                                </div>
                                <div className={`mr-3 flex items-center mb-2 lg:mb-0`}>
                                    <Input
                                        id={`default-radio-1`}
                                        type={`radio`}
                                        value=""
                                        name={`default-radio`}
                                        className={`w-4 h-4 text-[#A8CF45] focus:ring-1 focus:ring-[#A8CF45] bg-white border-[#383336] cursor-pointer`}
                                        defaultChecked
                                    />
                                    <Label
                                        htmlFor={`default-radio-1`}
                                        className={`ms-2 text-sm font-semibold text-[#383336] cursor-pointer`}
                                    >
                                        Yes
                                    </Label>
                                </div>
                                <div className={`flex items-center mb-2 lg:mb-0`}>
                                    <Input
                                        id={`default-radio-2`}
                                        type={`radio`}
                                        value={``}
                                        name={`default-radio`}
                                        className={`w-4 h-4 text-[#A8CF45] focus:ring-1 focus:ring-[#A8CF45] bg-white border-[#383336] cursor-pointer`}
                                    />
                                    <Label
                                        htmlFor={`default-radio-2`}
                                        className={`ms-2 text-sm font-semibold text-[#383336] cursor-pointer`}
                                    >
                                        No
                                    </Label>
                                </div>
                            </div>

                            <div className={`mb-4 lg:flex items-center lg:space-x-5 w-[full]`}>
                                <div className={`select mb-4 lg:mb-0 lg:w-1/2 w-full`}>
                                    <Label
                                        htmlFor={`dropdown2`}
                                        className={`block mb-2 text-sm text-[#383336] font-bold`}>
                                        Specification
                                    </Label>
                                    <div className={`relative`}>
                                        <Button
                                            type={`button`}
                                            id={`dropdown2`}
                                            className={`appearance-none text-[#383336] bg-[#F8F8F8] font-medium rounded-lg text-sm w-full p-2 md:p-3 text-left focus:outline-none focus:ring-0 border-none custom_select ${dropdown2.isOpen ? 'open' : ''}`}
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
                                                        className={`p-2 hover:bg-gray-200 cursor-pointer`}
                                                        onClick={() => handleOptionClick2(option)}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-2/3`}>
                                    <Label
                                        htmlFor={`title`}
                                        className={`block mb-2 text-sm text-[#383336] font-bold`}>Title
                                    </Label>
                                    <Input
                                        type={`text`}
                                        id={`productTitle_two`}
                                        className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                        placeholder={`Enter Product Title`}
                                        autoComplete={`off`}
                                        value={productTitleTwo}
                                        onChange={(e) => setProductTitleTwo(e?.target?.value)}
                                    />
                                </div>
                            </div>
                            <div className={`mb-4`}>
                                <Link to="#" className={`text-sm underline font-bold`}>+Add More Specification</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`bg-white w-full sm:p-6 p-3 border-t border-[#f8f8f8] flex lg:justify-end justify-center`}>
                    <div className={`mb-1 flex lg:justify-end justify-end w-[160px] max-w-[160px]`}>
                        <Button
                            className={`bg-[#A8CF45] text-[16px] font-semibold md:font-bold text-white w-[160px] max-w-[160px] rounded-[218px] p-1`}>Save
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct