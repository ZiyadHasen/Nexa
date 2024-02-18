import React from 'react';

export default function HowCard({ detailedImage, text, header, buttonText }) {
  return (
    <div className='relative max-medium:mx-[4rem]  max-medium:mx-[4rem] max-extraSmall:mx-[2rem]'>
      <img
        src={detailedImage}
        alt='Detailed'
        className='inline h-[550px] max-medium:h-[350px] max-extraSmall:h-[260px] max-medium:w-[700px] '
      />
      <div className='absolute inset-0 mb-[4rem] mt-[7rem] font-normal max-medium:mt-[4rem] max-small:mt-[2rem]  font-normal medium:mb-[1rem] '>
        <h1 className='text-white font-semibold text-[44px] max-largeMedium:text-4xl max-medium:text-3xl max-midSmall:text-2xl max-small:text-xl max-extraSmall:text-lg max-verySmall:text-base leading-[70px] tracking-tighter mb-[1rem]  mx-[6rem] max-midSmall:mx-[3rem] max-extraSmall:mx-[2rem]     text-center'>
          {header}
        </h1>

        <div className='text-center max-largeMedium:mx-[25%] max-small:mx-[10%] font-normal mx-[35%]'>
          <div className=' text-align: center'>
            <p className='font-normal max-largeMedium:text-sm max-medium:text-xs max-extraSmall:text-very-small-size max-verySmall:text-very-very-small-size text-base text-white max-small:text-xs mb-[2rem]'>
              {text}
            </p>
          </div>
          <button className='bg-white rounded-full px-4 py-2 max-midSmall:px-4 max-small:px-3 text-xs:px-2  max-verySmall:text-small-size max-midSmall:text-xs max-extraSmall:text-very-small-size text-black'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

//  max-medium:mx-[2rem]
