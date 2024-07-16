import React from 'react'

import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Sidebar />
            <main className={`bg-LightCream h-[100dvh]`} >
                <div className={`md:ml-64`}>
                    <section className={`p-6`}>
                        <Outlet />
                    </section>

                </div>
            </main>

        </>
    )
}

export default Layout