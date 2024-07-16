import React from 'react';
import { CLOSE_MODAL_BTN } from '../../assets';

const Model = ({ isOpen, closeModal, modeltitle, modelbody, className }) => {
    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };
    return (
        <>
            {isOpen && (
                <>
                    <div
                        id="modal-overlay"
                        className={`fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-40`}
                        onClick={handleOverlayClick}
                        style={{ display: 'block' }}
                    ></div>
                    <div
                        id="modal"
                        className={className}
                        style={{ display: 'block' }}
                    >
                        <div className={`relative w-full`}>
                            <div className={`relative`}>
                                <div className={`flex items-center justify-between p-4 md:p-5 border-b-[1px] border-[#E3E0D8] rounded-t`}>
                                    <h3 className={`text-xl font-bold text-[#383336]`}>
                                        {modeltitle}
                                    </h3>
                                    <button
                                        id="close-modal-button"
                                        type="button"
                                        className={`end-2.5 text-[#383336] bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`}
                                        onClick={closeModal}
                                    >
                                        <img src={CLOSE_MODAL_BTN} alt="" />
                                    </button>
                                </div>
                                <div className={`p-4 md:p-5`}>
                                    <form className={`space-y-4`} action="">
                                        {modelbody}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Model;
