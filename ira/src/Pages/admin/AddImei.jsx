import React from 'react'
import { Link } from 'react-router-dom'

const AddImei = () => {
    return (
        <>
            <div className={`lg:flex justify-between items-center mb-8`}>
                <h2 className={`text-lg lg:text-2xl font-bold`}>Add IMEI Data</h2>
                <nav className={`flex justify-between`} aria-label="Breadcrumb">
                    <ol className={`inline-flex items-center sm:mb-0`}>
                        <li>
                            <div className={`flex items-center`}>
                                <Link to="/product/productmgt" className={`text-sm font-medium text-[#3983336]`}>IMEI Management</Link>
                            </div>
                        </li>
                        <span className={`mx-1 text-gray-400 text-xs`}>/</span>
                        <li>
                            <div className={`flex items-center`}>
                                <span className={`text-sm font-bold text-[#3983336]`}>Add IMEI Data</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className={`relative shadow-tableshadow rounded-[10px] px-5 bg-white`}>
                <div className={`lg:flex w-full justify-between sm:py-6 sm:px-4 py-4 lg:space-y-0 space-y-4 items-center`}>
                    <h3 className={`text-xl text-wrap text-[#383336] font-bold`}>Add IMEI List</h3>
                </div>
                <div className={`pagination p-[1rem]`}></div>
            </div>
        </>
    )
}

export default AddImei