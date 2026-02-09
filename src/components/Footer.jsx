// Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <>
      <div class='bg-gray-200 '>
        <div class='flex justify-around bg-[#efc250]'>
          <div class='w-3/15 flex items-center'>
            <img class='h-14 ' src='/plantai-trans-white.png' alt='PlantAI' />
          </div>

          <div className='f-top-ul' class='w-10/15 py-4 flex flex-row gap-15'>
            <div class=' flex flex-col'>
              <h2 class='text-black  font-bold'>For Farmers</h2>
              <a
                href='#'
                class=' text-sm text-blue-600 hover:text-blue-800 visited:text-purple-600 '
              >
                PlantAI Mobile App
              </a>
              <a href='#' class='text-sm'>
                Find Products
              </a>
              <a href='#' class='text-sm'>
                Weather
              </a>
            </div>
            <div class='flex flex-col '>
              <h2 class='text-black font-bold'>For Business</h2>

              <a href='#' class='text-sm'>
                API Toolkit
              </a>
              <a href='#' class='text-sm'>
                E-cart
              </a>
            </div>
            <div class='flex flex-col '>
              <h2 class='text-black font-bold'>For Researchers</h2>

              <a href='#' class='text-sm'>
                Research Paper
              </a>
            </div>

            <div class='flex flex-col '>
              <h2 class='text-black font-bold'>Company</h2>
              <a href='#'>Job offers</a>
              <a href='#'>Press & Media</a>
            </div>
          </div>
        </div>

        <div class='flex justify-between px-40 bg-[#efc250] h-18'>
          <div class='flex items-center gap-3 '>
            <a href='#'>
              <img src='src/assets/icons/insta-color.png' class='h-7' alt='' />
            </a>
            <a href='#'>
              <img src='src/assets/icons/youtube.png' class='h-7' alt='' />
            </a>
            <a href='#'>
              <img src='src/assets/icons/f.png' class='h-7' alt='' />
            </a>
            <a href='#'>
              <img src='src/assets/icons/x.png' class='h-7' alt='' />
            </a>
            <a href='#'>
              <img src='src/assets/icons/in.png' class='h-7' alt='' />
            </a>
          </div>
          <div class='w-40 flex items-center'>
            <img
              src='src/assets/icons/playstore.png'
              alt='GET IT ON PlayStore'
            />
          </div>
        </div>
        <div class='bg-gray-3200 h-8 text-black flex justify-evenly items-center'>
          <div className='f-bottom-copywrites'>&copy; 2026 epixJayant</div>
          <div className='tnc' class='flex justify-around gap-5'>
            <ul>Imprints</ul>
            <ul>Privacy notice</ul>
            <ul>Terms of use</ul>
            <ul>EPFO Form 5A</ul>
            <ul>Manage cookies</ul>
            <ul>Sitemap</ul>
          </div>
          <div className='lang font-semibold'>&#127760; English</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
