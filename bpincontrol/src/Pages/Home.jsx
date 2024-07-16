import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { LOGOBLACK } from '../assets/index'
import Layout from '../Components/Common/Layout';

const Home = () => {
    return (
        <>
            <div className={`bg-[#FDFBF7] h-[100dvh] w-full flex flex-col items-center justify-center`}>
                <img src={LOGOBLACK} alt="" className={`max-w-36 sm:max-w-40 md:max-w-48 lg:max-w-52 xl:max-w-64 md:mb-7 mb-5`} />
                <Link to='/signin' className={`font-Roboto font-[900] text-sm sm:text-sm md:text-lg`}>Sign In to bpincontrol</Link>
            </div>
        </>
    )
}

export default Home