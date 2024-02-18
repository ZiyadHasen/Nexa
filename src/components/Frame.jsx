import React from 'react';

export default function Frame({ image }) {
  return (
    <div>
      <img
        src={image}
        alt='the foto of the peoples'
        className='rounded-xl border border-gray-100 max-small:w-50% max-small:w-50%  max-small:border-0 '
        // style={{ height: '320px', width: '200px' }}
      />
    </div>
  );
}
