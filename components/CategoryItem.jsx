import Image from 'next/image'
import React from 'react'

const CategoryItem = ({img, title, viewers, tag1, tag2}) => {
    return (
        <div className="p-2">
            <Image src={img} width={261} height={350} alt="/"/>
            <div>
                <p className='font-bold'>{title}</p>
                <p className='text-sm text-gray-500 py-[4px]'>{viewers}</p>
                <div className="flex gap-2">
                    <p className="bg-gray-700 px-3 py-[2px] rounded-full text-sm font-bold">{tag1}</p>
                    {tag2 && <p className="bg-gray-700 px-2 rounded-full text-sm font-bold">{tag2}</p>}
                </div>
            </div>
        </div>
    );
}

export default CategoryItem