import React from "react";

const NavBar = () => {
  return (
    <div className=' w-full md:w-screen  bg-[#efc250] flex flex-row  justify-between gap-5 items-center '>
      <div className='shrink-0'>
        <img
          src='/plantai-trans-white-green.png'
          alt='logo image'
          className='h-12 pl-4 shrink-0'
        />
      </div>
      <div className='text-black max-sm:hidden font-bold  flex flex-row justify-between gap-2 items-center  flex-nowrap list-none text-xl'>
        <li>Home</li>
        <li>Scan</li>
        <li>AgroLearn</li>
        <li>Community</li>
        <li>About</li>
      </div>
      <div className='flex  pr-10 items-center'>
        <ul className='flex h-7 justify-around items-center gap-3'>
          <li className='bg-[#296002]  p-1 px-4 rounded-tl-lg rounded-br-xl border text-white '>
            Scan
          </li>
          <li className='bg-[#296002]  sm:max-md:hidden p-1 px-2 rounded-tl-lg rounded-br-xl border  text-white whitespace-nowrap'>
            Dr-Crop
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
