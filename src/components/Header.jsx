import React from 'react'
import { TbMessages } from 'react-icons/tb';

const Header = () => {
  return (
    <div className='px-4'>
      <div className="flex justify-between">
        <div className="flex pt-2">
          <TbMessages fontSize={24} color="#377aff" />
          <p className="font-bold pl-1 text-lg">RealAssist.AI</p>
        </div>
        <p className="font-bold pt-2 text-sm">
          123 Main Street, Dover, NH 03820-4667
        </p>
      </div>
      <hr className="border-b-2 mx-2 mt-3 inline-block border-[#377aff] w-full" /></div>
  )
}

export default Header