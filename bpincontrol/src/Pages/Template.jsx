import React from 'react'
import { TEAM_IMG1, TEAM_IMG2, TEAM_IMG3, TEAM_IMG4, TEAM_IMG5, } from '../assets'

const Template = () => {
    const url = "https://media.istockphoto.com/id/1616721805/photo/specialists-walking-and-discussing-work-with-nurse-in-hospital-corridor.webp?b=1&s=170667a&w=0&k=20&c=EVS3Ru-mNQNUB2M61BBiSwNS123rm3NZoyT2wXH9oGo="
    return (
        <>
            <div className={`font-Roboto flex justify-between items-center mb-8`}>
                <span className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-[500]`}>Templates</span>
            </div>
            <div className={`grid justify-items-center items-center w-full gap-x-4 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 `}>
                <div className={`flex flex-col item-center justify-center md:item-start md:justify-start mb-4`}>
                    <div className={`mb-4 w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] `}>
                        <img src={url} alt="" className={`w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] object-cover`} />
                    </div>
                    <div>
                        <span className={`font-[500] text-lg`}>Team 1 Name</span>
                    </div>
                </div>
                <div className={`flex flex-col  item-center justify-center md:item-start md:justify-start mb-4`}>
                    <div className={`mb-4 w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] `}>
                        <img src={url} alt="" className={`w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] object-cover`} />
                    </div>
                    <div>
                        <span className={`font-[500] text-lg`}>Team 1 Name</span>
                    </div>
                </div>
                <div className={`flex flex-col item-center justify-center md:item-start md:justify-start mb-4`}>
                    <div className={`mb-4 w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] `}>
                        <img src={url} alt="" className={`w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] object-cover`} />
                    </div>
                    <div>
                        <span className={`font-[500] text-lg`}>Team 1 Name</span>
                    </div>
                </div>
                <div className={`flex flex-col item-center justify-center md:item-start md:justify-start mb-4`}>
                    <div className={`mb-4 w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] `}>
                        <img src={url} alt="" className={`w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] object-cover`} />
                    </div>
                    <div>
                        <span className={`font-[500] text-lg`}>Team 1 Name</span>
                    </div>
                </div>
                <div className={`flex flex-col item-center justify-center md:item-start md:justify-start mb-4`}>
                    <div className={`mb-4 w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] `}>
                        <img src={url} alt="" className={`w-[290px] min-w-[290px] max-w-[290px] h-[290px] min-h-[290px] max-h-[290px] object-cover`} />
                    </div>
                    <div>
                        <span className={`font-[500] text-lg`}>Team 1 Name</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template