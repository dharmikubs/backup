import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DELETE_ICON, EDIT_ICON } from '../../assets';
import Model from '../../Components/common/Model';
import Input from '../../Components/common/Input';
import Label from '../../Components/common/Label';
import TextArea from '../../Components/common/TextArea';
import Button from '../../Components/common/Button';
import Img from '../../Components/common/Img';

const Faq = () => {
    const [searchval, setSearchval] = useState('');
    const [question, setQuestion] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');

    const openModal = (mode) => {
        setModalMode(mode);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const data = [
        {
            id: 1,
            question: `Balaji Wafer ma thi dedko km nikdo ?`,
            answer: `News jota evu lage adhunik machinary hova 6ata pn nikdu to public city stunt bni sake`,
        },
        {
            id: 2,
            question: `IRA Question lorem ipsume dolor sit amet consectetur venatis proin?`,
            answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi natus odio tempore. At, quas aut optio eligendi iste hic fugiat possimus unde ab voluptatibus, qui obcaecati odio illo velit saepe?`,
        },
    ];
    return (
        <>

            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>FAQs</h2>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>FAQs List</h3>
                    <form className={`flex justify-between space-x-3`}>
                        <Input
                            type={`search`}
                            value={searchval}
                            onChange={(e) => setSearchval(e?.target?.value)}
                            placeholder={`Search...`}
                            className={`text-xs md:text-sm font-[500] p-2.5 md:w-[237px] border border-[#E0DDD9] focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in rounded-[10px] placeholder:text-[#979797] text-[#383336]`}
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
                    modeltitle={modalMode === 'add' ? 'Add FAQ' : 'Edit FAQ'}
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-[90%] md:w-full max-w-lg `}
                    modelbody={
                        <>
                            <div>
                                <Label
                                    htmlFor="question"
                                    className={`text-sm text-[#383336] font-semibold`}>
                                    Question
                                </Label>
                                <Input
                                    type={`text`}
                                    id={`question`}
                                    className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500]`}
                                    placeholder={`Enter Question`}
                                    autoComplete={`off`}
                                    value={question}
                                    onChange={(e) => setQuestion(e?.target?.value)}
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor={`answer`}
                                    className={`text-sm text-[#383336] font-semibold`}>
                                    Answer
                                </Label>
                                <TextArea
                                    type="text"
                                    id="answer"
                                    rows={4}
                                    className={`bg-[#F8F8F8] border-none text-[#383336] placeholder:text-[#979797] text-sm rounded-[10px] block w-full p-3 mt-3 focus:ring-1 focus:ring-[#383336] focus:border-[#383336] transition-all duration-300 ease-in font-[500] resize-none`}
                                    placeholder="Type here..."
                                    autoComplete="off"
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
                                <td scope="col" className={`rounded-l-[5px]`}></td>
                                <td scope="col" className={`rounded-r-[5px]`}></td>
                            </tr>
                        </thead>
                        <tbody className={`text-[#383336] text-nowrap px-12`}>
                            {data?.map((item) => (
                                <tr key={item?.id} className={`border-b-[10px] border-[#fff] bg-[#FBFBFB]`}>
                                    <td scope="row" className={`px-8 py-6 font-bold`}>
                                        <div className={`flex flex-col justify-between`}>
                                            <div className={`flex justify-between mb-2`}>
                                                <div className={`flex space-x-2`}>
                                                    <div>{item?.id}</div>
                                                    <div>{item?.question}</div>
                                                </div>
                                            </div>
                                            <div className={`font-normal text-wrap ml-4`}>
                                                <span>{item?.answer}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`px-8 py-6 text-end flex justify-end space-x-3`}>
                                        <Button className={`w-5`} id={`editbtn`} onClick={() => openModal('edit')}>
                                            <Img
                                                src={EDIT_ICON}
                                                className={`w-6 min-w-6`}
                                                alt={``} />
                                        </Button>
                                        <Button
                                            className={`w-5`}>
                                            <Img
                                                src={DELETE_ICON}
                                                className={`w-5 min-w-5`}
                                                alt={``} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Faq;
