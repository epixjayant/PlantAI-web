import React from "react";

const NavBar = () => {
  return (
    <div Class='w-screen h-16  bg-[#efc250] flex flex-row flex-wrap justify-between items-center '>
      <div className='logo'>
        <img
          src='/plantai-trans-white-green.png'
          alt='logo image'
          class='h-12 pl-4'
        />
      </div>
      <div class='text-black font-bold  flex flex-row justify-center items-center gap-4 flex-wrap list-none text-xl'>
        <li>Home</li>
        <li>Scan</li>
        <li>Contact</li>
        <li>About</li>
      </div>
      <div class='flex  pr-10 items-center'>
        <ul class='flex h-7 justify-around items-center gap-3'>
          <li class='bg-[#296002] p-1 px-2 rounded-tl-lg rounded-br-xl border  text-white'>
            Dr-Crop
          </li>
          <li class='bg-[#296002] p-1 px-4 rounded-tl-lg rounded-br-xl border text-white '>
            Scan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
