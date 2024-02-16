import React from 'react';
import Nav from './Nav';
import bg from '../images/bg.png';

export default function Hero() {
  return (
    <div
      className='bg-custom-black px-2 md:px-12 py-6 relative'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Nav />

      <div className='my-12 flex flex-col justify-between gap-8'>
        <h1 className='font-Pretendard text-white text-6xl font-semibold leading-14 tracking-tighter text-center mt-12'>
          블로그 서비스
        </h1>
        <h4 className='font-Pretendard text-white text-base font-normal leading-17 tracking-tighter text-center mb-12'>
          IT 외주, 개발 비즈니스 꿀팁 블로그 서비스
        </h4>
      </div>
    </div>
  );
}
