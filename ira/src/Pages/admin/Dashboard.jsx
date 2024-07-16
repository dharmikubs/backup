import React from 'react'
import { CONTACT_SUPPORT, SERVICE_COUNTS, REGISTER_USER } from '../../assets'
import { Link } from 'react-router-dom'
import Img from '../../Components/common/Img'

const Dashboard = () => {
    return (
        <>
            <div>
                <h2 className={`text-lg lg:text-2xl mb-8 font-bold`}>Dashboard</h2>
            </div>
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5`}>
                <Link to="/dashboard/extendwarrenty"
                    className={`rounded-[10px]  bg-white px-7.5 py-6 shadow-default cursor-pointer h-[196px]`}>
                    <div className={`flex h-11.5 w-11.5 items-center px-7 bg-meta-2`}>
                        <Img
                            src={SERVICE_COUNTS}
                            alt={``}
                            className={`p-1.5 bg-[#F8F8F8] rounded-[10px]`} />
                    </div>
                    <div className={`mt-4 flex items-end justify-between py-3 px-7`}>
                        <div>
                            <h4 className={`text-title-md font-bold text-[#383336]`}>
                                {200}
                            </h4>
                            <span className={`text-sm font-semibold`}>Extend Warrenty Request Counts</span>
                        </div>
                    </div>
                </Link>


                <Link to="/dashboard/contactsupport"
                    className={`rounded-[10px]  bg-white px-7.5 py-6 shadow-default h-[196px]`}>
                    <div className={`flex h-11.5 w-11.5 items-center px-7 bg-meta-2`}>
                        <Img
                            src={CONTACT_SUPPORT}
                            alt={``}
                            className={`p-1.5 bg-[#F8F8F8] rounded-[10px]`} />
                    </div>

                    <div className={`mt-4 flex items-end justify-between py-3 px-7`}>
                        <div>
                            <h4 className={`text-title-md font-bold text-[#383336]`}>
                                {1325}
                            </h4>
                            <span className={`text-sm font-semibold`}>Contact Support Requests</span>
                        </div>
                    </div>
                </Link>

                <Link to="/dashboard/registereduser"
                    className={`rounded-[10px]  bg-white px-7.5 py-6 shadow-default h-[196px]`}>
                    <div className={`flex h-11.5 w-11.5 items-center px-7 bg-meta-2`}>
                        <Img
                            src={REGISTER_USER}
                            alt={``}
                            className={`p-1.5 bg-[#F8F8F8] rounded-[10px]`} />
                    </div>

                    <div className={`mt-4 flex items-end justify-between py-3 px-7`}>
                        <div>
                            <h4 className={`text-title-md font-bold text-[#383336]`}>
                                {100}
                            </h4>
                            <span className={`text-sm font-semibold`}>Registered Users</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Dashboard