import React from 'react';

export default function profiles({ id, header, description, image, date }) {
  return (
    <div className='my-[50px]'>
      <p className='text-gray-300 text-lg leading-5 mb-6'>{date}</p>
      <div className='flex gap-6 content-center pb-16 border-b-0.5 border-light-border'>
        <img src={image} alt='the foto of the peoples' />
        <div>
          <div className='text-4xl leading-10 text-black-600 font-extrabold  mb-6'>
            {header}
          </div>
          <div className='text-xl leading-5 font-light'>{description}</div>
        </div>
      </div>
    </div>
  );
}
// border-b-2 border-gray-700
