import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MAIL_ICON,
    FILE_ICON,
    EYE_ICON,
    CALL_ICON,
} from '../../assets';
import Input from '../../Components/common/Input';
import Img from '../../Components/common/Img';
import Model from '../../Components/common/Model';

const ContactSupport = () => {
    const [searchval, setSearchval] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (id) => {
        const selectedItem = data.find(item => item.id === id);
        if (selectedItem) {
            setModalData(selectedItem);
            setIsModalOpen(true);
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const data = [
        {
            id: 1,
            companyname: 'ABC Company',
            username: 'Dharmik Vadgama',
            modelname: 'IRA TAB 3GB',
            imei: '912793185904428',
            date: '12 Jan, 2024',
        },
        {
            id: 2,
            companyname: 'dummy',
            username: 'Viral Sanchla',
            modelname: 'IRA TAB 6 GB',
            imei: '912793185904429',
            date: '22 Jan, 2024',
        },
    ]

    return (
        <>
            <div className={`lg:flex justify-between items-center mb-8`}>
                <h2 className={`text-lg lg:text-2xl font-bold`}>Contact Support Request</h2>
                {/* bread crumb  */}
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/dashboard" className={`text-sm font-medium text-[#3983336]`}>Dashboard</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>
                            <div className={`flex items-center`}>
                                <span className={`text-sm font-bold text-[#3983336]`}>Contact Support Request</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Contact Support Request List</h3>
                    <form className={`flex justify-between`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336]`}
                        />
                    </form>
                </div>
                <div className={`relative overflow-x-auto`}>
                    <table className={`w-full text-sm text-left text-[#383336] font-[600]`}>
                        <thead className={`text-xs md:text-sm capitalize bg-[#FAFAFA]`}>
                            <tr className={`text-[#979797] text-nowrap font-[600]`}>
                                <td scope="col" className={`px-8 py-6 rounded-l-[5px]`}>
                                    Company Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    User Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    Model Name
                                </td>
                                <td scope="col" className={`px-8 py-6`}>
                                    IMEI No.
                                </td>
                                <td scope="col" className={`px-8 py-6 rounded-r-[5px]`}>
                                    Purchase Date
                                </td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] font-[600]`}>
                            {data?.map((item) => (
                                <tr key={item?.id} className={`bg-white border-b text-[16px]`}>
                                    <td className={`px-8 py-6 text-nowrap hover:cursor-pointer`} onClick={() => openModal(item?.id)}>
                                        <span>{item?.companyname}</span>
                                    </td>
                                    <td className={`px-8 py-6 text-nowrap hover:cursor-pointer`} onClick={() => openModal(item?.id)}>
                                        <span>{item?.username}</span>
                                    </td>
                                    <td className={`px-8 py-6 text-nowrap hover:cursor-pointer`} onClick={() => openModal(item?.id)}>
                                        <span>{item?.modelname}</span>
                                    </td>
                                    <td className={`px-8 py-6 text-nowrap hover:cursor-pointer`} onClick={() => openModal(item?.id)}>
                                        <span>{item?.imei}</span>
                                    </td>
                                    <td className={`px-8 py-6 text-nowrap hover:cursor-pointer`} onClick={() => openModal(item?.id)}>
                                        <span>{item?.date}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {modalData &&
                        <Model
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                            modeltitle={'Contact Support Request'}
                            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-[90%] md:w-full max-w-lg `}
                            modelbody={
                                <>
                                    <div className={`max-h-[470px] overflow-y-scroll px-2`}>
                                        <div className={`flex flex-col border-b pb-4 text-xs`}>
                                            <h2 className={`text-sm lg:text-xl font-bold mb-2 lg:mb-2`}>{modalData?.username}</h2>
                                            <span className={`text-[#979797] text-xs lg:text-[16px] font-semibold mb-2.5`}>{modalData?.companyname}</span>

                                            <span className={`text-[#383336] text-xs lg:text-[14px] mb-2.5`}>Purchase Date <span className={`font-bold`}>{modalData?.date}</span></span>
                                            <div className={`sm:flex my-4`}>
                                                <div className={`flex mr-6`}>
                                                    <div className={`flex text-xs lg:text-sm items-center space-x-1`}>
                                                        <Img src={CALL_ICON} className={`w-5`} alt={``} />
                                                        <Link to={`tel:+1234 567 890`}>+1234 567 890</Link>
                                                    </div>
                                                </div>
                                                <div className={`flex`}>
                                                    <div className={`flex text-xs lg:text-sm items-center space-x-1`}>
                                                        <Img src={MAIL_ICON} className={`w-5`} alt={``} />
                                                        <Link to={`mailto:johnsmith@gmail.com`}>johnsmith@gmail.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className={`text-xs lg:text-sm text-[##636262]`}><span className={`font-bold`}>Message</span>: Lorem ipsum dolor sit amet consectetur. Venenatis proin erat non nisi blandit massa id placerat. Lorem ipsum dolor</p>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col border-b pb-5 text-xs`}>
                                            <h2 className={`text-sm font-bold mb-3 lg:text-lg mt-3`}>Model Info</h2>
                                            <div className={`flex flex-col sm:flex-row sm:space-x-12 sm:space-y-0 space-y-2`}>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>Model Name</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>{modalData?.modelname}</p>
                                                </div>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>IMEI</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>{modalData?.imei}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col border-b pb-5 text-xs`}>
                                            <h2 className={`text-sm font-bold mb-3 lg:text-lg mt-3`}>Location Info</h2>
                                            <div className={`flex justify-between flex-wrap`}>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>Pincode</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>369 234</p>
                                                </div>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>Country</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>India</p>
                                                </div>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>State</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>Kerala</p>
                                                </div>
                                                <div>
                                                    <p className={`text-[#979797] text-xs lg:text-sm font-bold`}>City</p>
                                                    <p className={`text-[#383336] text-xs lg:text-sm`}>Kollam</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col pb-4 text-xs`}>
                                            <h2 className={`text-sm lg:text-lg font-bold mb-2 mt-3`}>Invoice</h2>
                                            <div className={`w-full`}>
                                                <Link to={`/invoice.pdf`} target={`_blank`} download>
                                                    <a href={`/invoice.pdf`} download>
                                                        <button className={`bg-[#F8F8F8] flex flex-col sm:flex-row justify-between items-center w-full text-[#383336] rounded-[10px] text-sm px-[15px] py-[12px] font-bold text-center`} type={`button`}>
                                                            <div className={`flex items-center`}>
                                                                <div>
                                                                    <div className={`mr-2 p-1 bg-white rounded-[4px]`}>
                                                                        <img src={FILE_ICON} className={`w-5`} alt={``} />
                                                                    </div>
                                                                </div>
                                                                <span className={`text-xs lg:text-sm text-start`}>Invoice_FIle_Dummy_Title_123.PDF</span>
                                                            </div>
                                                            <span className={`flex hidden sm:block`}>
                                                                <img src={EYE_ICON} className={`w-5`} alt={``} />
                                                            </span>
                                                        </button>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        />
                    }

                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    );
};

export default ContactSupport;
