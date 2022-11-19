import React from 'react'
import Remote from "./../public/assets/remote.png"
import Mic from "./../public/assets/mic.png"
import Headphones from "./../public/assets/headphones.png"
import Trophy from "./../public/assets/trophy.png"
import Paint from "./../public/assets/paint.png"
import Image from "next/image"

const IconBar = () => {
  return (
    <div className="p-2 md:p-8">
      {/* Container */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/* gird Item */}
        <div className="w-full h-[50px] rounded px-3 bg-[#9147ff] flex items-center justify-between">
          <p className="font-bold text-xl">Games</p>
          <Image src={Remote} />
        </div>
        <div className="w-full h-[50px] rounded px-3 bg-[#9147ff] flex items-center justify-between">
          <p className="font-bold text-xl">IRL</p>
          <Image src={Mic} />
        </div>
        <div className="w-full h-[50px] rounded px-3 bg-[#9147ff] flex items-center justify-between">
          <p className="font-bold text-xl">Music</p>
          <Image src={Headphones} />
        </div>
        <div className="w-full h-[50px] rounded px-3 bg-[#9147ff] flex items-center justify-between">
          <p className="font-bold text-xl">Esports</p>
          <Image src={Trophy} />
        </div>
        <div className="w-full h-[50px] rounded px-3 bg-[#9147ff] flex items-center justify-between">
          <p className="font-bold text-xl">Creative</p>
          <Image src={Paint} />
        </div>
      </div>
    </div>
  );
}

export default IconBar