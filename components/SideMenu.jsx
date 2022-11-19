import React from 'react'
import {rec_channels} from '../data/MOCK_DATA'
import {top_channels} from '../data/MOCK_DATA'
import {RiMovieLine} from "react-icons/ri";
import Image from 'next/image';
import {BsDot} from "react-icons/bs";

const SideMenu = () => {

    return (
        <div className="w-14 sm:w-16 xl:w-[15rem] p-2 bg-[#0e0e10] h-fit">
            <div>
                <p className="hidden xl:flex uppercase font-bold text-[0.8rem] pb-4">
                    Recommended Channels
                </p>
                <p>
                    <RiMovieLine size={20} className="xl:hidden text-center w-full"/>
                </p>
            </div>
            {rec_channels.map((item, index) => (
                <div className="inline-flex items-center w-full py-[2px]" key={index}>
                    <div>
                        <Image src={item.avatar} width="50" height="50" alt={item.username}/>
                    </div>
                    <div className="hidden xl:flex justify-between w-full">
                        <div>
                            <p>{item.username}</p>
                            <p className="text-gray-400">{item.game_name}</p>
                        </div>
                        <p className="flex items-center">
                            <BsDot size={40} color="red"/> {item.rank}K
                        </p>
                    </div>
                </div>
            ))}
            <div>
                <p className="hidden xl:flex uppercase font-bold text-sm py-4">
                    Top Channels
                </p>
                <p>
                    <RiMovieLine size={20} className="xl:hidden text-center w-full"/>
                </p>
            </div>
            {top_channels.map((item, index) => (
                <div className="inline-flex items-center w-full py-[2px]" key={index}>
                    <div>
                        <Image src={item.avatar} width="50" height="50" alt={item.username}/>
                    </div>
                    <div className="hidden xl:flex justify-between w-full">
                        <div>
                            <p>{item.username}</p>
                            <p className="text-gray-400">{item.game_name}</p>
                        </div>
                        <p className="flex items-center">
                            <BsDot size={40} color="red"/> {item.rank}K
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SideMenu