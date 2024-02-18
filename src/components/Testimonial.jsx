import React from 'react';
import review from '../images/review.png';

export default function Testimonial({ description, name, location }) {
  return (
    <div className=' bg-white py-4 w-[320px] h-[380px] rounded-2xl border border-solid border-gray-300 relative mx-4'>
      <div className='flex justify-between items-center border-b border-solid border-gray-300 pb-6 mb-4 mx-2'>
        <div className='text-xs text-light-gray font-semibold'>{name}</div>
        <div className='flex items-center'>
          <img src={review} className='w-[90px]' alt='5 star' />
          <p className='text-500 font-semibold'>5.0</p>
        </div>

        <div className='text-light-gray text-xs'>{location}</div>
      </div>
      <p className='text-lg leading-5 font-normal text-zinc-950 px-6'>
        {description}
      </p>
    </div>
  );
}
