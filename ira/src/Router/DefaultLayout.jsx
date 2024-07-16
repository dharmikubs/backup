import React from 'react'

import Sidebar from '../Components/common/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Sidebar />
            <main className={`bg-[#F8F8F8] h-screen-minus-header`} >
                <div className={`sm:ml-64`}>
                    <section className={`p-6 text-lg sm:texl-2xl md:text-2xl font-[500] font-quicksand`}>
                        <Outlet />
                    </section>
                </div>
            </main>

        </>
    )
}

export default Layout