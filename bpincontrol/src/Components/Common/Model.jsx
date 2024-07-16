import React, { useState } from 'react'
import { CLOSEBTN } from '../../assets'
const Model = ({ isOpen, closeModal, modeltitle, modelbody }) => {
    return (
        <>
            {isOpen && (
                <>
                    <div id="modal-overlay" className={`fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-40`} onClick={closeModal}></div>
                    <div id="modal" className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[5px] z-50 w-[90%] md:w-md max-w-lg font-Roboto`}>
                        <div className={`relative w-full`}>
                            <div className={`relative p-8 md:p-10`}>
                                <div className={`flex items-center justify-between mb-10`}>
                                    <h3 className={`text-xl xl:text-2xl font-bold text-Black`}>{modeltitle}</h3>
                                    <button id="close-modal-button" type="button" className={`end-2.5 text-[#010101] bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`} onClick={closeModal}>
                                        <img src={CLOSEBTN} alt="" />
                                    </button>
                                </div>
                                <div>
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
    )
}

export default Model