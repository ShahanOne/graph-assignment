import React from 'react';
const Footer = () => {
  return (
    <div className='px-4 absolute bottom-0 w-full'>
      <hr className="border-b-2 mx-2 mt-3 inline-block border-[#377aff] w-full" />
      <div className="flex justify-between">
        <p className="font-bold pl-1 text-lg text-[#1463FF]">
          Report Genereted on September 26, 2023
        </p>
        <p className="font-bold pt-2 text-sm">
          RealAssist Property Report | Page 1 <span className='text-[#626E99]'>of 25</span> 
        </p>
      </div>
    </div>
  );
};

export default Footer;
