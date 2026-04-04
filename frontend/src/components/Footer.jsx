// Footer.jsx
// min width-855px okay
import React from "react";

const Footer = () => {
  return (
    <>
      <div className='bg-gray-200 '>
        <div className='flex justify-around bg-[#efc250]'>
          <div className='w-3/15 flex items-center'>
            <img
              className='h-14 '
              src='/plantai-trans-white.png'
              alt='PlantAI'
            />
          </div>

          <div className='w-10/15 py-4 grid grid-cols-3  md:grid-cols-4   gap-x-3 gap-y-2 sm:gap-x-5 sm:gap-y-2  sm:px-4 '>
            <div className=' flex flex-col'>
              <h2 className='text-black  font-bold whitespace-nowrap'>
                For Farmers
              </h2>
              <a
                href='#'
                className=' text-sm text-blue-600 hover:text-blue-800 visited:text-purple-600 '
              >
                PlantAI Mobile App
              </a>
              <a href='#' className='text-sm'>
                Find Products
              </a>
              <a href='#' className='text-sm'>
                Weather
              </a>
            </div>
            <div className='flex flex-col '>
              <h2 className='text-black font-bold whitespace-nowrap'>
                For Business
              </h2>

              <a href='#' className='text-sm'>
                API Toolkit
              </a>
              <a href='#' className='text-sm'>
                E-cart
              </a>
            </div>
            <div className='flex flex-col '>
              <h2 className='text-black font-bold'>Company</h2>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-800 visited:text-purple-600'
              >
                Job offers
              </a>
              <a href='#'>Press & Media</a>
            </div>
            <div className='flex flex-col  '>
              <h2 className='text-black font-bold whitespace-nowrap'>
                For Researchers
              </h2>

              <a href='#' className='text-sm '>
                Research Paper
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-between px-40 bg-[#efc250] '>
          <div className='flex items-center gap-3 '>
            <a href='#'>
              <img
                src='src/assets/icons/insta-color.png'
                className='w-10 object-contain'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='src/assets/icons/youtube.png'
                className='w-12 object-contain'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='src/assets/icons/f.png'
                className='w-10 object-contain'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='src/assets/icons/x.png'
                className='w-10 object-contain'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='src/assets/icons/in.png'
                className='w-10 object-contain'
                alt=''
              />
            </a>
          </div>
          <div className='w-40 flex items-center object-contain'>
            <img
              src='src/assets/icons/playstore.png'
              alt='GET IT ON PlayStore'
            />
          </div>
        </div>
        <div className='bg-gray-3200 text-xs text-black flex justify-between items-center'>
          <div>&copy; 2026 epixJayant</div>
          <div className='flex justify-around gap-2 sm:gap-5 py-1 whitespace-nowrap'>
            <ul>Imprints</ul>
            <ul>Privacy notice</ul>
            <ul>Terms of use</ul>
            <ul>EPFO Form 5A</ul>
            <ul>Manage cookies</ul>
            <ul>Sitemap</ul>
          </div>
          <div className='flex-row'>&#127760; English</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
