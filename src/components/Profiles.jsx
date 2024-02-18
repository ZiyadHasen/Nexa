import React from 'react';

export default function profiles({ id, header, description, image, date }) {
  return (
    <div className='my-16'>
      <p className='text-gray-300 text-lg leading-5 mb-6'>{date}</p>
      <div className='flex gap-6 content-center pb-16 border-b-0.5 border-light-border'>
        <img
          src={image}
          alt='the foto of the peoples'
          style={{ height: '91px', width: '91px' }}
        />
        <div>
          <div className=' text-3xl leading-10 text-black-600 font-extrabold  mb-6'>
            {header}
          </div>
          <div className='text-lg leading-5 font-normal'>{description}</div>
        </div>
      </div>
    </div>
  );
}
// border-b-2 border-gray-700
