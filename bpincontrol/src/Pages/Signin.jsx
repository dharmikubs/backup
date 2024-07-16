import React from 'react'
import { Link } from 'react-router-dom';
import { LOGOBLACK } from '../assets/index'

const Home = () => {
    return (
        <>
            <div className={`bg-[#FDFBF7] h-[100dvh] w-full flex flex-col items-center justify-center`}>
                <img src={LOGOBLACK} alt="" className={`max-w-32 sm:max-w-32 md:max-w-40 lg:max-w-40 xl:max-w-40 md:mb-7 mb-7`} />
                <div className={`card bg-white rounded-[5px] p-6 md:p-10 flex flex-col shadow-signin_shadow font-Roboto w-[300px] max-w-[300px] sm:w-[450px] sm:max-w-[450px] md:w-[500px] md:max-w-[500px]`}>
                    <span className={`text-center sm:text-start font-bold text-lg md:text-2xl mb-5 md:mb-8 text-[#010101]`}>Sign In to bpincontrol</span>
                    <div className={`input-group flex flex-col font-Roboto`}>
                        <div className={`flex flex-col mb-4`}>
                            <label className={`text-sm mb-2 md:mb-3 text-[#4B4B4B]`}>
                                Email Address
                            </label>
                            <input type="email" className={`border border-[#DDDDDD] rounded-[5px] p-2 sm:p-3 placeholder-[#979797] text-[#010101] font-Roboto text-[14px] foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`} placeholder='Enter Your Email' />
                        </div>
                        <div className={`flex flex-col mb-4 md:mb-8`}>
                            <label className={`text-sm mb-2 md:mb-3 text-[#4B4B4B]`}>
                                Password
                            </label>
                            <input type="password" className={`border border-[#DDDDDD] rounded-[5px] p-2 sm:p-3 placeholder-[#979797] text-[#010101] font-Roboto text-[14px] foucs:ring-1 focus:ring-[#010101] focus:border-[#010101]`} placeholder='Enter Your Password' />
                        </div>
                        <Link to='/team'>
                            <button className={`p-2 md:p-3 bg-[#010101] text-[#fff] rounded-[5px] capitalize font-[900] w-full`} type='submit'>
                                sign in
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home